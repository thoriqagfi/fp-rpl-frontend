import Link from "next/link";

type ListAdminProfileProps = {
  href?: string;
  name: string;
  onClick?: () => void;
};

export const ListAdminProfile = ({ href, name, onClick }: ListAdminProfileProps) => {
  return (
    <li>
      <Link
        href={`${href}`}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
        role="menuitem"
        onClick={onClick}
      >
        {name}
      </Link>
    </li>
  );
};

export default ListAdminProfile;
