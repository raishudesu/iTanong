import { Home, Inbox, Scroll } from "lucide-react";
import Link from "next/link";

export const routes = [
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

const MobileViewNavigator = () => {
  return (
    <div className="bottom-0 sticky md:hidden w-full flex items-center justify-center backdrop-blur-sm border-t py-2">
      <div className="w-full max-w-sm grid grid-cols-3 place-items-center">
        {routes.map(({ href, icon }, index) => (
          <div key={index} className="w-full">
            <Link
              href={href}
              className="h-14 w-full flex justify-center items-center hover:bg-zinc-200 dark:hover:bg-zinc-800 ease-in-out transition duration-300 rounded-xl"
            >
              {icon}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileViewNavigator;
