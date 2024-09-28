// pages/Contact.jsx

import SocialLink from "../components/contact/SocialLink";
import Form from "../components/contact/Form";

export default function Contact() {
  return (
    <main className="text-white flex flex-col items-center flex-grow mt-16 mx-4">
      <h1 className="text-center text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-right bg-gradient-to-t from-gray-500 to-gray-100 bg-clip-text text-transparent">
        Contact Us
      </h1>
      <div className="flex-grow flex items-center justify-center w-full">
        <article className="flex flex-col md:flex-row w-full max-w-4xl">
          {/* Left Side */}
          <div className="flex flex-col gap-6 items-center md:items-start md:justify-between w-full md:w-1/2 bg-darkGreyButton p-12 rounded-t-xl md:rounded-tr-none md:rounded-l-xl font-julee border ">
            <div className="text-center md:text-start">
              <h3 className="text-3xl md:text-4xl lg:text-5xl mb-2">
                Any Questions?
              </h3>
              <p className="text-sm md:text-base lg:text-lg">
                Contact us via the form or on social networks.
              </p>
            </div>
            <div className="text-darkGrey flex flex-col items-center md:items-start gap-3 text-base md:text-xl lg:text-2xl">
              <SocialLink
                iconName="facebook"
                url="https://www.facebook.com/fridaywhiskey"
                label="Facebook"
              />
              <SocialLink
                iconName="instagram"
                url="https://www.instagram.com/fridaywhiskey_official/"
                label="Instagram"
              />
              <SocialLink
                iconName={["far", "envelope"]}
                url="mailto:fridaywhiskey@gmail.com"
                label="fridaywhiskey@gmail.com"
                isFontAwesomeIcon
              />
            </div>
          </div>
          {/* Right Side (Form) */}
          <div className="w-full md:w-1/2 bg-form rounded-b-xl md:rounded-bl-none md:rounded-r-xl p-12 border ">
            <Form />
          </div>
        </article>
      </div>
    </main>
  );
}
