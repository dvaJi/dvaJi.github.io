import { AiOutlineGithub } from "react-icons/ai";

export const Introduction = () => {
  return (
    <div className="introduction-section">
      <div className="intro-cont">
        <h1 className="title mb-0">Francisco Pizarro</h1>
        <h1 className="subtitle mb-0">Software Developer</h1>
        <p className="snippet mb-0">Based in Chile</p>
        <p className="snippet text-2xl">
          <a
            className="transition-opacity hover:opacity-60"
            href="https://github.com/dvaJi"
            target="_blank"
          >
            <AiOutlineGithub />
          </a>
        </p>
      </div>
    </div>
  );
};
