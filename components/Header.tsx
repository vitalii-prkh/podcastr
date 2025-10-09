import React from "react";
import Link from "next/link";
import {cn} from "@/lib/utils";

type HeaderProps = {
  headerTitle?: string;
  titleClassName?: string;
};

export function Header(props: HeaderProps) {
  return (
    <header className="flex items-center justify-between">
      {props.headerTitle ? (
        <h1
          className={cn("text-18 font-bold text-white-1", props.titleClassName)}
        >
          {props.headerTitle}
        </h1>
      ) : (
        <div />
      )}
      <Link
        href="/discover"
        className="text-16 font-semibold text-orange-1"
      >
        See all
      </Link>
    </header>
  );
}
