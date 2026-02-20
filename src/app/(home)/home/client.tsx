"use client";

import { trpc } from "@/trpc/client";

const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({ text: "Antonio" });

  

  return (<div>Page Client Says {data?.greeting}</div>);
};

export default PageClient;
