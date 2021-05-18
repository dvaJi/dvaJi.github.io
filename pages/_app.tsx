import { AppProps } from "next/app";
import { AiOutlineGithub } from "react-icons/ai";

import { LayoutHeader } from "components/LayoutHeader";

import "../styles/globals.css";
import "../styles/prism.css";
import "../styles/prism-theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="dark">
      <LayoutHeader />
      <div className="home-layout">
        <main>
          <Component {...pageProps} />
        </main>
        <footer className="text-sm text-gray-500">
          <p>
            Built by Francisco Pizarro |{" "}
            <a href="https://github.com/dvaJi" target="_blank">
              <AiOutlineGithub />
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default MyApp;
