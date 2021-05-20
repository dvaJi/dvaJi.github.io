import { useState } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiCsharp,
  SiJava,
  SiReact,
  SiRedux,
  SiNextDotJs,
  SiNodeDotJs,
  SiApollographql,
  SiSocketDotIo,
  SiMysql,
  SiGraphql,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiMariadbfoundation,
  SiAmazonaws,
  SiMicrosoftazure,
  SiNetlify,
  SiHeroku,
  SiGithub,
  SiNpm,
} from "react-icons/si";
import { DiSass, DiDotnet, DiPostgresql } from "react-icons/di";
import { RiGatsbyLine, RiHtml5Line, RiCss3Fill } from "react-icons/ri";
import { GiKoala } from "react-icons/gi";
import { VscDatabase } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr";
import { FaPhp } from "react-icons/fa";

export const Skills = () => {
  const [tab, setTab] = useState<Record<string, boolean>>({ b: true });

  const Tab = ({ children, t }: any) => (
    <li
      className={tab[t] ? "active-tab" : ""}
      onClick={() => !Object.keys(tab).includes(t) && setTab({ [t]: true })}
    >
      {children}
    </li>
  );

  const Anim = ({ Icon, name }: any) => (
    <div>
      <li>
        <p>
          <Icon />
        </p>
        <p>{name}</p>
      </li>
    </div>
  );

  const Icons = ({ children, t }: any) => (
    <>
      {tab[t] && (
        <section>
          <ul>{children}</ul>
        </section>
      )}
    </>
  );

  return (
    <div className="skills-section">
      <h1 className="section-title">Specialties</h1>
      <div className="skills-cont">
        <ul className="tabs">
          <Tab t="a">
            <span>Programming </span>
            <span>Languages</span>
          </Tab>
          <Tab t="b">
            <span>Front-end </span>
            <span>Technologies</span>
          </Tab>
          <Tab t="c">
            <span>Back-end </span>
            <span>Technologies</span>
          </Tab>
          <Tab t="d">
            <span>Database </span>
            <span>Technologies</span>
          </Tab>
          <Tab t="e">
            <span>Storage and</span>
            <span>Deployment</span>
          </Tab>
        </ul>
        <Icons t="a">
          <Anim Icon={SiJavascript} name="JavaScript" />
          <Anim Icon={SiTypescript} name="TypeScript" />
          <Anim Icon={SiCsharp} name="C Sharp" />
          <Anim Icon={SiJava} name="Java" />
          <Anim Icon={FaPhp} name="PHP" />
        </Icons>
        <Icons t="b">
          <Anim Icon={SiReact} name="React" />
          <Anim Icon={SiRedux} name="Redux" />
          <Anim Icon={RiGatsbyLine} name="Gatsby" />
          <Anim Icon={SiNextDotJs} name="Next" />
          <Anim Icon={RiHtml5Line} name="HTML" />
          <Anim Icon={RiCss3Fill} name="CSS" />
          <Anim Icon={DiSass} name="SASS" />
        </Icons>
        <Icons t="c">
          <Anim Icon={DiDotnet} name="ASP.NET" />
          <Anim Icon={SiNodeDotJs} name="Express.js" />
          <Anim Icon={GiKoala} name="Koa.js" />
          <Anim Icon={GrMysql} name="SQL" />
          <Anim Icon={SiGraphql} name="GraphQL" />
          <Anim Icon={SiApollographql} name="Apollo" />
          <Anim Icon={SiSocketDotIo} name="Socket.io" />
        </Icons>
        <Icons t="d">
          <Anim Icon={SiMysql} name="MySQL" />
          <Anim Icon={DiPostgresql} name="PostgreSQL" />
          <Anim Icon={SiMicrosoftsqlserver} name="SQL Server" />
          <Anim Icon={VscDatabase} name="NoSQL" />
          <Anim Icon={SiMongodb} name="Mongo DB" />
          <Anim Icon={SiMariadbfoundation} name="Maria DB" />
        </Icons>
        <Icons t="e">
          <Anim Icon={SiAmazonaws} name="AWS" />
          <Anim Icon={SiMicrosoftazure} name="Azure" />
          <Anim Icon={SiGithub} name="Github" />
          <Anim Icon={SiNetlify} name="Netlify" />
          <Anim Icon={SiNpm} name="NPM" />
          <Anim Icon={RiGatsbyLine} name="Gatsby Cloud" />
          <Anim Icon={SiHeroku} name="Heroku" />
        </Icons>
      </div>
    </div>
  );
};