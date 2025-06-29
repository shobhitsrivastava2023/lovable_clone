"use client"
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";

export default function Home() {
  const trpc = useTRPC()
  const invoke  = useMutation(trpc.invoke.mutationOptions({}))
  
  return (
    <div className="p-4 max-w-7xl max-auto">
      <Button onClick={() => invoke.mutate({text : "test 1 "})}> Invoke Background Job</Button>
    </div>
  );
}
