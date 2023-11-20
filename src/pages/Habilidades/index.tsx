import TechStack from "../../components/TechStack";

export default function Habilidades() {
  return (
    <section className="h-full flex items-center justify-center w-full">
      <div className="h-full flex items-center flex-col gap-5 w-11/12">
        <h1 className="text-white font-medium text-4xl mb-8">Habilidades</h1>
        <div className="grid grid-flow-row grid-cols-4 gap-4 w-full ">
          <TechStack icon="java-plain " label="Java" />

          <TechStack icon="nodejs-plain" label="Nodejs" />

          <TechStack icon="typescript-plain" label="Typescript" />

          <TechStack icon="express-original" label="Express" />

          <TechStack icon="spring-plain" label="Spring" />

          <TechStack icon="nestjs-plain" label="NestJs" />

          <TechStack icon="javascript-plain" label="Javascript" />

          <TechStack icon="jest-plain" label="Jest" />

          <TechStack icon="python-plain" label="Python" />

          <TechStack icon="git-plain" label="Git" />

          <TechStack icon="eslint-plain" label="Eslint" />

          <TechStack icon="linux-plain" label="Linux" />

          <TechStack icon="docker-plain" label="Docker" />

          <TechStack icon="graphql-plain" label="Graphql" />

          <TechStack icon="amazonwebservices-original" label="AWS" />

          <TechStack icon="react-plain" label="ReactJs" />
          <TechStack icon="react-plain" label="ReactNative" />

          <TechStack icon="css3-plain" label="CSS3" />

          <TechStack icon="html5-plain" label="HTML5" />
        </div>
      </div>
    </section>
  );
}
