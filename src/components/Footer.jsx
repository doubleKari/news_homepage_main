import retropc from "../assets/images/image-retro-pcs.jpg";
import toplaptops from "../assets/images/image-top-laptops.jpg";
import gaming from "../assets/images/image-gaming-growth.jpg";

const cards = [
  {
    id: "01",
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
    imgUrl: retropc,
  },
  {
    id: "02",
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
    imgUrl: toplaptops,
  },
  {
    id: "03",
    title: " The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
    imgUrl: gaming,
  },
];

const Footer = () => {
  const cardItems = cards.map((card) => {
    return (
      <div
        key={card.id}
        className="flex gap-x-6 md:8  last:md:ml-7 shadow-xl rounded-lg"
      >
        <img
          src={card.imgUrl}
          alt="product image"
          className="block w-1/4  md:w-1/3"
        />

        {/* card info */}
        <div className="flex-col space-y-2 md:space-y-3">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-300">
            {card.id}
          </h2>
          <h3 className="text-xl md:text-lg font-bold hover:text-primary-red cursor-pointer text-neutral-veryDarkBlue">
            {card.title}
          </h3>
          <p className="pb-6">{card.description}</p>
        </div>
      </div>
    );
  });
  return (
    <footer className="px-[20px] gap-y-8 mb-8 grid grid-cols-1 md:grid-cols-3  md:gap-x-8">
      {cardItems}
    </footer>
  );
};

export default Footer;
