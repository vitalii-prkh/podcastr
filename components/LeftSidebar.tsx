"use client";

import Link from "next/link";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import {SignedIn, SignedOut, useClerk} from "@clerk/nextjs";
import {sidebarLinks} from "@/constants";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

export function LeftSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const {signOut} = useClerk();

  return (
    <section className={cn("left_sidebar h-[calc(100vh-5px)]")}>
      <nav className="flex flex-col gap-6">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center"
        >
          <Image
            src="/icons/logo.svg"
            alt="Logo"
            width={23}
            height={27}
          />
          <h1 className="text-24 font-extrabold text-white-1 max-lg:hidden">
            Podcastr
          </h1>
        </Link>
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);

          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex items-center justify-center gap-3 py-4 max-lg:px-4 lg:justify-start",
                {
                  "border-r-4 border-orange-1 bg-nav-focus": isActive,
                },
              )}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p>{link.label}</p>
            </Link>
          );
        })}
      </nav>
      <SignedOut>
        <div className="flex-center w-full pb-14 max-lg:px-4 lg:pr-8">
          <Button
            asChild
            className="text-16 w-full bg-orange-1 font-extrabold"
          >
            <Link href="/sign-in">Sign in</Link>
          </Button>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex-center w-full pb-14 max-lg:px-4 lg:pr-8">
          <Button
            className="text-16 w-full bg-orange-1 font-extrabold"
            onClick={() => signOut(() => router.push("/"))}
          >
            Log Out
          </Button>
        </div>
      </SignedIn>
    </section>
  );
}
