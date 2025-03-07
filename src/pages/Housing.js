import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import axios from "axios";

const Housing = () => {
  const housing = useLoaderData();
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Price</th>
          <th scope="col">Area</th>
          <th scope="col">Bed Rooms</th>
          <th scope="col">Bath Rooms</th>
          <th scope="col">Stories</th>
          <th scope="col">Main Road</th>
          <th scope="col">Guest Room</th>
          <th scope="col">Basement</th>
          <th scope="col">Hot Water Heating</th>
          <th scope="col">Air Conditioning</th>
          <th scope="col">Parking</th>
          <th scope="col">Pref Area</th>
          <th scope="col">Furnishing Status</th>
        </tr>
      </thead>
      <tbody>
        {housing.map((house, index) => {
          return (
            <tr key={index}>
              <td>
                <NavLink to={"/housing/" + house.id}>{house.id}</NavLink>
              </td>
              <td>{house.price}</td>
              <td>{house.area}</td>
              <td>{house.bedRooms}</td>
              <td>{house.bathRooms}</td>
              <td>{house.stories}</td>
              <td>{house.mainRoad}</td>
              <td>{house.guestRoom}</td>
              <td>{house.basement}</td>
              <td>{house.hotWaterHeating}</td>
              <td>{house.airConditioning}</td>
              <td>{house.parking}</td>
              <td>{house.prefArea}</td>
              <td>{house.furnishingStatus}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Housing;

export const housingLoader = async () => {
  let respo = [];

  await axios({
    // Endpoint to send files
    url: "http://localhost:5000/housing",
    method: "GET",
  })
    .then((res2) => {
      /*
      setTimeout(() => {
        console.log("timeout done!");
        setHousing(response.data);
      }, 2000);
      
      */
      respo = res2.data;
      respo.sort((a, b) => {
        if (parseInt(a.price) < parseInt(b.price)) {
          return 1;
        } else if (parseInt(a.price) > parseInt(b.price)) {
          return -1;
        }

        return 0;
      });
    })
    // Catch errors if any
    .catch((err) => {});
  return respo;
};
