import { FaGitAlt } from "react-icons/fa";

const Footer = () => {
  const year = new Date();

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center text-sm">
        <span>&copy; {year.getFullYear()} To-Do App. All rights reserved.</span>
        <a
          href="https://github.com/hariswaran-v"
          className="hover:underline text-blue-400 flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hariswaran
          <FaGitAlt className="ml-1 text-lg text-pink-400" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
