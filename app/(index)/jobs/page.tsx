import { getJobs } from "@/prisma-db";
import BannerHero from "../../_components/banner";
import CardJob from "@/app/_components/CardJob";

import JobSearchForm from "@/app/_components/JobSearchForm";

export default async function JobsPage() {
  const jobs = await getJobs();
  console.log(jobs);
  return (
    <section>
      <BannerHero
        first_title="Career"
        second_title="Hub"
        tagline="Turn Your Career Dreams Into Reality!"
        description="Discover endless job opportunities tailored to your skills and aspirations. With advanced job search, personalized filters, and expert career insights, CareerHub is your ultimate gateway to professional success."
      />
      <article className="px-8 relative">
        <JobSearchForm />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mb-8">
          {jobs.map((item) => {
            return <CardJob key={item.id} item={item} label="🔥Hiring" />;
          })}
        </div>
      </article>
    </section>
  );
}
