import { jobCat, toArrayOfObjects } from "utils/fakeData";
import JobCard from "components/jobCard";
import JobCategory from "components/molecules/jobCategory";
import styles from "./styles.module.scss";
import { generateUniqueId } from "@/utils/helper";
import { TFunction } from "i18next";
import { useQuery } from "@tanstack/react-query";
import { fetchAllJobs } from "@/api-endpoints/jobs/jobs.api";
interface Props {
  translate: TFunction<["common", "home", "footer"], undefined>;
}
const fetchData = async () => {
  const response = await fetch('https://afrisplash-473196ceadbb.herokuapp.com/api/v1/jobs/');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function HomeJobs({ translate }: Props): JSX.Element {

  // const { data } = useQuery(["jobs"], fetchAllJobs);
  const { data, isLoading, error } = useQuery(['jobs'], fetchData);
  const homeJobs = data?.data
  const homeJobCat = toArrayOfObjects(jobCat, 9);
console.log(homeJobs);  


  return (
    <section className={`w-full ${styles.bg_gray}`}>
      <div className="py-28 space-y-24 w-11/12 xl:w-10/12 mx-auto">
        <section className="space-y-10">
          <div className="text-center space-y-3 lg:space-y-5">
            <h2 className="text-2xl lg:text-4xl font-semibold">
              {translate("Popular job categories")}
            </h2>
            <p className="text-gray-500 lg:text-base text-base">
              {translate("224 live")} | {translate("49 added today")}
            </p>
          </div>
          <div className="w-full flex flex-wrap justify-between ">
            {homeJobCat.map((data: any) => (
              <JobCategory key={generateUniqueId()} data={data} />
            ))}
          </div>
        </section>
        <section className="space-y-16 ">
          <div className="text-center  md:space-y-8">
            <h2 className=" text-2xl lg:text-5xl font-semibold mb-4 md:mb-7">
              {translate("Featured jobs")}
            </h2>
            <div className="text-lg md:text-xl text-gray-700">
              {translate("Live, work, and succeed anywhere in Africa")}
            </div>
          </div>
          {/* <div className="w-full grid lg:grid-cols-4  sm:grid-cols-1">
            {homeJobs?.map(
              (job): JSX.Element => (
                <div key={job?._id}>
                  <JobCard
                    forDashboard={false}
                    image={job?._company?.logo}
                    alt={job?._company?.name}
                    company={job?._company?.name}
                    service={job?.service}
                    employees={job?._company?.staff}
                    offer={job?.title}
                    salary={job?.salary}
                    postDate={job?.createdAt}
                    status={job?.status}
                    promoted={job?.promoted}
                    isDirectApply={job?.isDirectApply}
                  />
                </div>
              )
            )}
          </div> */}
        </section>
      </div>
    </section>
  );
}

export default HomeJobs;
