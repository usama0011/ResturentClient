import Link from "next/link";
import { BookmarkAltIcon, DeviceMobileIcon, FlagIcon, GlobeIcon, HomeIcon, MenuIcon, NewspaperIcon, OfficeBuildingIcon, SearchIcon, TemplateIcon, UserIcon, XIcon } from "@heroicons/react/outline";
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavLink from "../../NavLink";
import { MapIcon } from "@heroicons/react/solid";


export default function NavBar() {
 
   const [MobNav, setMob] = useState(false);
   const router=useRouter()
   const [show, setShow] = useState(false);
   const [showMe, setShowMe] = useState(false);
   const ShowMenu = () => {
     setShow(!show);
   };
   const ShowSearchBarMe = () => {
     setMob(!MobNav);
   };
  return (
    <nav className="fixed top-0 left-0 w-full shadow-lg z-50">
      <div className="w-full text-white  bg-primary-color ">
        <div className="flex flex-col  px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="p-4 flex flex-row items-center justify-between">
            <a
              href="#"
              className="text-lg  font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
            >
              <Link href="/">
                <div className="font-bold text-white lg:w-2/5  md:w-2/12  cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <div>
                      <img
                        className="h-10"
                        src="https://img.icons8.com/external-itim2101-flat-itim2101/64/000000/external-beach-travel-itim2101-flat-itim2101-1.png"
                      />
                    </div>
                    <div className="font-bold">
                      <h1 className="font-bold">Hotely</h1>
                    </div>
                  </div>
                </div>
              </Link>
            </a>
            <div className=" transition duration-300 px-3" onClick={ShowMenu}>
              {show ? <HideMe /> : <ShowMe />}
            </div>
          </div>
          <div>
            <nav
              className="{'flex': open, 'hidden': !open}"
              className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row"
            >
              <div className="relative" x-data="{ open: false }">
                <button
                  onClick={ShowMenu}
                  className="flex  transition duration-300 flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg  md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  <span onClick={() => router.push("./chambre")}>
                    Nos chambres
                  </span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="{'rotate-180': open, 'rotate-0': !open}"
                    className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                {show && (
                  <div className="absolute  left-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
                    <div className="px-2 py-2  bg-primary-color rounded-md shadow dark-mode:bg-gray-800">
                      <a
                        className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        href="#"
                      >
                        Menu
                      </a>
                      <a
                        className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        href="#"
                      >
                        Nos SPA
                      </a>
                      <a
                        className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        href="#"
                      >
                        Réservation
                      </a>
                      <a
                        className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        href="#"
                      >
                        Carte
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <a
                onClick={() => router.push("./spa")}
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
              >
                Nos SPA
              </a>
              <a
                onClick={() => router.push("./Hotel")}
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
              >
                Menu
              </a>
              <a
                onClick={() => router.push("./Contact")}
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
              >
                Contact
              </a>

              <a
                onClick={() => router.push("./Update")}
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
              >
                Mettre à jour
              </a>
              <a
                onClick={() => router.push("./Book")}
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
              >
                Réservation
              </a>
              <a
                onClick={() => router.push("./Map")}
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
              >
                Carte
              </a>
              <a
                onClick={() => router.push("./Beach")}
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
              >
                Aventure
              </a>
            </nav>
          </div>
          <div className="hidden md:inline-flex items-center  relative rounded-lg">
            <div className="flex items-center relative rounded-lg">
              <SearchIcon className="h-6 absolute  top-2  right-3 pl-1  text-gray-300" />
              <input
                type="text"
                placeholder="Search"
                className=" rounded-lg hidden md:inline-flex outline-none text-gray-500 pl-3 px-6 py-2"
              />
            </div>
            <UserIcon className="h-6 ml-2 hidden md:inline-flex text-white cursor-pointer" />
          </div>
        </div>
        <div className="md:hidden transition duration-300 lg:hidden xl:hidden">
          {show && <MobileNavigation />}
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
        defer
      ></script>
    </nav>
  );
}
const MobileNavigation = () => {
  return (
    <div className=" py-5 ">
      <ul className="space-y-5 w-full">
        <li className="flex hover:bg-blue-800  transition duration-200 py-2  px-4  items-center space-x-3 w-full">
          <HomeIcon className="h-6" />
          <a onClick={() => router.push("/")} href="/">
            Accueil
          </a>
        </li>
        <li className="flex py-2 hover:bg-blue-800  transition duration-200  px-4 items-center space-x-3 w-full">
          <OfficeBuildingIcon className="h-6" />
          <a onClick={() => router.push("./chambre")} href="/chambre">
            Nos chambres
          </a>
        </li>
        <li className="flex py-2 hover:bg-blue-800  transition duration-200  px-4 items-center space-x-3 w-full">
          <GlobeIcon className="h-6" />
          <a onClick={() => router.push("./Hotel")} href="/Hotel">
            Menu
          </a>
        </li>
        <li
          onClick={() => router.push("./Contact")}
          className="flex py-2  hover:bg-blue-800  transition duration-200 px-4 items-center space-x-3 w-full"
        >
          <DeviceMobileIcon className="h-6" />
          <a onClick={() => router.push("./Contact")} href="/Contact">
            Conatct
          </a>
        </li>
        <li className="flex py-2 hover:bg-blue-800  transition duration-200  px-4 items-center space-x-3 w-full">
          <NewspaperIcon className="h-6" />
          <a onClick={() => router.push("./Update")} href="/Update">
            Mettre à jour
          </a>
        </li>

        <li className="flex py-2 hover:bg-blue-800  transition duration-200  px-4 items-center space-x-3 w-full">
          <BookmarkAltIcon className="h-6" />
          <a onClick={() => router.push("./Book")} href="/Book">
            Réservation
          </a>
        </li>
        <li className="flex py-2 hover:bg-blue-800  transition duration-200  px-4 items-center space-x-3 w-full">
          <FlagIcon className="h-6" />
          <a onClick={() => router.push("./Beach")} href="/Beach">
             Avennture
          </a>
        </li>
        <li className="flex py-2 hover:bg-blue-800  transition duration-200  px-4 items-center space-x-3 w-full">
          <MapIcon className="h-6" />
          <a onClick={() => router.push("./Map")} href="/Map">
            Carte
          </a>
        </li>
        <div className="rounded-lg px-3 w-full ">
          <div className="rounded-lg relative w-full">
            <SearchIcon className="h-6 absolute  top-2 right-3 pl-1  text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className=" w-full rounded-lg outline-none focus:ring-2  focus:ring-primary-color text-gray-800 pl-3 px-6 py-2"
            />
          </div>
          <UserIcon className="h-6 ml-2 hidden md:inline-flex text-white cursor-pointer" />
        </div>
      </ul>
    </div>
  );
};
const HideMe = () => {
  return (
    <div className="flex  lg:hidden md:hidden xl:hidden items-center space-x-3">
      <XIcon className="h-6 cursor-pointer text-white" />
      <h1 className=" hidden md:inline-flex cursor-pointer font-semibold">
        Close
      </h1>
    </div>
  );
};

const ShowMe = () => {
  return (
    <div className="flex lg:hidden md:hidden xl:hidden  items-center space-x-3">
      <MenuIcon className="h-6 cursor-pointer text-white" />
      <h1 className=" hidden md:inline-flex cursor-pointer font-semibold">
        Menu
      </h1>
    </div>
  );
};