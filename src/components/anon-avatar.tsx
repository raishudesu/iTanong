"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "next-themes";

const AnonAvatar = () => {
  const { theme } = useTheme();

  return (
    <Avatar>
      <AvatarImage
        src={`/logo/${
          theme === "dark" ? "anon-logo-dark.png" : "anon-logo-light.png"
        }`}
        alt="Bunny Avatar"
      />
      <AvatarFallback>BN</AvatarFallback>
    </Avatar>
  );
};

export default AnonAvatar;
