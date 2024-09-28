export default function Input({ ...props }) {
  return (
    <input
      {...props}
      className="bg-transparent border-b w-full placeholder-lightDark py-2 text-lg font-julee"
    />
  );
}
