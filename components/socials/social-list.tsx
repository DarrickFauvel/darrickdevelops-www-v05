import SocialItem from "./social-item";
import { socials } from "../../constants/socials";

export default function SocialList({ variant }) {
  return (
    <ul className="flex items-center justify-center gap-4 pt-5 sm:justify-start sm:pt-0">
      {socials.map((item) => (
        <SocialItem item={item} variant={variant} key={item.name} />
      ))}
    </ul>
  );
}
