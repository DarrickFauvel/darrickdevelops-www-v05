import SkillProgressBar from "./skill-progress-bar";
import SkillProgressHeadingPercent from "./skill-progress-heading-percent";
import SkillProgressHeadingTitle from "./skill-progress-heading-title";

export default function Skill({ skill }) {
  return (
    <div>
      <div className="flex items-end justify-between">
        <SkillProgressHeadingTitle>{skill.title}</SkillProgressHeadingTitle>
        <SkillProgressHeadingPercent percentage={skill.percentage} />
      </div>
      <SkillProgressBar percentage={skill.percentage} />
    </div>
  );
}
