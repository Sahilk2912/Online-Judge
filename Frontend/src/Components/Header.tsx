"use client";
import { Dropdown, Navbar, DarkThemeToggle } from "flowbite-react";
import React from "react";

const Header = () => {
  const userId = "Bonnie"; // Replace this with the actual user ID

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Algo-Code
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2 items-center">
        <DarkThemeToggle className="mr-4" />
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <span className="block text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {userId}
            </span>
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          href="/problems"
          className="block py-2 pr-4 pl-3 text-gray-700 rounded md:p-0 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white"
        >
          Problems
        </Navbar.Link>
        <Navbar.Link
          href="/create-problem"
          className="block py-2 pr-4 pl-3 text-gray-700 rounded md:p-0 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white"
        >
          Create Problem
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
