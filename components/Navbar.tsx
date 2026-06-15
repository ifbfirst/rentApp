"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Home, User, Bell, Menu, X, LogIn } from "lucide-react";
import { usePathname } from "next/navigation";

const menuConfig = [
  { name: "Home", href: "/", isPrivate: false },
  { name: "Properties", href: "/properties", isPrivate: false },
  { name: "Add Property", href: "/properties/add", isPrivate: true },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const isLoggedIn = false; // позже: session / auth context
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProfileMenuOpen(false);
  }, [pathname]);

  const visibleMenuItems = menuConfig.filter(
    (item) => !item.isPrivate || (isLoggedIn && item.isPrivate),
  );

  const renderMenuLinks = (variant: "desktop" | "mobile") =>
    visibleMenuItems.map((item) => {
      const isActive = pathname === item.href;
      const className =
        variant === "desktop"
          ? `text-white rounded-md px-3 py-2 ${isActive ? "bg-gray-800" : "hover:bg-gray-900"}`
          : `block rounded-md px-3 py-2 text-base font-medium ${isActive ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-700"}`;

      return (
        <Link key={item.name} href={item.href} className={className}>
          {item.name}
        </Link>
      );
    });

  const renderLoggedInActions = () => (
    <>
      <div className="relative group">
        <button
          type="button"
          className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View notifications</span>
          <Bell
            className="h-6 w-6 m-1 text-gray-400 hover:text-white cursor-pointer"
            strokeWidth={1.5}
          />
        </button>
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
          2
        </span>
      </div>

      <div className="relative ml-3">
        <button
          type="button"
          onClick={() => setIsProfileMenuOpen((prev) => !prev)}
          className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          id="user-menu-button"
          aria-expanded={isProfileMenuOpen}
          aria-haspopup="true"
        >
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">Open user menu</span>
          <User
            className="h-6 w-6 m-1 text-gray-400 hover:text-white cursor-pointer"
            strokeWidth={1.5}
          />
        </button>

        {isProfileMenuOpen && (
          <div
            id="user-menu"
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
          >
            <Link
              href="/"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
            >
              Your Profile
            </Link>
            <Link
              href="/"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
            >
              Saved Properties
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
            >
              Sign Out
            </Link>
          </div>
        )}
      </div>
    </>
  );

  const renderAuthSection = () =>
    !isLoggedIn ? (
      <button className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 cursor-pointer">
        <LogIn className="h-6 w-6 text-white mr-2" strokeWidth={1.5} />
        <span>Login or Register</span>
      </button>
    ) : (
      renderLoggedInActions()
    );

  return (
    <nav className="bg-blue-700 border-b border-blue-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="hidden lg:block">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <Link className="flex flex-shrink-0 items-center" href="/">
                <Home
                  className="h-10 w-10 text-white cursor-pointer"
                  strokeWidth={1.5}
                />
                <span className="text-white text-2xl font-bold ml-2">
                  PropertyPulse
                </span>
              </Link>

              <div className="ml-6 flex space-x-2">
                {renderMenuLinks("desktop")}
              </div>
            </div>

            <div className="flex items-center">{renderAuthSection()}</div>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="relative flex h-20 items-center justify-between">
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              type="button"
              id="mobile-dropdown-button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white cursor-pointer"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" strokeWidth={1.5} />
              ) : (
                <Menu className="h-6 w-6" strokeWidth={1.5} />
              )}
            </button>

            <Link className="flex flex-shrink-0 items-center" href="/">
              <Home
                className="h-10 w-10 text-white cursor-pointer"
                strokeWidth={1.5}
              />
            </Link>

            <div className="w-10" />
          </div>

          {isMobileMenuOpen && (
            <div id="mobile-menu">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {renderMenuLinks("mobile")}

                <div className="px-3 py-2">{renderAuthSection()}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
