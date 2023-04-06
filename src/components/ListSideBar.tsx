import Link from "next/link";
import { ListSideBarProps } from "@/types/listSideBar";

function ListSideBar(props: ListSideBarProps) {
  return (
    <li>
      <Link
        href={`${props.href}`}
        className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
      >
        {<props.icon />}
        <span
          className={`${
            (props.name == "Kanban" || props.name == "Inbox") &&
            "flex-1 whitespace-nowrap"
          } ml-3`}
        >
          {props.name}
        </span>

        {props.name == "Kanban" && (
          <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
            Pro
          </span>
        )}

        {props.name == "Inbox" && (
          <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
            3
          </span>
        )}
      </Link>
    </li>
  );
}

export default ListSideBar;
