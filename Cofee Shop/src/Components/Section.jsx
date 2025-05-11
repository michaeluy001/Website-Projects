const Section = ({ className = "", children, }) => {


  const baseStyle = "";
 

  return (
    <div
      onClick={onClick}
      className={`${className} ${baseStyle}`}
    >
      {children}
    </div>
  );
};

export default Section;
