import Link from "next/link";

type ListAdminProfileProps = {
  href: string;
  name: string;
};

export const ListAdminProfile = ({ href, name }: ListAdminProfileProps) => {
  return (
    <li>
      <Link
        href={href}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
        role="menuitem"
      >
        {name}
      </Link>
    </li>
  );
};

export default ListAdminProfile;
