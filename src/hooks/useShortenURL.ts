import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { URIApi } from "../api";
import { schema } from "../schemas";

type FormData = { url: string };
export const useShortenURL = () => {
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      url: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      return await URIApi.shorten(data.url);
    },
    onSuccess: (data) => {
      setShortUrl(data?.result_url || data?.short_url || data?.data?.short_url || null);
      reset();
    },
  });
  return {
    shortUrl,
    register,
    handleSubmit,
    errors,
    mutation,
    control,
  };
};
