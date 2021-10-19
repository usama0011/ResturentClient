import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-primary-color sticky flex flex-col items-center justify-center bottom-0 left-0 h-20 w-full">
      <Link href="/">
        <div className="font-bold text-white">Hotely</div>
      </Link>
      <p className="text-sm text-white">Copyrights (&copy;) 2021</p>
    </footer>
  );
}
