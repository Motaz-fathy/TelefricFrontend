/* eslint-disable jsx-a11y/iframe-has-title */
import { FillterSide } from "components/ptivateTrip/FillterSide";
import React, { FC } from "react";

interface PrivateTripIdProp {
  FillterSide?: ChildNode;
}
export const PrivateTripId: FC<PrivateTripIdProp> = () => {
  return (
    <div className="container mb-5 mt-5 flex w-full justify-around">
      <FillterSide />
      <div className="w-[2%] "></div>
      <div className="flex w-[73%] flex-col items-center">
        <div className="flex items-center justify-center">

            
        </div>
      </div>
    </div>
  );
};
