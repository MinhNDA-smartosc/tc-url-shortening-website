import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { URIApi } from "../api";
import { schema } from "../schemas";

// Types for links
interface ShortLink {
  original_link: string;
  full_short_link: string;
}

type FormData = { url: string };
export const useShortenURL = () => {
  // State for all shortened links
  const [links, setLinks] = useState<ShortLink[]>([]);
  // State for which link was copied
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  // Ref for input fallback
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Load links from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("shortenedLinks");
    if (stored) {
      setLinks(JSON.parse(stored));
    }
  }, []);

  // Save links to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("shortenedLinks", JSON.stringify(links));
  }, [links]);

  // Form setup
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { url: "" },
  });

  // Mutation for shortening URL
  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      return await URIApi.shorten(data.url);
    },
    onSuccess: (result, data) => {
      // Try to get both original and short link from API response
      const original = data.url;
      const short = result?.result_url || result?.short_url || result?.data?.short_url;
      if (short) {
        setLinks((prev) => [{ original_link: original, full_short_link: short }, ...prev]);
      }
      reset();
    },
  });

  // Error and loading helpers
  const error = mutation.isError ? (mutation.error as Error)?.message : null;
  const loading = mutation.isPending;

  // Handle copy button
  const handleCopyClick = async (index: number) => {
    const link = links[index].full_short_link;
    try {
      await navigator.clipboard.writeText(link);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch {
      // fallback: select input
      if (inputRef.current) {
        inputRef.current.select();
      }
    }
  };

  return {
    links,
    copiedIndex,
    handleCopyClick,
    inputRef,
    control,
    handleSubmit,
    errors,
    mutation,
    error,
    loading,
    register,
  };
};
