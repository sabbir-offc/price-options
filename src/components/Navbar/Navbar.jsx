import { useState } from "react";
import Link from "../Link/Link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(!true);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog", name: "Blog" },
  ];

  return (
    <nav className=" bg-gray-300 p-4 text-black rounded-md">
      <div className="md:hidden duration-700" onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineClose className="text-2xl"></AiOutlineClose>
        ) : (
          <HiOutlineMenuAlt1 className="text-2xl"></HiOutlineMenuAlt1>
        )}
      </div>
      <ul
        className={`md:flex gap-9 absolute md:static duration-700
      ${open ? "left-3 md:left-0" : "-left-48 md:left-0"}
      bg-gray-300 rounded-xl p-5 text-black shadow shadow-gray-50 md:shadow-none`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
