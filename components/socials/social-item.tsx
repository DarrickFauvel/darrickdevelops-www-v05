import { Social } from "../../types";

export default function SocialItem({
  item,
  variant,
}: {
  item: Social;
  variant: string;
}) {
  const getTextClasses = (variant: string) =>
    variant === "primary"
      ? "text-primary hover:text-yellow"
      : variant === "secondary"
      ? "text-white hover:text-yellow"
      : "text-white hover:text-yellow";

  return (
    <li>
      <a href={item.url} target="_blank">
        <i
          className={`bx ${item.iconClass} text-2xl ${getTextClasses(variant)}`}
        ></i>
      </a>
    </li>
  );
}
