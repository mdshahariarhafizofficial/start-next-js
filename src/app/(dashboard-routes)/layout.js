import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 h-screen">
      {/* Menu */}
      <div className="bg-blue-500 col-span-3 p-10">
        <ul className="flex flex-col gap-10 items-stretch space-x-3 lg:flex">
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="dashboard/users"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600"
            >
              Users
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              href="dashboard/profile"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
            >
              Profile
            </Link>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
            >
              Link
            </a>
          </li>
        </ul>
      </div>
      {/* Routes */}
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default layout;
