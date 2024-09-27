import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="w-full bg-darkGreyButton text-white text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          <FontAwesomeIcon icon="copyright" /> by Friday Whiskey 2024
        </p>
      </div>
    </footer>
  );
}
