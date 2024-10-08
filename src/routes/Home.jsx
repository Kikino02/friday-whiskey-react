import Button from "../components/common/Button";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row flex-grow md:justify-around items-center 2xl:px-28 md:gap-10 mt-8 2xl:mt-16 mx-4">
      <div className="text-darkGrey flex flex-col justify-between mt-10 md:mt-8 p-8 gap-10 items-center lg:items-start">
        <div className="font-julee text-xs sm:text-base lg:text-base xl:text-lg 2xl:text-xl lg:text-start lg:inline-block flex flex-col items-center text-center">
          <img
            className="max-w-4xl w-full"
            src="/photos/logo/logo_font_white2.png"
            alt="FW logo text"
          />
          <p className="max-w-[60ch] md:max-w-[75ch] block mb-4">
            “Ready to unleash your inner rock star? Let Friday Whiskey take you
            on a journey where every night is Friday night."
          </p>
          <p>“Where the music never dies.”</p>
        </div>
        <div className="flex gap-5">
          <a href="https://www.youtube.com">
            <Button className="w-36 text-xs" buttonName="New Event" />
          </a>
          <a href="https://fridaywhiskey.sk/links" target="_blank">
            <Button
              className="w-36 text-xs sm:text-sm"
              buttonName="Listen now"
            />
          </a>
        </div>
      </div>
      <div className="p-8 relative flex items-start justify-center">
        <div className="filter blur-3xl absolute w-[75%] h-[75%] -z-50 xl:rotate-12 bg-gradient-to-r from-red-500 to-blue-500 opacity-20"></div>
        <img
          className="max-w-xs md:max-w-2xl w-full"
          src="/photos/logo/logo_art_white2.png"
          alt=""
        />
      </div>
    </main>
  );
}
