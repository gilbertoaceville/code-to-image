import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex items-center gap-10 py-16">
      <Link
        className="text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
        href="https://www.linkedin.com/in/james-gilbert-ace/"
      >
        LinkedIn &nbsp;&#129109;
      </Link>
      <Link
        href="https://github.com/gilbertoaceville/code-to-image"
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
      >
        Source Code &nbsp;&#129109;
      </Link>
    </div>
  );
}

export default Footer;
