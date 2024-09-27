import Section from "../common/Section";
import Card from "./Card";

export default function About() {
  return (
    <main className="text-white flex flex-col flex-grow gap-10 mt-8">
      <h1 className="text-center text-7xl md:text-8xl xl:text-9xl font-right bg-gradient-to-t from-gray-500 to-gray-100 bg-clip-text text-transparent mb-12">
        <span className="block">About</span>
        <span>Friday Whiskey</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-14 mb-16 relative">
        <div className="filter blur-3xl absolute w-full sm:w-[80%] h-full sm:h-[80%] rotate-0 sm:-rotate-12 2xl:-rotate-[28deg] -z-50 bg-gradient-to-r from-red-500 to-blue-500 opacity-20"></div>
        <Card
          name="Michal Barč"
          role="Bass guitar"
          imageSrc="/photos/band/Michal.jpg"
        />
        <Card
          name="Marián 'Corvis' Kronauer"
          role="Singer"
          imageSrc="/photos/band/Marian.jpg"
        />
        <Card
          name="Mário Marcinek"
          role="Drums"
          imageSrc="/photos/band/Mario.jpg"
        />
        <Card
          name="Villy Zemeš"
          role="Guitar"
          imageSrc="/photos/band/Villy.jpg"
        />
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-10 sm:justify-around text-center mb-10 text-sm lg:text-base relative">
        <div className="filter blur-3xl absolute w-full sm:w-[80%] h-full sm:h-[80%] -z-50 bg-gradient-to-r from-red-500 to-blue-500 opacity-20"></div>
        <div className="w-[90%] sm:w-[40%]">
          <p className="mb-10">
            "Born from the echoes of rebellion and the electric pulse of the
            underground, Friday Whiskey emerged in the year 2000 and something,
            carving out their legacy in the annals of glam rock. Forged in the
            fires of passion and fueled by an insatiable thirst for the
            extraordinary, this band became more than just a sound—it became a
            movement.”
          </p>
          <p>
            “Every chord struck, every lyric belted out, is a testament to a
            time when rock was not just heard but felt deep within the soul.
            Join us on this journey, where Friday Whiskey turns every night into
            a celebration of what it means to truly live."
          </p>
        </div>
        <div className="w-[90%] sm:w-[40%]">
          <p className="mb-9">
            "Now, two decades strong and still burning brighter than ever,
            Friday Whiskey has become an unstoppable force in the world of glam
            rock. Their sound has evolved, but their mission remains the same:
            to ignite stages and hearts alike with an energy that refuses to be
            tamed. With every beat, they defy the ordinary, pushing boundaries
            and setting new standards.”
          </p>
          <p>
            “Friday Whiskey isn’t just playing music—they’re commanding it,
            leading a revolution where every note is a battle cry and every
            performance is a triumph. The journey continues, and there's no
            slowing down this runaway train of rock 'n' roll."
          </p>
        </div>
      </div>
    </main>
  );
}
