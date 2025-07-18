import React, { useEffect, useRef, useState } from "react";
import { useShortenURL } from "../../hooks";
import { Controller } from "react-hook-form";
import { cn } from "../../libs/util";

interface ShortLink {
  original_link: string;
  full_short_link: string;
}

// Define the possible response structure from the shorten API
interface ShortenApiResponse {
  result_url?: string;
  short_url?: string;
  data?: {
    short_url?: string;
  };
}

export const ShortenUrlForm: React.FC = () => {
  const { control, handleSubmit, errors, mutation } = useShortenURL();
  const [links, setLinks] = useState<ShortLink[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const error = mutation.isError ? (mutation.error as Error)?.message : null;
  const loading = mutation.isPending;
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

  // Handle form submit
  const onSubmit = (data: { url: string }) => {
    mutation.mutate(data, {
      onSuccess: (result: ShortenApiResponse) => {
        // Try to get both original and short link from API response
        const original = data.url;
        const short = result?.result_url || result?.short_url || result?.data?.short_url;
        if (short) {
          setLinks((prev) => [{ original_link: original, full_short_link: short }, ...prev]);
        }
      },
    });
  };

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

  return (
    <>
      <section className="form relative mx-7 md:mx-16">
        <div className="form-container flex flex-col items-center w-full absolute top-0 -translate-y-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row w-full bg-[#3b3054] p-6 md:p-12 rounded-lg form-background bg-no-repeat bg-right-top items-center gap-4 md:gap-8 relative">
            <div className="w-full relative text-left md:mr-5 mb-0 ">
              <Controller
                control={control}
                name="url"
                render={({ field }) => <input id="link" type="text" placeholder="Shorten a link here..." className={cn("w-full p-3 text-lg rounded-lg border focus:outline-none bg-white", errors.url || error ? "border-2 border-red-500" : "border-none")} {...field} ref={inputRef} />}
              />
              {errors.url ? <p className="error-text text-red-500 absolute mt-1 text-sm">{errors.url.message as string}</p> : error ? <p className="error-text text-red-500 absolute mt-1 text-sm">{error}</p> : null}
            </div>
            <button className="primary-btn rounded-lg w-full md:w-[15vw] min-w-[120px] p-3 bg-cyan text-white text-lg font-bold transition-colors duration-300 hover:bg-cyan-hover" type="submit" disabled={loading}>
              {loading ? "Loading..." : "Shorten It!"}
            </button>
          </form>
        </div>
      </section>

      <div className="shorter-container pt-24 md:pt-32 px-4 md:px-16 bg-[hsl(230,25%,95%)]">
        {links.length > 0 &&
          links.map((link, index) => (
            <div key={index} className="shorter bg-white my-4 p-4 md:p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="shorter-original w-full md:w-[40vw] py-2">
                <a href={link.original_link} target="_blank" rel="noopener noreferrer" className="shorter-originalLink text-[#3b3054] block no-underline pr-2 max-w-full break-all">
                  {link.original_link}
                </a>
              </div>
              <div className="shorter-result flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center border-t md:border-t-0 md:ml-4 pt-2 md:pt-0 w-full md:w-auto">
                <a href={link.full_short_link} target="_blank" rel="noopener noreferrer" className="shorter-fullShortLink text-cyan block py-2 no-underline break-all">
                  {link.full_short_link}
                </a>
                <button onClick={() => handleCopyClick(index)} className={cn("primary-btn rounded-lg w-full md:w-auto px-4 py-2 bg-cyan text-white text-base font-bold transition-colors duration-300 hover:bg-cyan-hover", copiedIndex === index && "bg-dark-violet")} disabled={loading}>
                  {copiedIndex === index ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
