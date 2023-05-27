const contents = [
  {
    id: 0,
    title: "Hydrogen VS Electric Cars",
    subtext: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    id: 1,
    title: "The Downsides of AI Artistry",
    subtext:
      " What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    id: 2,
    title: "Is VC Funding Drying Up?",
    subtext:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

const New = () => {
  const items = contents.map((content) => {
    return (
      <li key={content.id} className="pt-4 md:pt-6 pb-2">
        <h1 className="text-neutral-white text-xl md:text-2xl font-[600] hover:text-primary-orange cursor-pointer">
          {content.title}
        </h1>
        <p className="text-neutral-grayishBlue text-[15px] pt-3">
          {content.subtext}
        </p>
      </li>
    );
  });
  return (
    <section className="md:w-[30%] bg-neutral-veryDarkBlue py-4 px-5 md:pt-8 ">
      <h2 className="text-2xl md:text-4xl text-primary-orange font-[600]">
        New
      </h2>
      <ul className="space-y-6  divide-y-2 divide-neutral-grayishBlue">
        {items}
      </ul>
    </section>
  );
};

export default New;
