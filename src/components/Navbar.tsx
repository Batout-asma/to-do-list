import logo from "../assets/logo.png";
// import { Trash2 } from "lucide-react";

const Navbar = ({ onClear }: { onClear: () => void }) => {
  return (
    <nav className="flex justify-between items-center p-4 border-b border-green-500 text-white">
      <img className="w-28" src={logo} alt="Batout Logo" />

      <button
        onClick={onClear}
        className="px-3 py-1 border border-red-500 rounded-md hover:text-red-500 transition"
      >
        Clear
        {/* <Trash2 size={20} /> */}
      </button>
    </nav>
  );
};

export default Navbar;
