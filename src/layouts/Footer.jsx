import Toggle from "../components/functionalComponents/Toggle";

import assets from "../assets";

const Footer = () => {
  const socials = [
    "instagram",
    "facebook",
    "twitter",
    "tiktok",
    "creator",
    "archive",
    "the movement",
    "Affiliates",
    "community merch",
  ];
  const socialMedia = socials.map((socials) => (
    <a
      href="#"
      key={socials}
      className="text-neutral-600 hover:text-neutral-400 lowercase tracking-tight transition-all duration-150"
    >
      {socials}
    </a>
  ));

  return (
    <div className="bg-neutral-950">
      <footer className=" text-white py-20 px-5 lg:px-15 flex items-center gap-12 justify-between flex-col md:flex-row">
        <div className="md:w-1/2">
          <h2 className="text-4xl lg:text-7xl font-bold mb-4">The Pencil Boy</h2>
          <p className="mb-6 text-neutral-400 text-justify">
            The pencil boy community is a movement, comprising of delusional
            designers, models, and creatives all looking to make a difference in
            the streetware and fashion space, to turn the game upside down, to
            flip the tables, and to *Scatter everywhere*
          </p>
          <div></div>
        </div>
        <div className="grid grid-cols-2 grid-rows-4 gap-4 place-items-start w-full lg:w-1/3">
          {socialMedia}
          <Toggle/>
        </div>
      </footer>
      <div className="py-2 border-t mx-5 lg:mx-15 border-t-neutral-700">
        <div className="flex flex-col items-center gap-1">
        <img srcSet={assets.pcbwhite} className="w-5" alt="pencilboy image" />
        <p className="text-neutral-400">© 2025 PencilBoy.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// but what you did was
