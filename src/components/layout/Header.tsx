/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @next/next/no-html-link-for-pages */
import { signIn, useSession } from "next-auth/react";
import NavMenu from "./NavMenu";
// import Image from "next/image";
// import { useRouter } from "next/router";

const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data: session, status } = useSession();
  console.log(session, status);
  return (
    <nav
      className="mx-0 flex w-full items-center justify-between bg-transparent px-5 py-4 md:py-10 lg:flex-row lg:px-[100px] 2xl:px-[300px]"
      id="header"
    >
      <div className="flex w-full flex-wrap items-center justify-between">
        <a href="/#header">
          <span className="mb-[-6px] flex items-center text-6xl font-semibold text-primary dark:text-gray-100 md:mb-[-12px] md:text-8xl xl:mb-1">
            SIWA
          </span>
        </a>

        {session ? (
          <NavMenu />
        ) : (
          <button onClick={() => signIn()} className="button">
            Ingresar
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
