"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import LogoDark from "@/assets/logo/logo-dark.png";
import LogoLight from "@/assets/logo/logo-light.png";

const Logo = () => {
  const { theme } = useTheme();

  return (
    <>
      {theme === "dark" ? (
        <Image src={LogoDark} alt="BunnyAsk Logo" fill />
      ) : (
        <Image src={LogoLight} alt="BunnyAsk Logo" fill />
      )}
    </>
  );
};

export default Logo;
