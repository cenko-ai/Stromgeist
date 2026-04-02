"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const navigateAndScroll = (id) => {
    router.push(`/#${id}`);
  };

  return (
    <nav>
      <div className="nav-inner">
        <Link href="/" className="logo" style={{ cursor: "pointer" }}>
          <div className="logo-bolt">
            <svg width="13" height="16" viewBox="0 0 13 16" fill="none">
              <path
                d="M8 1L1 9h6l-2 6 7-8H6L8 1z"
                fill="white"
                stroke="white"
                strokeWidth="0.4"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          Stromgeist
        </Link>
        <ul className="nav-links">
          <li>
            <a href="#themen" onClick={(e) => { e.preventDefault(); navigateAndScroll('themen'); }}>Themen</a>
          </li>
          <li>
            <a href="#faq" onClick={(e) => { e.preventDefault(); navigateAndScroll('faq'); }}>FAQ</a>
          </li>
          <li>
            <a href="#ueber" onClick={(e) => { e.preventDefault(); navigateAndScroll('ueber'); }}>Über mich</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
