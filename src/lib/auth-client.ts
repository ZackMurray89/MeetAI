import { createAuthClient } from "better-auth/react";

const baseURL =
  typeof window === "undefined"
    ? process.env.NEXTAUTH_URL || "http://localhost:3000"
    : window.location.origin;

export const authClient = createAuthClient({
  baseURL: baseURL,
});
