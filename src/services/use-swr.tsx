"use client";

import { SWRConfig } from "swr";
import { taskApi } from "@/services/task-api";

export default function SWRProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SWRConfig
      value={{
        shouldRetryOnError: false,
        revalidateOnFocus: false,
        fetcher: async (path: string) => await taskApi.get<never>(path),
      }}
    >
      {children}
    </SWRConfig>
  );
}
