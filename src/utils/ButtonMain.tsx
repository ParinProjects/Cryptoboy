interface ButtonMainProps {
  name: string;
  variant?: "primary" | "secondary" | "danger";
}

function ButtonMain({ name, variant = "primary" }: ButtonMainProps) {
  const baseClass =
    "border w-25 md:w-30 h-10 rounded-xl font-bold hover:cursor-pointer";
  const variantClass = {
    primary: "bg-[#5869da] text-white hover:bg-white hover:text-[#5869da]",
    secondary: "bg-gray-500 text-white hover:bg-white hover:text-gray-500",
    danger: "bg-red-500 text-white hover:bg-white hover:text-red-500",
  };

  return (
    <button className={`${baseClass} ${variantClass[variant]}`}>
      {name}
    </button>
  );
}

export default ButtonMain;
