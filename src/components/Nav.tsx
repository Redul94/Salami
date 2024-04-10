import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <nav className="flex h-16 items-center  justify-between bg-red-500">
        <div>
          <Image
            src={"/images/mahaki.jpg"}
            alt={"logo"}
            className="m-4 rounded-full "
            width={40}
            height={30}
          />
        </div>
        <div className="m-4">
          <Link
            href="/components/Sign.tsx
        "
          >
            <button className="btn btn-ghost btn-active mr-2">Sign up</button>
          </Link>
          <Link href={"/Log"}>
            <button className="btn btn-ghost btn-active">Log in</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
