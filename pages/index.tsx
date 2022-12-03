import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import profileImage from "../public/profile.jpg";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="fadein">
      <div className="introduction">
        <h1>Tsubasa Endo</h1>
        <Image className="profileImage" src={profileImage} alt="" />
        <p>2nd year university student majoring Computer Science</p>
      </div>
      <div className="introduction">
        <h1>Portfolio</h1>
        <p>Uploading Soon...</p>
      </div>
    </div>
  );
}

export default Home;
