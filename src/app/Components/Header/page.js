import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-transparent z-50 transition-all duration-500 ease-in-out`}
    >
      {/* Logo */}
        <h1 className="text-3xl font-monalisa italic text-black">
          EventEve
        </h1>
    

      {/* Navigation */}
      <div className="flex items-center space-x-5">
        <nav className="flex space-x-6 font-bold">
          <Link href="/" className=" text-black hover:text-black">
            HOME
          </Link>
          <Link href="/" className=" text-black hover:text-black">
            SERVICES
          </Link>
        </nav>

        {/* Icons */}
        <Image
          src="/images/search.png"
          alt="Search"
          width={24}
          height={24}
          className="cursor-pointer hover:opacity-75"
        />
        <Image
          src="/images/cart.png"
          alt="Shopping Cart"
          width={24}
          height={24}
          className="cursor-pointer hover:opacity-75"
        />
        <Image
          src="/images/profile.png"
          alt="User Profile"
          width={24}
          height={24}
          className="cursor-pointer hover:opacity-75"
        />
      </div>
    </header>
  );
}
