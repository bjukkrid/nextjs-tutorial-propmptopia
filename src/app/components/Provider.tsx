"use client";

import { SessionProvider } from "next-auth/react";

function Provider({ children = {} as any, session = {} as any }) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default Provider;
