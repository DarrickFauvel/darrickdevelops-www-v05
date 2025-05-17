import Skill from "./skill";
import { skills } from "./skills-data";

export default function Skills() {
  return (
    <section className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
      {skills.map((skill) => (
        <Skill skill={skill} key={skill.title} />
      ))}
    </section>
  );
}
