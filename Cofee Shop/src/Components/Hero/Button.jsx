const Button = ({ className = "", type = "primary", children, onClick }) => {
  const variants = {
    primary: "bg-stone-800 ring-stone-700",
    secondary: "bg-stone-300 ring-stone-200",
  };

  const baseStyle =
    "w-full h-10 my-3 flex items-center justify-center rounded-lg ring-3 hover:scale-101 transition-transform cursor-pointer md:w-40 lg:w-50 lg:justify-center";

  return (
    <button
      onClick={onClick}
      className={`${className} ${variants[type]} ${baseStyle}`}
    >
      {children}
    </button>
  );
};

export default Button;
