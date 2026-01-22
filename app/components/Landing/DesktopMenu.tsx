import { ChevronDown } from "lucide-react";
import Link from "next/link";

const DesktopMenu = (props) => {
  const { subMenu, label, href } = props;

  return (
    <li className="relative flex items-center justify-between">
      <Link href={href} className="flex items-center gap-1.5">
        {label}
        {subMenu && <ChevronDown className="h-4 w-4" />}
      </Link>
    </li>
  );
};

export default DesktopMenu;
