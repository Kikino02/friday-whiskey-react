import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon({ iconName, fab }) {
  return (
    <FontAwesomeIcon
      icon={[fab ? "fab" : "fas", iconName]}
      className="hover:text-gray-500"
    />
  );
}
