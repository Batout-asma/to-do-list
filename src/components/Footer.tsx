import { Github, Send, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full mt-5 py-4 border-t border-green-500 text-white flex justify-center gap-6">
      <a
        href="https://github.com/batout-asma"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="w-6 h-6 hover:text-green-500 transition" />
      </a>
      <a
        href="https://t.me/Batoutiva_o"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Send className="w-6 h-6 hover:text-green-400 transition" />
      </a>
      <a
        href="https://github.com/Batout-asma/to-do-list"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Code className="w-6 h-6 hover:text-green-400 transition" />
      </a>
    </footer>
  );
};

export default Footer;
