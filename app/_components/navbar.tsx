import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <nav className="flex justify-between p-12 px-11">
      <div className="flex items-center gap-3">
        <Image src="/sun.png" alt="Sun Image" width={22} height={20} />
        <p className="text-xl font-bold text-black">LivroSaaS</p>
      </div>

      <ul className="flex items-center gap-6">
        <Link href="#">Fundamento</Link>
        <Link href="#">Preço</Link>
        <Button className="h-10 w-20 border border-gray-400 bg-white text-black hover:border-black hover:bg-gray-100">
          Login
        </Button>
      </ul>
    </nav>
  );
};

export default NavBar;
