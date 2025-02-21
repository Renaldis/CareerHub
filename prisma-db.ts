import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seedJobs = async () => {
  const count = await prisma.job.count();
  if (count === 0) {
    await prisma.job.createMany({
      data: [
        {
          title: "Software Engineer",
          job_description: "Develop and maintain scalable web applications.",
          job_qualification:
            "Proficient in JavaScript, React.js, and Node.js. Experience with cloud platforms is a plus.",
          job_type: "Remote",
          job_tenure: "Full-time",
          job_status: 1,
          company_name: "Gojek",
          company_image_url:
            "https://lelogama.go-jek.com/cms_editor/2021/05/28/info-gojek-2.png",
          company_city: "Jakarta",
          salary_min: 12000000,
          salary_max: 20000000,
        },
        {
          title: "Backend Developer",
          job_description:
            "Design, build, and optimize APIs for high-performance systems.",
          job_qualification:
            "Strong knowledge of Golang, PostgreSQL, and microservices architecture.",
          job_type: "Hybrid",
          job_tenure: "Full-time",
          job_status: 1,
          company_name: "Tokopedia",
          company_image_url:
            "https://seeklogo.com/images/T/tokopedia-logo-40654CCDD6-seeklogo.com.png",
          company_city: "Jakarta",
          salary_min: 10000000,
          salary_max: 18000000,
        },
        {
          title: "Mobile Developer (Flutter)",
          job_description:
            "Develop and optimize mobile applications using Flutter.",
          job_qualification:
            "Experience with Flutter, Dart, and Firebase. Knowledge of CI/CD is a plus.",
          job_type: "Onsite",
          job_tenure: "Full-time",
          job_status: 1,
          company_name: "Bukalapak",
          company_image_url:
            "https://hybrid.co.id/wp-content/uploads/2020/03/6d348add535c3c623309ebf5c1ee0c88_brand-architecture-bukalapak-primary@2x-1.png",
          company_city: "Jakarta",
          salary_min: 9000000,
          salary_max: 16000000,
        },
        {
          title: "DevOps Engineer",
          job_description:
            "Implement CI/CD pipelines and manage cloud infrastructure.",
          job_qualification: "Expertise in Kubernetes, AWS, and Docker.",
          job_type: "Remote",
          job_tenure: "Contract",
          job_status: 1,
          company_name: "Traveloka",
          company_image_url:
            "https://ik.imagekit.io/tvlk/blog/2020/01/Traveloka_Primary_Logo.png?tr=q-70,c-at_max,w-500,h-300,dpr-2",
          company_city: "Jakarta",
          salary_min: 13000000,
          salary_max: 22000000,
        },
        {
          title: "Data Analyst",
          job_description:
            "Analyze large datasets and provide business insights.",
          job_qualification:
            "Strong knowledge of SQL, Python, and data visualization tools.",
          job_type: "Hybrid",
          job_tenure: "Full-time",
          job_status: 1,
          company_name: "Shopee Indonesia",
          company_image_url:
            "https://upload.wikimedia.org/wikipedia/commons/b/b5/Shopee-logo.jpg",
          company_city: "Jakarta",
          salary_min: 11000000,
          salary_max: 19000000,
        },
      ],
    });
  }
};

seedJobs();

//  CRUD
// READ
export async function getJobs() {
  return prisma.job.findMany();
}

export async function getJobsFavorite() {
  return prisma.job.findMany({
    take: 3,
    orderBy: {
      createdAt: "asc",
    },
  });
}
