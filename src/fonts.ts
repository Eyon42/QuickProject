// import localFont from "next/font/local";
import { Roboto } from "next/font/google";
// import localFont from "next/font/local";

export const poppins = Roboto({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});


// export const dongle = localFont({
//   src: [
//     {
//       path: "../public/fonts/dongle/Dongle-Regular.ttf",
//       weight: "400",
//     },
//     {
//       path: "../public/fonts/dongle/Dongle-Light.ttf",
//       weight: "300",
//     },
//     {
//       path: "../public/fonts/dongle/Dongle-Bold.ttf",
//       weight: "700",
//     },
//   ],
//   variable: "--font-dongle",
// });
