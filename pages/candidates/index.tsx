
import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import GeneralLayout from "@/layouts/generalLayout";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import SearchTwo from "@/components/atoms/SearchTwo/SearchTwo";
import { CandidateSideBar } from "@/components/Candidates";
import sms from 'assets/sms.png';
import { MentorCard } from "@/components/Forum/MentorCardComponent";
import Button from "@/components/atoms/Button/Button";
import { getTotalCandidates } from "@/api-endpoints/get-candidates/get-candidates.api";
import GhanaFlag from "assets/general/ghana-flag.svg";

const Candidates: NextPage = () => {
    const [openFilter, setOpenFilter] = useState<boolean>(false);

    const { data } = useQuery(["candidatesList"], async () => {
        const response = await getTotalCandidates();
        return response.data;
    });

    return (
        <div>
            <Head>
                <title>Afrisplash | Candidates</title>
                <meta name="description" content="The Gateway To Africa'S Remote Workforce" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <GeneralLayout>
                <div className="afri-container">
                    <div className="mt-8 py-4 " >
                        <div className="flex  lg:flex-row gap-4 flex-col lg:items-center">
                            <div className="flex gap-4 items-center">

                                <div className="flex lg:hidden" onClick={() => setOpenFilter(!openFilter)}>
                                    <AdjustmentsHorizontalIcon className="w-6 h-6" />
                                </div>
                                <div className="hidden lg:flex">
                                    <AdjustmentsHorizontalIcon className="w-6 h-6" />
                                </div>
                                <div className="flex-grow ">
                                    <SearchTwo placeholder="Search candidates" />
                                </div>
                            </div>
                            <div>
                                <p className="font-medium">Showing 1-10 of <span className="font-bold text-primary_green">48 Canditates</span></p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mt-8 mx-auto py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {
                            openFilter && <div className="mt-4 flex lg:hidden">
                                <CandidateSideBar />
                            </div>
                        }
                        <div className="mt-4 hidden lg:flex">
                            <CandidateSideBar />
                        </div>

                        <div className="col-span-2 w-full px-4 lg:px-0 lg:w-11/12">
                            <div className="flex flex-col gap-4 lg:items-center  lg:flex-row lg:justify-between">
                                <button className="w-fit md:flex gap-2 bg-[#0D5520] items-center justify-center  p-4 rounded-md hover:opacity-80 hidden">
                                    <span className="text-white font-medium">Get talent profiles</span>
                                    <Image src={sms} alt="sms" />
                                </button>
                                <div className="flex flex-row justify-center items-center">
                                    <p className="font-meduim">Sort by: </p>
                                    <div className="mx-2">
                                        <SearchTwo placeholder="Newest" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <div className="grid gap-6 grid-cols-1  lg:grid-cols-3">
                                    {data && data.map((candidate) => {
                                        const fullName = `${candidate.first_name} ${candidate.last_name}`;
                                        return (
                                            <MentorCard
                                                key={candidate._id}
                                                name={fullName}
                                                position='Senior Developer'
                                                role={candidate.role}
                                                flag={GhanaFlag}
                                                src={candidate.profile_image}
                                            />
                                        );
                                    })}
                                </div>
                                <div className='mt-12  flex justify-center'>
                                    <Button
                                        type='filled'
                                        color='white'
                                        text='Load more candidates'
                                        classes="w-64 h-12 rounded-md text-sm font-medium capitalize  text-white bg-dark_blue hover:opacity-80"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </GeneralLayout>
        </div>

    )
}


export default Candidates