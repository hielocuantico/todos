"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  title: string;
  route: string;
  icon: React.ReactNode;
}

const SidebarItem = (props: Props) => {
  const { title, route, icon } = props;

  const path = usePathname();
  const activeItemCheck = path === route;

  return (
    // text-white bg-gradient-to-r from-sky-600 to-cyan-400 - Activa
    <li>
      <Link
        href={route}
        className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl ${
          activeItemCheck
            ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
            : "text-gray-600"
        }`}
      >
        {icon}
        <span className="-mr-1 font-medium">{title}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
