import Link from "next/link";
import router, { useRouter } from "next/router";
export default function Footer() {
  const router=useRouter()
  return (
    <footer className="bg-primary-color   grid grid-cols-1 p-10  gap-y-7 h-full w-full ">
      <div className=" md:max-w-7xl lg:max-w-7xl w-full h-full  mx-auto">
        <div className="grid grid-cols-1   border-b  border-gray-400 pb-5 md:grid-cols-4 gap-5 lg:grid-cols-4">
          <div>
            <div className="flex cursor-pointer items-center pb-2 space-x-2">
              <div>
                <img
                  className="h-10"
                  src="https://img.icons8.com/external-itim2101-flat-itim2101/64/000000/external-beach-travel-itim2101-flat-itim2101-1.png"
                />
              </div>
              <div className="text-white font-semibold text-2xl">Hotely</div>
            </div>
            <div className="pb-2 text-sm text-white">
              <p>4 Bis row del las paymids</p>
              <p>92100,Buldgree Billcournt ,France</p>
              <p>+33(0)234232323</p>
              <p>infohotley@gmail.com</p>
            </div>
          </div>
          <div className="grid md:place-items-center lg:place-items-center">
            <h1 className=" font-semibold text-lg text-white">Nos Hotel</h1>
            <ul className="text-white capitalize text-sm grid gap-y-2">
              <li>
                <a href="/">Our Rooms</a>
              </li>
              <li>
                <a href="/">Family Rooms</a>
              </li>
              <li>
                <a href="/">Our Services</a>
              </li>
              <li>
                <a href="/">Our Vision</a>
              </li>
            </ul>
          </div>
          <div className="grid md:place-items-center lg:place-items-center">
            <h1 className=" font-semibold text-lg text-white">Nos Hotel</h1>
            <ul className="text-white capitalize text-sm grid gap-y-2">
              <li>
                <a href="/">Our Rooms</a>
              </li>
              <li>
                <a href="/">Family Rooms</a>
              </li>
              <li>
                <a href="/">Our Services</a>
              </li>
              <li>
                <a href="/">Our Vision</a>
              </li>
            </ul>
          </div>
          <div className="grid md:place-items-center lg:place-items-center">
            <h1 className="font-bold text-lg text-white">Company</h1>
            <ul className="text-white capitalize text-sm grid gap-y-2">
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">Sign In</a>
              </li>
              <li>
                <a href="/">Help Us</a>
              </li>
              <li>
                <a href="/">Our Mission</a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" grid grid-cols-1 gap-3 md:gap-y-0 md:grid-cols-3 place-items-center lg:grid-cols-3 text-white pt-5  ">
          <div>Copright 2021 Trendy Hotely</div>
          <div className="flex items-center">
            <ul className="flex items-center space-x-4">
              <li>
                <a onClick={()=>router.push("./Privacy")} href="/Privacy">Privacy</a>
              </li>
              <li>
                <a href="/">Term&Conditions</a>
              </li>
              <li>
                <a href="/">StartUp</a>
              </li>
            </ul>
          </div>
          <div className="flex cursor-pointer items-center space-x-3">
            <img
              className="h-8"
              src="https://img.icons8.com/color/58/000000/facebook.png"
            />
            <img
              className="h-8"
              src="https://img.icons8.com/color/48/000000/twitter-squared.png"
            />
            <img
              className="h-8"
              src="https://img.icons8.com/color/48/000000/instagram-new.png"
            />
            <img
              className="h-8"
              src="https://img.icons8.com/color/48/000000/skype--v1.png"
            />
            <img
              className="h-8"
              src="https://img.icons8.com/color/48/000000/linkedin.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
/*



*/