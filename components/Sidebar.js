import { useSession } from "next-auth/react";
import {
  ComputerDesktopIcon,
  UserIcon,
  CalendarDaysIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronDownIcon,
  UserGroupIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  const { data: session, loading } = useSession();

  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={UserIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingCartIcon} title="Marketplace" />
      <SidebarRow Icon={ComputerDesktopIcon} title="Watch" />
      <SidebarRow Icon={CalendarDaysIcon} title="Friends" />
      <SidebarRow Icon={ClockIcon} title="Events" />
      <SidebarRow Icon={ChevronDownIcon} title="See more" />
    </div>
  );
}

export default Sidebar;
