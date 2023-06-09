import { Outlet, Link } from "react-router-dom";

import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

import { useSelector } from "react-redux";

import { signOutUser } from "../../utils/firebase.utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const user = useSelector((state) => state.user.user);
  const cardQuantity = useSelector((state) => state.cart.cartQuantity);

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <>
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <svg
                width="140"
                height="60.41657312159826"
                viewBox="0 0 350 79.34634368690203"
                className="css-1j8o68f"
              >
                <defs id="SvgjsDefs1236"></defs>
                <g
                  id="SvgjsG1237"
                  featurekey="ptiKCW-0"
                  transform="matrix(3.51971056174796,0,0,3.51971056174796,-0.5631536772922078,8.95213245194283)"
                  fill="#111111"
                >
                  <path d="M0.16 6 l3.48 0 l0 4.62 l-0.74 0 l0 -3.88 l-2.02 0 l0 12.52 l2.02 0 l0 -3.86 l0.74 0 l0 4.6 l-3.48 0 l0 -14 z M1.54 7.32 l0.72 0 l0 3.92 l6.1 0 l0 -5.24 l0.7 0 l0 5.94 l-7.52 0 l0 -4.62 z M11.2 6.74 l-0.68 0 l0 5.26 l-0.72 0 l0 -6 l2.1 0 l0 14 l-0.7 0 l0 -13.26 z M8.36 14.76 l-6.1 0 l0 4.02 l-0.74 0 l0 -4.76 l7.54 0 l0 5.24 l0.74 0 l0 -5.9 l-8.28 0 l0 -0.7 l9 0 l0 7.34 l-2.16 0 l0 -5.24 z M14.88 18.76 l0.88 0 l0.7 -1.68 l5.22 0.02 l1.28 2.9 l3.68 -0.02 l-6.3 -13.98 l-1.28 0 l-6.26 13.98 l3.9 0 l0.68 -1.6 l3.98 0 l-0.3 -0.68 l-4.12 0 l-0.64 1.58 l-2.38 0 l5.54 -12.6 l0.48 0 l5.56 12.6 l-2.12 0 l-1.28 -2.86 l-6.2 0 z M17.26 15.24 l2.44 -5.82 l4.1 9.32 l0.82 0 l-4.92 -10.96 l-3.6 8.08 l5.8 0 l-2.2 -4.86 l-1.52 3.66 l0.78 0 l0.74 -1.82 l1.1 2.4 l-3.54 0 z M30.400000000000002 16.7 c0.98 0.44 1.84 0.66 2.56 0.66 c0.36 0 0.58 -0.02 0.68 -0.08 c0.46 -0.12 0.78 -0.38 0.98 -0.78 l0.02 -0.04 c0.1 -0.18 0.14 -0.4 0.14 -0.68 c0 -0.14 -0.04 -0.3 -0.12 -0.5 l-0.04 -0.08 c-0.26 -0.54 -0.84 -0.9 -1.9 -1.24 l-0.2 -0.06 l-0.06 -0.02 c-1.62 -0.48 -2.66 -1.24 -3.16 -2.3 c-0.2 -0.4 -0.3 -0.84 -0.3 -1.32 c0 -0.5 0.1 -0.98 0.3 -1.48 l0.04 -0.08 c0.46 -0.92 1.2 -1.52 2.18 -1.82 c0.7 -0.1 1.1 -0.16 1.2 -0.16 c1.36 0 2.94 0.56 4.72 1.66 l0.38 -0.62 c-1.94 -1.18 -3.62 -1.76 -5.08 -1.76 c-0.58 0 -1.06 0.06 -1.4 0.2 c-1.18 0.32 -2.06 1.04 -2.64 2.18 l-0.06 0.14 c-0.24 0.58 -0.36 1.16 -0.36 1.74 c0 0.62 0.12 1.16 0.36 1.64 c0.62 1.24 1.82 2.12 3.62 2.66 l0.24 0.08 c0.82 0.26 1.3 0.54 1.48 0.86 l0.02 0.04 c0.04 0.06 0.06 0.14 0.06 0.24 c0 0.18 -0.02 0.3 -0.08 0.4 c-0.14 0.32 -0.48 0.48 -1.02 0.48 c-0.86 0 -2.1 -0.44 -3.06 -1.06 l-0.3 -0.18 l-1.76 2.84 l0.3 0.18 c1.42 0.96 3.3 1.56 4.82 1.56 c0.5 0 0.96 -0.06 1.38 -0.18 c1.18 -0.34 2.06 -1.08 2.64 -2.2 l0.08 -0.14 c0.24 -0.62 0.36 -1.2 0.36 -1.74 c0 -0.48 -0.16 -1.08 -0.46 -1.82 c-0.54 -1.08 -1.68 -1.9 -3.46 -2.46 l-0.28 -0.08 c-0.56 -0.18 -0.94 -0.36 -1.12 -0.5 c-0.24 -0.2 -0.38 -0.34 -0.44 -0.42 l-0.04 -0.22 c0 -0.2 0.04 -0.38 0.14 -0.52 c0.16 -0.3 0.32 -0.38 0.96 -0.38 c0.86 0 2.1 0.44 3.06 1.06 l0.3 0.18 l1.08 -1.72 l-0.32 -0.18 c-1.22 -0.8 -2.88 -1.36 -4.1 -1.36 c-0.54 0 -0.88 0.04 -1.06 0.14 c-0.82 0.24 -1.44 0.76 -1.84 1.54 c-0.18 0.34 -0.26 0.74 -0.26 1.24 c0 0.38 0.08 0.74 0.24 1.08 c0.42 0.9 1.36 1.56 2.82 2 l0.26 0.08 l0.54 0.2 c0.3 0.12 0.62 0.28 0.98 0.48 c0.64 0.38 0.96 0.92 0.96 1.64 c0 0.4 -0.1 0.78 -0.28 1.12 c-0.42 0.74 -1.14 1.12 -2.14 1.12 c-0.68 0 -1.64 -0.26 -2.88 -0.76 l-0.34 0.58 l-0.02 0.04 c1.14 0.58 2.22 0.86 3.26 0.86 c0.58 0 1.12 -0.12 1.6 -0.36 c0.94 -0.46 1.52 -1.42 1.52 -2.62 c0 -1.9 -1.46 -2.46 -3 -3 l-0.26 -0.08 c-1.26 -0.38 -2.04 -0.9 -2.36 -1.6 c-0.12 -0.24 -0.18 -0.5 -0.18 -0.8 c0 -0.38 0.06 -0.68 0.2 -0.94 c0.32 -0.58 0.78 -0.96 1.38 -1.14 l0.8 -0.1 c1.06 0 2.22 0.36 3.48 1.06 l-0.32 0.5 c-1.3 -0.64 -2.34 -0.96 -3.1 -0.96 c-0.38 0 -0.6 0.02 -0.7 0.08 c-0.44 0.12 -0.76 0.38 -0.98 0.8 l-0.02 0.04 c-0.1 0.18 -0.14 0.42 -0.14 0.72 c0 0.22 0.04 0.38 0.1 0.48 c0.26 0.54 0.94 0.98 2.02 1.3 l0.26 0.08 l0.5 0.16 c0.06 0.02 0.38 0.16 0.96 0.44 c0.78 0.44 1.34 1 1.66 1.66 c0.2 0.4 0.3 0.84 0.3 1.32 c0 0.58 -0.1 1.08 -0.32 1.5 l-0.04 0.08 c-0.46 0.92 -1.2 1.52 -2.18 1.82 c-0.7 0.1 -1.1 0.16 -1.2 0.16 c-1.02 0 -2.34 -0.38 -3.56 -0.96 l-0.56 -0.3 l1 -1.62 z M41.18000000000001 16.7 c0.98 0.44 1.84 0.66 2.56 0.66 c0.36 0 0.58 -0.02 0.68 -0.08 c0.46 -0.12 0.78 -0.38 0.98 -0.78 l0.02 -0.04 c0.1 -0.18 0.14 -0.4 0.14 -0.68 c0 -0.14 -0.04 -0.3 -0.12 -0.5 l-0.04 -0.08 c-0.26 -0.54 -0.84 -0.9 -1.9 -1.24 l-0.2 -0.06 l-0.06 -0.02 c-1.62 -0.48 -2.66 -1.24 -3.16 -2.3 c-0.2 -0.4 -0.3 -0.84 -0.3 -1.32 c0 -0.5 0.1 -0.98 0.3 -1.48 l0.04 -0.08 c0.46 -0.92 1.2 -1.52 2.18 -1.82 c0.7 -0.1 1.1 -0.16 1.2 -0.16 c1.36 0 2.94 0.56 4.72 1.66 l0.38 -0.62 c-1.94 -1.18 -3.62 -1.76 -5.08 -1.76 c-0.58 0 -1.06 0.06 -1.4 0.2 c-1.18 0.32 -2.06 1.04 -2.64 2.18 l-0.06 0.14 c-0.24 0.58 -0.36 1.16 -0.36 1.74 c0 0.62 0.12 1.16 0.36 1.64 c0.62 1.24 1.82 2.12 3.62 2.66 l0.24 0.08 c0.82 0.26 1.3 0.54 1.48 0.86 l0.02 0.04 c0.04 0.06 0.06 0.14 0.06 0.24 c0 0.18 -0.02 0.3 -0.08 0.4 c-0.14 0.32 -0.48 0.48 -1.02 0.48 c-0.86 0 -2.1 -0.44 -3.06 -1.06 l-0.3 -0.18 l-1.76 2.84 l0.3 0.18 c1.42 0.96 3.3 1.56 4.82 1.56 c0.5 0 0.96 -0.06 1.38 -0.18 c1.18 -0.34 2.06 -1.08 2.64 -2.2 l0.08 -0.14 c0.24 -0.62 0.36 -1.2 0.36 -1.74 c0 -0.48 -0.16 -1.08 -0.46 -1.82 c-0.54 -1.08 -1.68 -1.9 -3.46 -2.46 l-0.28 -0.08 c-0.56 -0.18 -0.94 -0.36 -1.12 -0.5 c-0.24 -0.2 -0.38 -0.34 -0.44 -0.42 l-0.04 -0.22 c0 -0.2 0.04 -0.38 0.14 -0.52 c0.16 -0.3 0.32 -0.38 0.96 -0.38 c0.86 0 2.1 0.44 3.06 1.06 l0.3 0.18 l1.08 -1.72 l-0.32 -0.18 c-1.22 -0.8 -2.88 -1.36 -4.1 -1.36 c-0.54 0 -0.88 0.04 -1.06 0.14 c-0.82 0.24 -1.44 0.76 -1.84 1.54 c-0.18 0.34 -0.26 0.74 -0.26 1.24 c0 0.38 0.08 0.74 0.24 1.08 c0.42 0.9 1.36 1.56 2.82 2 l0.26 0.08 l0.54 0.2 c0.3 0.12 0.62 0.28 0.98 0.48 c0.64 0.38 0.96 0.92 0.96 1.64 c0 0.4 -0.1 0.78 -0.28 1.12 c-0.42 0.74 -1.14 1.12 -2.14 1.12 c-0.68 0 -1.64 -0.26 -2.88 -0.76 l-0.34 0.58 l-0.02 0.04 c1.14 0.58 2.22 0.86 3.26 0.86 c0.58 0 1.12 -0.12 1.6 -0.36 c0.94 -0.46 1.52 -1.42 1.52 -2.62 c0 -1.9 -1.46 -2.46 -3 -3 l-0.26 -0.08 c-1.26 -0.38 -2.04 -0.9 -2.36 -1.6 c-0.12 -0.24 -0.18 -0.5 -0.18 -0.8 c0 -0.38 0.06 -0.68 0.2 -0.94 c0.32 -0.58 0.78 -0.96 1.38 -1.14 l0.8 -0.1 c1.06 0 2.22 0.36 3.48 1.06 l-0.32 0.5 c-1.3 -0.64 -2.34 -0.96 -3.1 -0.96 c-0.38 0 -0.6 0.02 -0.7 0.08 c-0.44 0.12 -0.76 0.38 -0.98 0.8 l-0.02 0.04 c-0.1 0.18 -0.14 0.42 -0.14 0.72 c0 0.22 0.04 0.38 0.1 0.48 c0.26 0.54 0.94 0.98 2.02 1.3 l0.26 0.08 l0.5 0.16 c0.06 0.02 0.38 0.16 0.96 0.44 c0.78 0.44 1.34 1 1.66 1.66 c0.2 0.4 0.3 0.84 0.3 1.32 c0 0.58 -0.1 1.08 -0.32 1.5 l-0.04 0.08 c-0.46 0.92 -1.2 1.52 -2.18 1.82 c-0.7 0.1 -1.1 0.16 -1.2 0.16 c-1.02 0 -2.34 -0.38 -3.56 -0.96 l-0.56 -0.3 l1 -1.62 z M51.480000000000004 18.76 l0.88 0 l0.7 -1.68 l5.22 0.02 l1.28 2.9 l3.68 -0.02 l-6.3 -13.98 l-1.28 0 l-6.26 13.98 l3.9 0 l0.68 -1.6 l3.98 0 l-0.3 -0.68 l-4.12 0 l-0.64 1.58 l-2.38 0 l5.54 -12.6 l0.48 0 l5.56 12.6 l-2.12 0 l-1.28 -2.86 l-6.2 0 z M53.86000000000001 15.24 l2.44 -5.82 l4.1 9.32 l0.82 0 l-4.92 -10.96 l-3.6 8.08 l5.8 0 l-2.2 -4.86 l-1.52 3.66 l0.78 0 l0.74 -1.82 l1.1 2.4 l-3.54 0 z M73.84000000000002 14.3 l-8.18 -8.3 l-1 0 l9.9 10.06 l0 -8.66 l-0.72 0 l0 6.9 z M73.18 12.7 l0 -6 l2.04 0 l0 12.58 l-0.34 0 l-0.08 -0.08 l-9.16 -9.28 l0 10.08 l2.1 0 l0 -5.9 l-0.74 -0.76 l0 5.94 l-0.64 0 l0 -7.6 l8.3 8.32 l1.28 0 l0 -14 l-3.48 0 l0 5.92 z M64.98000000000002 20 l0 -11.7 l9.58 9.72 l0 -1.06 l-10.28 -10.38 l0 13.42 l0.7 0 z M78.92 6 l2.1 0 l0 12.66 l-0.72 0 l0 -11.94 l-0.66 0 l0 12.56 l2.02 0 l0 -13.28 l0.72 0 l0 14 l-3.46 0 l0 -14 z M86.72 5.98 l5.8 10.9 l2.42 -4.48 l1.16 7.6 l0.72 0 l-1.5 -9.84 l-2.8 5.18 l-4.98 -9.36 l-0.82 0 z M93.10000000000001 11.36 l-0.94 1.74 l0.42 0.76 l1.32 -2.5 l1.76 -3.28 l0.06 -0.14 l0.66 -1.22 l0.48 0 l0.06 0.48 l1.5 9.76 l0.34 2.3 l-0.66 0 l-1.52 -9.9 l-0.18 -1.2 l-0.56 1.06 l1.6 10.48 l-0.02 0 l0.06 0.3 l2.12 0 l-2.12 -14.02 l-1.54 0 z M91.88000000000001 17.06 l-5.74 -10.82 l-0.12 -0.2 l-2.12 13.96 l3.5 0 l0.64 -4.14 l-0.42 -0.78 l-0.16 -0.3 l-0.68 4.48 l-2.04 0 l1.68 -10.96 l6.12 11.52 l2.18 -4.14 l-0.16 -1.06 l-0.02 -0.14 l-2 3.8 z M87.14 12.620000000000001 l3.92 7.38 l0.82 0 l-5.12 -9.62 l-1.3 8.36 l0.72 0 z"></path>
                </g>
              </svg>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            {user &&
              <div>
                Hello, {user.email}
              </div>
            }
            <Link
              to="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Shop
            </Link>
            <Link
              to="/cart"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cart {cardQuantity !== 0 && <span>({cardQuantity})</span>}
            </Link>
            {user ? (
              <span className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer" onClick={signOutUser}>Logout</span>
            ) : (
              <Link
                to="/login"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Login
              </Link>
            )}
          </Popover.Group>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="mt-6 flow-root">
              <div className="text-3xl font-bold my-4 h-10 w-10 cursor-pointer" onClick={handleMobileMenuOpen}>&times;</div>
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {user &&
                    <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Hello, {user.email}
                    </div>
                  }
                  <Link
                    to="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </Link>
                  <Link
                    to="/shop"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Shop
                  </Link>
                  <Link
                    to="/cart"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Cart {cardQuantity !== 0 && <span>({cardQuantity})</span>}
                  </Link>
                  {user ? (
                    <span className="cursor-pointer	-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={signOutUser}>Logout</span>
                  ) : (
                    <Link
                      to="/login"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Login
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
