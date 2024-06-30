import type { NextPage } from "next";
import Head from "next/head";
import GeneralLayout from "layouts/generalLayout";
import SearchTwo from "@/components/atoms/SearchTwo/SearchTwo";
import Filter from "../../components/filterComponent/Filter";
import JobCard from "@/components/jobCard";
import { useQuery } from "@tanstack/react-query";
import { fetchAllJobs } from "@/api-endpoints/jobs/jobs.api"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const RemoteJobs: NextPage = (): JSX.Element => {
  const {data} = useQuery(["jobs"], fetchAllJobs)
  const remoteJobs = data?.data 
  
  return (
    <div>
      <Head>
        <title>Afrisplash | Remote Job</title>
        <meta name="description" content="The Gateway To Africa'S Remote Workforce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GeneralLayout>
        <div className="afri-container ">
          <div className="relative flex justify-center w-full mt-12">
            <div className="w-full lg:w-1/3">
              <SearchTwo placeholder="Search jobs, keywords , and companies" />
            </div>
          </div>
          <div>
            <Filter />
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="my-8 font-medium">{remoteJobs?.length} Results</div>
            <div className="flex items-center">
              <div>Date Posted</div>
              <div>
                <select className="bg-[#D9DEDC] rounded-full outline-none py-1.5  px-4  ml-2">
                  <option>Any time</option>
                  <option>24 hours</option>
                  <option>One week</option>
                </select>
              </div>
            </div>
          </div>
          <div className=" pb-12">
            {remoteJobs?.flatMap((job): JSX.Element => {
              return (
                <div key={job?._id}>
                  <JobCard
                    _id={job?._id}
                    forDashboard={false}
                    image={job?._company?.logo}
                    alt={job?._company?.name}
                    company={job?._company?.name}
                    service={job?.service}
                    employees={job?._company?.staff}
                    offer={job?.title}
                    salary={`${job?.salary?.min} - ${job.salary?.max}`}
                    postDate={job?.createdAt}
                    status={job?.status}
                    promoted={job?.promoted}
                    isDirectApply={job?.isDirectApply}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-end pb-4 ">
            <div>
              <div className="flex items-center gap-2">
                Page
                <div className="border rounded-lg py-2 px-8">1</div>
                <div>of 200</div>
                <div className="border rounded-lg py-2 px-4 ">
                  {" "}
                  <ChevronLeftIcon className="w-6 h-6 mr-2" />
                </div>
                <div className="border rounded-lg py-2 px-4">
                  {" "}
                  <ChevronRightIcon className="w-6 h-6 mr-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </GeneralLayout>
    </div>
  );
};

export default RemoteJobs;
