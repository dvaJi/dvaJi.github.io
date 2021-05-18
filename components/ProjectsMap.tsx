import { AiOutlineFolder, AiOutlineFolderOpen } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { RiExternalLinkFill } from "react-icons/ri";

type Props = {
  projects: any[];
};

export const ProjectsMap = ({ projects }: Props) => {
  return (
    <div className="projects-map-section">
      <h1 className="section-title">Full Collection</h1>
      <div className="cards-cont">
        {projects.map((project) => (
          <div className="project-card" key={project.slug}>
            <div className="header">
              <div className="folder-closed">
                {/* <Link href={`/${project.slug}`}> */}
                  <AiOutlineFolder />
                {/* </Link> */}
              </div>
              <div className="folder-open">
                {/* <Link href={`/${project.slug}`}> */}
                  <AiOutlineFolderOpen />
                {/* </Link> */}
              </div>
              {/* <Link href={`/${project.slug}`}> */}
                <h3>{project.title}</h3>
              {/* </Link> */}
            </div>
            <div className="description">
              <p>{project.description}</p>
            </div>
            <div className="navigation">
              <a href={project.source} className="mr-3" target="_blank" rel="noreferrer">
                <AiFillGithub />
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer">
                <RiExternalLinkFill />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
