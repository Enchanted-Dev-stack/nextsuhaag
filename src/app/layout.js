import {
  Inter,
  Outfit,
  Kaushan_Script,
  Kalam,
  Bad_Script,
  Playfair_Display,
  Montserrat,
  Raleway,
  Allura,
  Calligraffitti,
  Caveat,
  Poppins,
} from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";
import { NextUIProvider } from "@nextui-org/react";

import { AuthProvider } from "@/components/Contexts/authContext";
// import Redirect from "@/components/Utils/redirect";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] });
const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--kaushan-font",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--kalam-font",
});

const bad = Bad_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--bad-font",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--playfair-font",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--montserrat-font",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--raleway-font",
});

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--allura-font",
});

const calli = Calligraffitti({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--calli-font",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--caveat-font",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins-font",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--outfit-font",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${kaushan.variable} ${outfit.variable} ${kalam.variable} ${bad.variable} ${playfair.variable} ${montserrat.variable} ${raleway.variable} ${allura.variable} ${calli.variable} ${caveat.variable} ${poppins.variable}`}>
        <NextUIProvider>
          <AuthProvider>
            {/* <Redirect /> */}
          {children}
          <Script
            type="module"
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          />
          <Script
            nomodule
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
          />
          {/* </body> */}

          {/* // <!-- fontawesome --> */}
          <Script
            src="https://kit.fontawesome.com/1758e1736e.js"
            crossorigin="anonymous"
          />
          </AuthProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
