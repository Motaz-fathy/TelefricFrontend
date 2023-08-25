import { FillterSide } from "components/ptivateTrip/FillterSide";
import { PrivatetripItem } from "components/ptivateTrip/PrivatetripItem";

import React, { FC } from "react";

interface PrivateTripPror {
  PrivatetripItem?: ChildNode;
  FillterSide?: ChildNode;
}
export const PrivateTrip: FC<PrivateTripPror> = () => {
  return (
    <div className="container mb-5 mt-5 flex w-full justify-around">
      
      <FillterSide />

      <div className="w-[2%] "></div>

      <div className="flex w-[73%] flex-col items-center  ">
        <div className="flex w-[100%] items-end justify-around">
          <div className="mr-[auto] flex justify-between">
            <h3> 105 Results </h3>
            <span className="text-[#1d4179]"> | All </span>
          </div>
          <div className="ml-[auto]  ">
            <select className="h-[50px] w-80 rounded-lg border-[#1D4179] bg-transparent">
              <option selected>Sort by</option>
              <option>All</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>
        <PrivatetripItem />
        <PrivatetripItem />
        <PrivatetripItem />
        <PrivatetripItem />
        <PrivatetripItem />
        <PrivatetripItem />
      </div>


    </div>
  );
};
