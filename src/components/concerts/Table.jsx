import { useState } from "react";
import { concerts } from "../../assets/concerts.js";
import Button from "../common/Button.jsx";

export default function Table() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const sortConcertsByDate = (concerts) => {
    return concerts.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
    });
  };

  const upcomingConcerts = sortConcertsByDate(
    concerts.filter((concert) => {
      const concertDate = new Date(concert.date);
      return concertDate >= today;
    })
  );

  const pastConcerts = sortConcertsByDate(
    concerts.filter((concert) => {
      const concertDate = new Date(concert.date);
      return concertDate < today;
    })
  );

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const [visibleOldConcerts, setVisibleOldConcerts] = useState(5);

  const loadMoreConcerts = () => {
    setVisibleOldConcerts((prevCount) => prevCount + 5);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between md:justify-center gap-10">
      <div className="w-full lg:w-[50%] 2xl:w-[40%] flex flex-col items-center text-white">
        <h2 className="mb-4 text-3xl sm:text-4xl font-bold">
          UPCOMING CONCERTS
        </h2>
        <table className="w-[90%] table-fixed text-sm md:text-base lg:text-lg">
          <tbody>
            {upcomingConcerts.map((concert, index) => {
              const date = new Date(concert.date);
              const formattedDate = formatDate(date);

              return (
                <tr
                  key={index}
                  className={`border-b border-gray-200 ${
                    index % 2 === 1 ? "bg-darkGreyButton" : ""
                  }`}
                >
                  <td className="py-2 w-1/6">{formattedDate}</td>
                  <td className="py-2 w-1/6">{concert.city}</td>
                  <td className="py-2 w-2/6">{concert.name}</td>
                  <td className="py-2 pr-2 text-right w-1/6">
                    <a
                      href={concert.link}
                      target="_blank"
                      className="text-red-500"
                    >
                      Event
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="w-full lg:w-[50%] 2xl:w-[40%] flex flex-col items-center lg:self-end">
        <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-white">
          OLD CONCERTS
        </h2>
        <table className="w-[90%] table-fixed text-darkGrey text-sm md:text-base lg:text-lg mb-4">
          <tbody>
            {pastConcerts.slice(0, visibleOldConcerts).map((concert, index) => {
              const date = new Date(concert.date);
              const formattedDate = formatDate(date);

              return (
                <tr
                  key={index}
                  className={`border-b border-gray-200 ${
                    index % 2 === 1 ? "bg-darkGreyButton" : ""
                  }`}
                >
                  <td className="py-2 w-1/6">{formattedDate}</td>
                  <td className="py-2 w-1/6">{concert.city}</td>
                  <td className="py-2 w-2/6">{concert.name}</td>
                  <td className="py-2 pr-2 text-right w-1/6">
                    <a
                      href={concert.link}
                      target="_blank"
                      className="text-red-500"
                    >
                      Event
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {visibleOldConcerts < pastConcerts.length && (
          <Button buttonName="Load more" onClick={loadMoreConcerts} />
        )}
      </div>
    </div>
  );
}
