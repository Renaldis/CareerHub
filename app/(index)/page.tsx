import { getJobsFavorite } from "@/prisma-db";
import BannerHero from "../_components/banner";
import { features, successStories } from "@/data/data";

import Faq from "./faq";
import CardJob from "../_components/CardJob";

export default async function Home() {
  const jobs = await getJobsFavorite();
  // console.log(jobs);
  if (jobs.length === 0) {
    return (
      <div className="text-2xl font-semibold">Jobs is not available..</div>
    );
  }
  return (
    <div>
      <BannerHero
        first_title="Career"
        second_title="Hub"
        tagline="Elevate Your Career Journey"
        description="Unlock top job opportunities that align with your passion and skills. With CareerHub, your dream career is within reach. Take the leap today!"
      />
      <section className="pt-10">
        <div className="px-8">
          <h1 className="text-center font-bold text-slate-800 text-2xl mb-5">
            Why choose Career<span className="text-orange-400">Hub</span> for
            your job hunt?
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
            {features.map((feature) => {
              return (
                <div
                  key={feature.title}
                  className="card border rounded-lg flex flex-col items-center shadow-sm p-4 cursor-pointer hover:translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out"
                  draggable
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-24"
                  />
                  <h2 className="text-xl my-2">{feature.title}</h2>
                  <p className="text-center text-slate-400 text-base">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <hr className="mt-14" />
      <section className="pt-10">
        <div className="px-8">
          <h1 className="text-center font-bold text-slate-800 text-2xl mb-5">
            Favorit <span className="text-orange-400">Job Vacancies</span>
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
            {jobs.map((item) => {
              return <CardJob key={item.id} item={item} label="🔥TOP" />;
            })}
          </div>
        </div>
      </section>
      <section className="py-10 mt-10">
        <div className="px-8 py-16 bg-gradient-to-t from-yellow-500 to-orange-600 w-full">
          <h1 className="text-center text-2xl text-white font-bold mb-5">
            Success Story
          </h1>
          <div className="flex flex-wrap gap-5 justify-center">
            {successStories?.map((item) => {
              return (
                <div className="card w-full md:w-[16rem] lg:w-[24rem] rounded-lg bg-white relative shadow-sm mt-5 hover:scale-105 transition-all duration-300">
                  <span className="absolute -top-6 left-6 text-xl rounded-full w-12 h-12 bg-yellow-200 flex items-center justify-center p-5">
                    📢
                  </span>
                  <div className="p-10">
                    <p className="text-slate-500">
                      <i>"{item.testimonial}"</i>
                    </p>
                    <div className="flex mt-5 items-center gap-5">
                      <div className="bg-orange-300 text-orange-600 w-14 h-14 rounded-full flex items-center justify-center">
                        <span>{item.initials}</span>
                      </div>
                      <div className="flex flex-col">
                        <h4>{item.name}</h4>
                        <h4 className="text-slate-500 text-sm">{item.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="mb-10">
        <Faq />
      </section>
    </div>
  );
}
