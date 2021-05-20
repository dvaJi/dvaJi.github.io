import { GetStaticProps, NextPage } from "next";

import { Introduction } from "components/Introduction";

type Props = {
  // projects: any[];
};

const Home: NextPage<Props> = () => {
  return (
    <div>
      <Introduction />
      {/* <Technologies /> */}
      {/* <Skills /> */}
      {/* <FeaturedMap /> */}
      {/* <ProjectsMap projects={projects} /> */}
      {/* <Contact /> */}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // const projects = require("../data/projects.json");

  return {
    props: {},
    revalidate: 1,
  };
};

export default Home;
