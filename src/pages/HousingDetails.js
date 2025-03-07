import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";

const HousingDetails = () => {
  const housingDetails = useLoaderData();
  return (
    <div>
      <div className="row mt-4">
        <div className="col-md-4 col-md-offset-4" role="alert">
          Price: {housingDetails.price}
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-md-4 col-md-offset-4" role="alert">
          Area: {housingDetails.area}
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-md-4 col-md-offset-4" role="alert">
          BedRooms: {housingDetails.bedRooms}
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-md-4 col-md-offset-4" role="alert">
          Stories: {housingDetails.stories}
        </div>
      </div>
    </div>
  );
};

export default HousingDetails;

export const housingDetailsLoader = async ({params}) => {
    console.log(params);
    const {id} =params;
  let respo = [];
  await axios({
    url: "http://localhost:5000/housing/"+id,
    method: "GET",
  })
    .then((res2) => {
      respo = res2.data;
    })
    .catch((err) => {
        throw Error('An error occurred');
    });
  return respo;
};
