import { Home, Inbox, Scroll } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ModeToggle } from "./mode-toggle";

const routes = [
  {
    href: "/",
    icon: <Home />,
  },
  {
    href: "/",
    icon: <Scroll />,
  },
  {
    href: "/",
    icon: <Inbox />,
  },
];

const Navigation = () => {
  return (
    <nav className="w-full h-20 flex items-center justify-center shadow-sm">
      <div className="w-full max-w-7xl grid grid-cols-3 justify-between items-center px-4">
        <div className="flex gap-2 items-center">
          <small className="text-sm font-bold text-zinc-600 dark:text-zinc-300 leading-none">
            iTanong
          </small>
          <Badge>In development</Badge>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-sm flex justify-between items-center gap-4">
            {routes.map(({ href, icon }, index) => (
              <div key={index}>
                <Link
                  href={href}
                  className="h-14 w-16 flex justify-center items-center hover:bg-zinc-200 dark:hover:bg-zinc-600 rounded-xl"
                >
                  {icon}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="place-self-end self-center">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
