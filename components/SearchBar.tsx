"use client";

import React from "react";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import {useDebounce} from "@/lib/useDebounce";
import {Input} from "./ui/input";

export function SearchBar() {
  const [search, setSearch] = React.useState("");
  const router = useRouter();
  const pathname = usePathname();
  const debouncedValue = useDebounce(search, 500);

  React.useEffect(() => {
    if (debouncedValue) {
      router.push(`/discover?search=${debouncedValue}`);
    } else if (!debouncedValue && pathname === "/discover")
      router.push("/discover");
  }, [router, pathname, debouncedValue]);

  return (
    <div className="relative mt-8 block">
      <Input
        className="input-class py-6 pl-12 focus-visible:ring-offset-orange-1"
        placeholder="Search for podcasts"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onLoad={() => setSearch("")}
      />
      <Image
        src="/icons/search.svg"
        alt="search"
        height={20}
        width={20}
        className="absolute left-4 top-3.5"
      />
    </div>
  );
}
