import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { AiOutlineGithub } from "react-icons/ai";

import { LayoutHeader } from "components/LayoutHeader";
import { SEO } from "components/SEO";

import "../styles/globals.css";
import "../styles/prism.css";
import "../styles/prism-theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="dark">
      <DefaultSeo {...SEO} />
      <LayoutHeader />
      <div className="home-layout">
        <main className="main-content">
          <Component {...pageProps} />
        </main>
        <footer className="text-sm text-gray-500">
          <p>
            Built by Francisco Pizarro |{" "}
            <a href="https://github.com/dvaJi" target="_blank">
              <AiOutlineGithub />
            </a>
            <span className="ml-4 text-xs">
              based on{" "}
              <a href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
                tailwind-nextjs-starter-blog
              </a>
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default MyApp;
