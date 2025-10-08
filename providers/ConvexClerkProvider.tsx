"use client";

import React from "react";
import {ClerkProvider, useAuth} from "@clerk/nextjs";
import {ConvexProviderWithClerk} from "convex/react-clerk";
import {ConvexReactClient} from "convex/react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClerkProvider(props: {children: React.ReactNode}) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
      appearance={{
        layout: {
          socialButtonsVariant: "iconButton",
          logoImageUrl: "/icons/auth-logo.svg",
        },
        variables: {
          colorBackground: "#15171c",
          colorPrimary: "",
          colorForeground: "white",
          colorInput: "#1b1f29",
          colorInputForeground: "white",
        },
      }}
    >
      <ConvexProviderWithClerk
        client={convex}
        useAuth={useAuth}
      >
        {props.children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
