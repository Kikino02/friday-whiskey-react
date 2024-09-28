import Icon from "../common/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialLink({
  iconName,
  url,
  label,
  isFontAwesomeIcon = false,
}) {
  return (
    <div className="flex items-center gap-4">
      {isFontAwesomeIcon ? (
        <FontAwesomeIcon icon={iconName} />
      ) : (
        <Icon fab iconName={iconName} />
      )}
      <a href={url} target="_blank" rel="noopener noreferrer">
        <span>{label}</span>
      </a>
    </div>
  );
}
