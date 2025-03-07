import React from "react";
import { useParams } from "react-router";
const ProductInfo = () => {
  let params = useParams();
  console.log(params.id);

  const {id}= useParams();//you can get id by destructuring like this too

  return (
    <div>
      {(() => {
        if (id === '1') {
          return (
            <>
              HP OmniBook Ultra Flip 2-in-1 Laptop Next Gen AI PC 14t-fh000, 14
            </>
          );
        } else if (id === '2') {
          return <>Inspiron 16 Plus Laptop</>;
        } else if (id === '3') {
          return <>Apple 2022 MacBook Air Laptop with M2 chip</>;
        }
        return <>{id}</>;
      })()}
    </div>
  );
};

export default ProductInfo;
