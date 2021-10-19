import Link from "next/link";
import { MenuIcon, SearchIcon, UserIcon } from "@heroicons/react/solid";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import NavLink from "../../NavLink";


export default function NavBar() {
  const [show, setShow] = useState(false);
  const router = useRouter()
  useEffect(() => {
    setShow(false)
  }, [router.pathname])
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="bg-primary-color px-4 w-screen h-14 flex relative items-center justify-between lg:px-10 xl:px-20">
        <Link href="/">
          <div className="font-bold text-white lg:w-2/5 md:w-2/12  cursor-pointer">
            Hotely
          </div>
        </Link>

        <div
          className={`${
            show ? "flex" : "hidden"
          } justify-between  items-start md:items-center absolute md:space-x-4 md:relative md:flex md:flex-row flex-col white bg-white md:bg-transparent shadow md:shadow-none py-2 w-full left-0 top-14 px-4 md:top-0 md:right-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-y-0 md:space-x-8 lg:space-x-10 items-start space-y-2">
            <NavLink path="/chambre" name="Nos chambres" />
            <NavLink path="/spa" name="Nos SPA" />
            <NavLink path="/Hotel" name="Menu" />
            <NavLink path="/Contact" name="Contact" />
            <NavLink path="/Update" name="Mettre à jour" />
          </ul>

          <section className="w-full flex items-center space-x-4 md:w-max justify-between mt-10 md:mt-0">
            <div className="relative flex-1 w-full md:max-w-xs">
              <input
                placeholder="Recherche"
                className="border border-gray-600 h-10 w-full pr-14 pl-2 rounded focus:outline-none focus:ring-primary-color focus:ring focus:ring-opacity-20"
              />
              <button className="absolute  h-10 w-10 right-0 rounded-r inline-flex justify-center items-center">
                <SearchIcon className="w-5 h-5" />
              </button>
            </div>
            <button className="">
              <UserIcon className="w-5 h-5 md:text-white" />
            </button>
          </section>
        </div>

        <button className="md:hidden" onClick={() => setShow(!show)}>
          <MenuIcon className="w-5 h-5 text-white" />
        </button>
      </div>
    </nav>
  );
}
