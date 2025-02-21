import { Badge } from "@/components/ui/badge";
import { FaLongArrowAltRight } from "react-icons/fa";
import useRupiahFormat from "@/hooks/useRupiahFormat";

type JobProps = {
  title: string;
  job_description: string;
  job_qualification: string;
  job_type: string;
  job_tenure: string;
  job_status: number;
  company_name: string;
  company_image_url: string;
  company_city: string;
  salary_min: number;
  salary_max: number;
};

export default function CardJob({ item }: { item: JobProps }) {
  const { formatRupiah } = useRupiahFormat();
  return (
    <div className="bg-white shadow-sm rounded-lg border relative overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2">
      <img
        src={item.company_image_url}
        alt={item.company_name}
        className="w-full h-52 object-fill border-b"
      />

      <Badge className="absolute top-2 left-2 bg-transparent text-orange-400 px-3 py-1 rounded-full cursor-pointer ">
        🔥TOP
      </Badge>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <Badge className="bg-orange-400 px-3 py-1 cursor-pointer hover:bg-orange-800">
            {item.company_name}
          </Badge>
          <span className="text-slate-400 font-extralight text-sm">
            {item.company_city}
          </span>
        </div>
        <h3 className="my-2 font-bold text-base">{item.title}</h3>
        <h3 className="text-orange-500 font-medium text-base">
          {`💰 ${formatRupiah(item.salary_min)} - ${formatRupiah(
            item.salary_max
          )}`}
        </h3>
        <p className="text-slate-500 font-medium my-2 text-base font-serif">
          <span className="text-slate-800">Description: </span>
          {item.job_description}
        </p>
        <p className="text-slate-500 font-medium my-2 text-base font-serif">
          <span className="text-slate-800">Qualification: </span>
          {item.job_qualification.length > 70
            ? item.job_qualification.slice(0, 70) + "..."
            : item.job_qualification}
        </p>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Badge className="bg-orange-200 text-orange-400 hover:bg-orange-500 hover:text-slate-100 cursor-default">
              {item.job_type}
            </Badge>
            <Badge className="bg-orange-200 text-orange-400 hover:bg-orange-500 hover:text-slate-100 cursor-default">
              {item.job_tenure}
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-orange-600 cursor-pointer hover:text-orange-700">
            <span>See Detail</span>
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>
    </div>
  );
}
