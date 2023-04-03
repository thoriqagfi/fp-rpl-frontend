import Link from "next/link";

type DropDownSidebarProps = {
  name: string;
};

export const DropDownSidebar = ({ name }: DropDownSidebarProps) => {
  return (
    <li>
      <Link
        href="#"
        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      >
        {name}
      </Link>
    </li>
  );
};

export default DropDownSidebar;
