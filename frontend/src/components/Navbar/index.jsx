import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex w-full h-[8vh] px-6 font-semibold shadow-md justify-between">
      <div className="flex items-center">
        <Link to="/">Navbar</Link>
      </div>
      <div className="flex items-center">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
