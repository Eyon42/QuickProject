/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Link from "next/link";
import socialMediaIcons from "../utils/socialMediaIcons";
// import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <footer className="bg-background2">
      <div className="flex w-full flex-col items-center justify-between px-5 py-20 md:flex-row lg:items-start lg:px-[100px] 2xl:px-[300px]">
        <div className="flex flex-col items-center lg:items-start">
          <span className="text text-8xl font-bold text-white">SIWA</span>
          <span className="text-xl">Aceleramos talento</span>
        </div>
        <div className="mt-3 flex flex-col items-center justify-between text-center font-thin lg:flex-row lg:items-start lg:text-start">
          <div className="flex flex-col gap-5">
            <span className="text-xl font-bold text-white">Seguinos en</span>
            <div className="flex items-center justify-center gap-5">
              <Link
                href="https://t.me/Siwalatam"
                className="h-8 w-auto md:h-12"
              >
                {socialMediaIcons.telegram}
              </Link>
              <Link
                href="https://discord.gg/NBZRgWaGdb"
                className="h-8 w-auto md:h-12"
              >
                {socialMediaIcons.discord}
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCjNhjj3V86svsmSu6Q1Da9A"
                className="h-8 w-auto md:h-12"
              >
                {socialMediaIcons.youtube}
              </Link>
              <Link
                href="https://instagram.com/siwa.app"
                className="h-8 w-auto md:h-12"
              >
                {socialMediaIcons.instagram}
              </Link>
              <Link
                href="https://twitter.com/SiwaLatam"
                className="h-8 w-auto md:h-12"
              >
                {socialMediaIcons.twitter}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="md:text-md border-t border-gray-700 py-16 text-center text-lg font-medium text-primary">
        © 2023 SIWA - Todos los derechos reservados
      </p>
    </footer>
  );
};

export default Footer;
