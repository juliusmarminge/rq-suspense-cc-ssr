"use client";

import { signIn } from "next-auth/react";
import {api } from "~/trpc/react";

export default function Home() {
  const hello = api.post.getLatest.useSuspenseQuery()

  return (
    <>
    <button onClick={() => signIn("discord")}>Sign in</button>

    <pre>
      {JSON.stringify(hello, null, 2)}
    </pre>
    </>
  )
}