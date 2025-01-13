"use client";

import dynamic from "next/dynamic";

const Logo = dynamic(() => import("@/components/logo"), { ssr: false });

const DisplayLogo = () => {
  return <Logo />;
};

export default DisplayLogo;
