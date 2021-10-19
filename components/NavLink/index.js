import Link from "next/link";
import { useRouter } from 'next/router'
const NavLink = ({ path = "#", name }) => {
    const router = useRouter()
    return (
      <Link href={path}>
        <li className={`hover:text-primary-color transition-all cursor-pointer  md:hover:text-white/100 ${router.pathname === path ? "md:text-white text-primary-color" : "md:text-white/80 text-black"}`}>
          {name}
        </li>
      </Link>
    );
  };

  export default NavLink