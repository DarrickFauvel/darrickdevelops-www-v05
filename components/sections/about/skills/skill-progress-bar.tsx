export default function SkillProgressBar({ percentage }) {
  return (
    <div className="mt-2 h-3 w-full rounded-full bg-lila">
      <div
        className="h-3 rounded-full bg-primary"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}
