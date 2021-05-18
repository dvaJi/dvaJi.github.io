import Link from "next/link";

export const LayoutHeader = () => {
  return (
    <header className="header-nav">
      <div className="head-cont">
        <Link href="/">
          <a>
            {" "}
            <h1 className="title">Francisco Pizarro</h1>
          </a>
        </Link>
        <div className="navs">
          {/* <Link href="/about">
            <a>
              <span className="mono">About</span>
            </a>
          </Link>
          <Link href="/work">
            <a>
              <span className="mono">Work</span>
            </a>
          </Link> */}
          <Link href="/blog">
            <a>
              <span className="mono">Blog</span>
            </a>
          </Link>
          {/* <Link href="/resume">
            <a>
              <span className="mono">Resume</span>
            </a>
          </Link> */}
        </div>
      </div>
    </header>
  );
};
