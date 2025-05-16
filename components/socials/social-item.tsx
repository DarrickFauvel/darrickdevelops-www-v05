import { Icon } from "@iconify-icon/react";
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
      ? "text-white hover:text-yellow-300! hover:text-shadow-lg! hover:text-shadow-purple-700 hover:-translate-y-1! hover:scale-125! transition duration-200"
      : "text-white hover:text-yellow";

  return (
    <li>
      <a href={item.url} target="_blank">
        <Icon
          icon={item.iconName}
          className={`text-2xl ${getTextClasses(variant)}`}
        />
      </a>
    </li>
  );
}
