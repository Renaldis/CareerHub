type CareerHubInfo = {
  first_title: string;
  second_title: string;
  tagline: string;
  description: string;
};

export default function BannerHero({
  first_title,
  second_title,
  tagline,
  description,
}: CareerHubInfo) {
  return (
    <section className="relative h-screen w-full">
      <div className="absolute inset-0 bg-[url('/GroupFormalSmile2.jpg')] bg-no-repeat bg-cover bg-fixed" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col h-full items-center justify-center text-center text-white px-6 font-[Poppins]">
        <h1 className="text-5xl font-bold">
          {first_title}
          <span className="text-orange-400">{second_title}</span>
        </h1>
        <h2 className="text-3xl font-semibold mt-2">{tagline}</h2>
        <p className="text-lg max-w-2xl mt-4">{description}</p>
      </div>
    </section>
  );
}
