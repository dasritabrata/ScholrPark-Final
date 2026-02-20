"use client";

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";
export const AuthButton = () => {
  return (
    <>
  <SignedIn>
    <UserButton></UserButton>
  </SignedIn>


    <SignedOut>
      <SignInButton mode="modal">
    <Button variant={"outline"}
      className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500 hover:border-blue-500">
      <UserCircleIcon />
      Sign in
    </Button>
    </SignInButton>
    </SignedOut>
    </>
  );
};
