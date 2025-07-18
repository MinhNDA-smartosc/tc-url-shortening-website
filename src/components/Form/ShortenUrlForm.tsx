import React from "react";

import { useShortenURL } from "../../hooks";

export const ShortenUrlForm: React.FC = () => {
  const { register, handleSubmit, errors, mutation, shortUrl } = useShortenURL();

  return (
    <div className="w-full flex flex-col items-center px-4">
      <form onSubmit={handleSubmit((data) => mutation.mutate(data))} className="w-full max-w-4xl bg-dark-violet rounded-lg p-6 md:p-10 flex flex-col items-center gap-4 shadow-lg relative -top-16 z-10" style={{ boxShadow: "0 8px 24px rgba(44, 45, 63, 0.15)" }}>
        <div className="form-container flex flex-col md:flex-row items-center gap-4 w-full">
          <input type="text" placeholder="Shorten a link here..." {...register("url")} className={`flex-1 px-6 py-4 rounded-md text-lg focus:outline-none bg-white ${errors.url ? "border-2 border-red-500" : ""}`} />
          <button type="submit" className="bg-cyan text-white font-bold rounded-md px-8 py-4 text-lg transition-colors duration-300 hover:bg-cyan-hover min-w-[150px]" disabled={mutation.isPending}>
            {mutation.isPending ? "Shortening..." : "Shorten It!"}
          </button>
        </div>
        <div className="error-container w-full flex justify-start items-start">{errors.url && <span className="text-red-500 text-sm mt-2">{errors.url.message}</span>}</div>
      </form>
      {shortUrl && (
        <div className="w-full max-w-4xl bg-white rounded-lg p-4 mt-4 flex flex-col md:flex-row items-center justify-between shadow">
          <span className="text-gray-800 break-all">{shortUrl}</span>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="bg-cyan text-white font-bold rounded-md px-6 py-2 mt-2 md:mt-0 md:ml-4 text-base transition-colors duration-300 hover:bg-cyan-hover">
            Visit
          </a>
        </div>
      )}
      {mutation.isError && <span className="text-red-500 text-sm mt-2">{(mutation.error as Error)?.message || "Failed to shorten URL."}</span>}
    </div>
  );
};
