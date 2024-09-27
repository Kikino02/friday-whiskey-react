export default function Card({ name, role, imageSrc }) {
  return (
    <article className="text-white bg-darkGreyButton font-julee rounded-3xl flex flex-col w-full max-w-64 md:max-w-72 lg:max-w-80">
      <img
        className="rounded-t-3xl object-top object-cover h-56 md:h-64 2xl:h-72"
        src={imageSrc}
        alt={name}
      />
      <div className="flex flex-col items-center p-4">
        <span className="text-lg font-semibold">{name}</span>
        <span className="text-sm text-gray-400">{role}</span>
      </div>
    </article>
  );
}
