import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between px-12 py-4 shadow-2xl border-2">
        <div>
          <Image
            src={"/vidtok.png"}
            alt="logo"
            height={256}
            width={256}
            className="h-16 w-auto"
          />
        </div>
        <div className="flex justify-between items-center gap-8">
          <Link href={"/"} className="hover:font-bold">
            {" "}
            Home{" "}
          </Link>
          <Link href={"/"} className="hover:font-bold">
            {" "}
            My Videos{" "}
          </Link>
          <Link href={"/"} className="hover:font-bold">
            {" "}
            Profile{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
