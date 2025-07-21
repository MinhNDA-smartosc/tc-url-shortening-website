import { useMutation } from "@tanstack/react-query";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { URIApi } from "../api";

// Types for links
interface ShortLink {
  original_link: string;
  full_short_link: string;
}

type FormData = { url: string };
export const useShortenURL = () => {
  // State for all shortened links
  const [links, setLinks] = useState<ShortLink[]>([]);
  // Ref for input fallback
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Form setup
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
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

  return {
    links,
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
