import React from 'react'
import "./Footer.css"
import img from "../../images/footerimAGE.png"

const Footer = () => {
  return (
    <div className="mainfooterdiv">
      <div className="footerdiv1">
        <img src={img}></img>
      </div>
      <div className="footerdiv2">
        <p className="text6">The Big House is a charity</p>
        <p className="text6"> tranforming the lives of </p>
        <p className="text6"> care leavers andat-risk young</p>
        <p className="text6">people through the power</p>
        <p className="text6">of performance.</p>
      </div>
      <div className="footerdiv3">
        <p className="text8">Big House</p>
        <p className="text7">About</p>
        <p className="text7">Jobs</p>
        <p className="text7">Diversity,Equality and Inclusion</p>
        <p className="text7">Press</p>
      </div>
      <div className="footerdiv4">
        <p className="text8">JOIN US</p>
        <p className="text7">Become a member</p>
        <p className="text7">Jobs in Big House</p>
        <p className="text7">I work in care</p>
        <p className="text7">Partnerships</p>
      </div>
      <div className="footerdiv5">
        <p className="text8">HIRE US</p>
        <p className="text7">Event Space</p>
        <p className="text7">Workshops</p>
        <p className="text7">Something Else</p>
        <p className="text7">Press</p>
      </div>
      <div className="footerdiv6">
        <p className="text8">FOLLOW US</p>
        <p className="text7">About</p>
        <p className="text7">jobs</p>
        <p className="text7">Diversity,Equality,Inclusion</p>
        <p className="text7">Press</p>
      </div>
    </div>
  );
}

export default Footer
