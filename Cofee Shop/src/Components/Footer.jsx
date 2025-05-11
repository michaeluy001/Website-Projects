const Footer = () => {
  return (
    <>
      <div className="w-full bg-stone-100 h-50 text-center text-stone-800">
        {" "}
        <div className="grid grid-cols-2 py-5">
          <div className="flex flex-col">
            <p className=" text-xl">Company</p>
            <div className="flex flex-col">
              <a href="#">About Us</a>
              <a href="#">Blog</a>
              <a href="#">Contact Us</a>
              <a href="#">Socials</a>
            </div>
          </div>
          <div>
            {" "}
            <p className="text-xl">
              {" "}
              © 2025. Michael Uy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;