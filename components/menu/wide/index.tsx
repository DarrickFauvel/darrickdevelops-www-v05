import MenuItem from "./menu-item";
import { data } from "../menu-data";

export default function WideMenu({ onClick }) {
  return (
    <div className="hidden lg:block">
      <ul className="flex items-center">
        {data.map((item) => (
          <MenuItem item={item} onClick={onClick} key={item.link} />
        ))}
      </ul>
    </div>
  );
}
