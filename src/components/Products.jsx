import React from "react";
import jazzyPic from "../assets/jazzyPic.jpg";
import Fetch from "./Fetch";

const Products = () => {
  return (
    <>
      <main className="mt-5 row  ">
        {/* div-1 */}
        <div className="d-none d-lg-block col-lg-3">
          <img src={jazzyPic} alt="jazzy pic" className="w-100 h-100" />
        </div>

        {/* div-2 */}
        <div className="col-lg-9">
          <div className="d-flex flex-wrap gap-3"></div>
          <Fetch />
        </div>
      </main>
    </>
  );
};

export default Products;
