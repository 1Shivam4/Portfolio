type ButtonProps = {
  name: string;
  type?: "button" | "submit";
};

export function Button({ name, type = "button" }: ButtonProps) {
  return (
    <button
      className="my-3 p-3 px-10 rounded-md text-white font-semibold relative overflow-hidden bg-red-500
                   transition-all duration-500 ease-in-out
                   before:absolute before:top-0 before:left-0 before:w-0 before:h-full
                   before:bg-red-700 before:z-0 before:transition-all before:duration-500 hover:before:w-full
                   z-10"
      type={type}
    >
      <span className="relative z-10">{name}</span>
    </button>
  );
}
