import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import GeneralLayout from "@/layouts/generalLayout";
import Image from "next/image";
import Office2 from "assets/co-workingSpace/Office2.png";
import Office3 from "assets/co-workingSpace/Office3.png";
import Office4 from "assets/co-workingSpace/Office4.png";
import calender2 from "assets/icons/calender2.svg";
import location from "assets/icons/location.svg";
import verified from "assets/icons/verified.svg";
import Button from "@/components/atoms/Button/Button";
import Tabs from "@/components/Co-workingSpace/tabComp";
import LocateMap from "@/components/Co-workingSpace/map"
import { availableSpaceTabsData, availableSpacesTableData, businessHoursData, equipmentData, cateringData, facilitiesData, relaxZonesData, classicBasicsData } from "@/utils";
import WorkSpaceTable from "@/components/Co-workingSpace/tableComp";
import CheckBoxComp from "@/components/Co-workingSpace/checkBoxComp";
import ModalComp from "@/components/Co-workingSpace/CoWorkingSpaceModal";


const CoWorkingSpaceDetails: NextPage = () => {
  const handleCheckboxChange = (selectedValues: string[]) => {
    console.log('Selected values:', selectedValues);
  };

  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
      <Head>
        <title>Afrisplash | Co-Working Space</title>
        <meta name="description" content="The Gateway To Africa'S Remote Workforce" />
      </Head>
      <GeneralLayout>
        <div className="afri-container grid gap-8 xl:grid-cols-6 md:grid-cols-5 my-8">
          <div className="relative md:h-[100%] h-[500px] rounded-lg bg-cover md:col-span-3 xl:col-span-4 bg-no-repeat bg-[url(../assets/co-workingSpace/Office1.png)]">
            <div className="absolute md:pl-10 pl-4  flex flex-col justify-end rounded-lg inset-0 bg-gradient-to-t from-[#D6ECDC] via-transparent to-transparent">
              <div className="flex justify-start mb-5 md:ml-14 ml-6">
                <Image src={calender2} alt="chatIcon" className="mr-2" />
                <h5 className="text-center text-dark_black">Joined April 2022</h5>
              </div>
              <div className="flex justify-start gap-8 mb-8">
                <Button
                  type="filled"
                  color="white"
                  text="Take a tour"
                  classes="  md:px-8 px-4 h-12 rounded-[8px] text-sm font-medium capitalize  text-white bg-primary_green"
                />
                <Button
                  type="autlined"
                  color="primary_green"
                  text="Book a visit"
                  classes="md:px-8 px-4  h-12 rounded-[8px] text-sm font-medium capitalize  text-primary_green bg-transparent border border-primary_green"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-rows-3 gap-8 md:col-span-2">
            <Image src={Office2} alt="chatIcon" className="" />
            <Image src={Office3} alt="chatIcon" className="" />
            <Image src={Office4} alt="chatIcon" className="" />
          </div>
        </div>


        <div className="afri-container lg:grid xl:grid-cols-6 lg:grid-cols-5 gap-8">
          <div className="xl:col-span-4 md:col-span-3">
            <h1 className="text-[700] md:text-[48px] text-[25px] leading-[150%]">Nairobi Garage</h1>
            <div className="flex mb-5 mt-2">
              <Image src={location} alt="chatIcon" className="" />
              <h5 className="text-[500] md:text-[16px] text-[13px] text-[#606172] ml-2">Delta Corner Annex, Ring Rd Westlands</h5>
            </div>
            <div className="flex mb-8">
              <Image src={verified} alt="chatIcon" className="" />
              <h5 className="ml-2 text-[600] text-[14px]">Verified</h5>
            </div>
            <div className="bg-white_2 md:w-[20%] p-2 mb-8 mt-4">
              <h3 className="font-bold text-[16px] text-center">OVERVIEW</h3>
            </div>
            <p className="text-[600] text-[20px] leading-[150%] text-[#979797] w-[90%]">
              Nairobi Garage is a highly ranked coworking space in Africa. They are committed to giving businesses the perfect space to grow. In Nairobi Garage, Entrepreneurs, SMEs, and startups can get connected to a dynamic community of innovative companies and professionals. They can also increase their scale and impact with this ultimate flexible workspace in Nairobi.

              Features of this coworking space are Private Offices, Meeting rooms, and event space. As at the time of this research to rank coworking spaces in Africa, they ranked the highest in Nairobi, Kenya.
            </p>
            <div className="bg-light_green lg:w-[30%] md:w-[30%] p-2 my-10 ">
              <h3 className="font-bold text-[16px] text-center text-sunglow">AVAILABLE SPACE</h3>
            </div>
            <div className="xlg:w-full lg:w-[95%] md:w-full mt-4 mb-8">
              <div className="grid md:grid-cols-5 md:grid-rows-1 grid-rows-3 md:border md:border-gray-300 rounded xlg:text-[11px] md:text-[12px] text-[13px] text-primary_grey font-bold">
                {availableSpaceTabsData.map((tab) => (
                  <Tabs key={tab.id} id={tab.id} title={tab.title} />
                ))}
              </div>
            </div>
            <div className="my-10 xlg:w-full lg:w-[95%] md:w-full w-[95%] lg:mx-0 sm:m-auto">
              <WorkSpaceTable
                availableSpaces={availableSpacesTableData}
                TableWrapper="border-separate border-spacing-1"
                headerCellClass="bg-sunglow  text-white text-center "
                cellClassName="py-4 bg-grey_2 text-center"
                buttonWrapper=" py-4 bg-white border-primary_green "
              />
            </div>
          </div>

          <div className="lg:col-span-2 ">
            <div className="my-10 ">
              <div className="bg-light_green rounded-t-lg pl-5 py-5">
                <h1 className="text-[24px] text-[600] leading-[150%]text-dark_black">Business Hours</h1>
              </div>
              {businessHoursData.map((hours) => (
                <div className={`grid grid-cols-4 py-6 bg-white_2  ${hours.day === "Sunday" ? "border-b-0 rounded-b-lg shadow-0" : "border-border_b border-b-2"
                  }`} key={hours.id}>
                  <div className="text-grey_3 xlg:text-[13px] md:text-[16px] text-[10px] text-[400] mt-2 pl-5">{hours.day} :</div>
                  {hours.startTime && hours.endTime ? (
                    <div className="col-span-2 flex mt-2 xlg:text-[13px] md:text-[16px] text-[10px] text-[400] justify-between px-5 text-grey_3"><span className="">{hours.startTime} </span> - <span className="">{hours.endTime}</span>
                    </div>
                  ) : (
                    <div className="col-span-2 xlg:text-[13px] md:text-[16px] text-[10px] text-[400] flex mt-2 justify-start px-5 text-grey_3"><span className="">Closed</span>
                    </div>
                  )}
                  <div className="">
                    <Button
                      onClick={handleClickOpen}
                      type="autlined"
                      color="primary_green"
                      text="Reserve now"
                      classes="py-2 xlg:px-1 md:px-3 px-2 rounded-[8px] xlg:text-[12px] md:text-sm text-[8px] font-medium capitalize  text-primary_green bg-transparent border border-primary_green"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="xlg:w-full lg:w-0 md:m-auto lg:m-0">
              <LocateMap address="1600 Amphitheatre Parkway, Mountain View, CA" />
            </div>
          </div>
        </div>
        <div className="afri-container mb-14">
          <h1 className="text-[18px] font-[600] my-8">AMENITIES</h1>
          <h5 className="text-[18px] font-[500] mt-8 mb-3">Ticked boxes indicate that those amenities are available
          </h5>
          <div className="grid xlg:grid-cols-5 md:grid-cols-3  gap-8 py-8">
            <div className="">
              <h5 className="text-[18px] font-[500] my-4">Facilities</h5>
              <CheckBoxComp onChange={handleCheckboxChange} options={facilitiesData} />
            </div>
            <div className="">
              <h5 className="text-[18px] font-[500] my-4">Classic Basics</h5>
              <CheckBoxComp onChange={handleCheckboxChange} options={classicBasicsData} />
            </div>
            <div className="">
              <h5 className="text-[18px] font-[500] my-4">Relax Zones</h5>
              <CheckBoxComp onChange={handleCheckboxChange} options={relaxZonesData} />
            </div>
            <div className="">
              <h5 className="text-[18px] font-[500] my-4">Catering</h5>
              <CheckBoxComp onChange={handleCheckboxChange} options={cateringData} />
            </div>
            <div className="">
              <h5 className="text-[18px] fon500] my-4">Equipment</h5>
              <CheckBoxComp onChange={handleCheckboxChange} options={equipmentData} />
            </div>
          </div>
        </div>
        <ModalComp open={open} onClose={handleClose} />
      </GeneralLayout>
    </div>
  );
};

export default CoWorkingSpaceDetails;
