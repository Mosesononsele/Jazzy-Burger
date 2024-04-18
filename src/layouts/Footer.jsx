import React from "react";
import appleImg from "../assets/appleImg.svg"
import googleImg from "../assets/googleImg.svg"
import percentLogo from "../assets/percentLogo.svg"
import supportLogo from "../assets/supportLogo.svg"
import "../styles/Footer.css";
const Footer = () => {
  return (
    <>
    <footer className="bg-black">
      <main className="text-white container p-5">
   {/* section-1 */}
   <section className="d-lg-flex justify-content-between">
{/* parent div */}
<div className="flex-column-reverse flex-lg-row d-flex">
  {/* div for 24/7 text and logo */}
  <div className="d-lg-flex">
<img src={supportLogo} alt="24/7" />

  </div>

</div>
   </section>
      </main>
    </footer>
    </>
  );
};

export default Footer;
