import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Link from "next/link";
import { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div className="fadein">
      <div className="about">
        <h1>About</h1>
        <p className="description">
          I am a second year university student currently specialising in
          Computer Science at Queensland University of Technology in Australia.
          I have various experiences of programming languages, for instance,
          Python (pandas etc.), R, Java, HTML, CSS, JavaScript (TypeScript, React,
          Next.js), Node.js (Express), SQL (MySQL, SQLite etc.), Assembly, C, C#.
        </p>
        <h1>Contact</h1>

        <p className="contact">
          <HiMail />
          <span className="spacedText">tsubasa.bneaus@gmail.com</span>{" "}
        </p>
        <Link
          className="contact"
          target="_blank"
          href="https://www.linkedin.com/in/tsubasa-endo-421b4b1a6"
        >
          <FaLinkedin /> <span className="spacedText">LinkedIn</span>
        </Link>
        <Link
          className="contact"
          target="_blank"
          href="https://www.facebook.com/tsubasa.endo.376"
        >
          <FaFacebookSquare />
          <span className="spacedText">Facebook</span>
        </Link>
      </div>
    </div>
  );
};

export default About;
