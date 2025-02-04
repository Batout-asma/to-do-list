import { Github, Send, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-4 border-t border-green-500 text-white flex justify-center gap-6">
      <a
        href="https://github.com/batout-asma"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="w-6 h-6 hover:text-gray-400 transition" />
      </a>
      <a
        href="https://t.me/yourtelegram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Send className="w-6 h-6 hover:text-gray-400 transition" />
      </a>
      <a
        href="https://yourwebsite.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Code className="w-6 h-6 hover:text-gray-400 transition" />
      </a>
    </footer>
  );
};

export default Footer;
