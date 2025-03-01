import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  const openGithub = () => {
    window.open(
      "https://github.com/vishalgupta-02",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <div className="footer min-h-32 w-full flex text-muted-foreground items-center justify-center p-4">
      <div>
        <h1>
          <Link
            to="https://github.com/vishalgupta-02"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="link" onClick={openGithub}>
              {" "}
              <p className="sm:font-semibold sm:text-lg text-muted-foreground border-b-2">
                Made by Vishal Gupta
              </p>
            </Button>
          </Link>
        </h1>
      </div>
      <div className="flex justify-center items-center gap-6 m-6 p-6 cursor-pointer">
        {/* Social Icons */}
        <FaInstagram
          className="w-6 h-6"
          href="https://instagram.com/vishal_listens"
        />
        <FaXTwitter className="w-6 h-6" />
        <FaGithub
          className="w-6 h-6"
          to={"https://github.com/vishalgupta-02"}
        />
      </div>
    </div>
  );
}

export default Footer;
