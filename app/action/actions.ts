"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function searchJobs(formData: FormData) {
  const title = formData.get("title")?.toString() || "";
  const company_name = formData.get("company_name")?.toString() || "";
  const company_city = formData.get("company_city")?.toString() || "";

  const jobs = await prisma.job.findMany({
    where: {
      title: { contains: title },
      company_name: { contains: company_name },
      company_city: { contains: company_city },
    },
  });

  return jobs;
}
