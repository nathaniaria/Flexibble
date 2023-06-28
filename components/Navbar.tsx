import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthProviders from "./AuthProviders";

function Navbar() {
  const session = {};


  return (
    <nav className="flexBetween navBar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={100}
            height={100}
            alt="Flexibble logo"
          />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
            {session ? (
              <>
                userPhoto
                <Link href="/create-project">
                  Share Work
                </Link>
              </>
            ): (
              <AuthProviders />
            )}
      </div>
    </nav>
  );
}

export default Navbar;
