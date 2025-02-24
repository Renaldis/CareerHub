"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Inputs = {
  "search-job-title": string;
  "search-company": string;
  "search-location": string;
};

export default function JobSearchForm() {
  return (
    <div className="my-5 md:my-24">
      <div className="card absolute bg-white rounded-lg shadow-md border -top-36 left-0 right-0 h-28 mx-8 hidden md:block">
        <form>
          <div className="md:grid grid-cols-4 gap-4 px-10 py-2 ">
            <div>
              <Label htmlFor="search-job-title">Job Title</Label>
              <Input
                id="search-job-title"
                name="search-job-title"
                type="text"
                placeholder="Search job title"
              />
            </div>
            <div>
              <Label htmlFor="search-company">Company</Label>
              <Input
                id="search-company"
                name="search-company"
                type="text"
                placeholder="Search Company"
              />
            </div>
            <div>
              <Label htmlFor="search-location">Location</Label>
              <Input
                id="search-location"
                name="search-location"
                type="text"
                placeholder="Search Location"
              />
            </div>
            <div className="self-end">
              <Input
                type="submit"
                value="Search Jobs"
                className="bg-orange-400 text-white font-medium py-2 px-4 w-full rounded-md shadow-md hover:bg-orange-500 transition-all cursor-pointer"
              />
            </div>
          </div>
        </form>
        {/* <DevTool control={control} /> */}
      </div>
      <div className="md:hidden">
        <form>
          <div className="md:grid grid-cols-4 gap-4 px-10 py-2 ">
            <div>
              <Label htmlFor="search-job-title">Job Title</Label>
              <Input
                id="search-job-title"
                name="search-job-title"
                type="text"
                placeholder="Search job title"
              />
            </div>
            <div>
              <Label htmlFor="search-company">Company</Label>
              <Input
                id="search-company"
                name="search-company"
                type="text"
                placeholder="Search Company"
              />
            </div>
            <div>
              <Label htmlFor="search-location">Location</Label>
              <Input
                id="search-location"
                name="search-location"
                type="text"
                placeholder="Search Location"
              />
            </div>
            <div className="mt-5">
              <Input
                type="submit"
                value="Search Jobs"
                className="bg-orange-400 text-white font-medium py-2 px-4 w-full rounded-md shadow-md hover:bg-orange-500 transition-all cursor-pointer"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
