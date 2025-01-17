"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "next-themes";

const SampleAvatar = () => {
  const { theme } = useTheme();

  return (
    <Avatar>
      <AvatarImage
        src={`/logo/${theme === "dark" ? "bunny-light.svg" : "bunny-dark.svg"}`}
        alt="Bunny Avatar"
      />
      <AvatarFallback>BN</AvatarFallback>
    </Avatar>
  );
};

export default SampleAvatar;
