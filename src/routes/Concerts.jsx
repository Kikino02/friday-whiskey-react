import Table from "../components/concerts/Table";

export default function Concerts() {
  return (
    <>
      <h1 className="text-center text-7xl md:text-8xl xl:text-9xl font-right bg-gradient-to-t from-gray-500 to-gray-100 bg-clip-text text-transparent mt-16 mb-12">
        Concerts
      </h1>
      <main className="flex flex-grow mt-8 mb-12 font-julee relative mx-4">
        <div className="filter blur-3xl 2xl:blur-[300px] absolute w-full h-full -z-50 bg-gradient-to-r from-red-500 to-blue-500 opacity-20"></div>
        <Table />
      </main>
    </>
  );
}
