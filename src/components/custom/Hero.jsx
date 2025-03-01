import { useContext } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { LogInContext } from "@/Context/LogInContext/Login";

function Hero() {
  const { isAuthenticated } = useContext(LogInContext);
  return (
    <div className="flex items-center flex-col text-center justify-center h-auto">
      <div className="text px-10 md:px-40 flex flex-col items-center justify-center gap-4 m-5">
        <div className="heading">
          <h1 className="font-extrabold text-3xl md:text-[50px] leading-tight text-blue-500">
            Embark on Electrifying Adventures with TravelEase
          </h1>
          <h3 className="font-extrabold opacity-70 text-xl md:text-[40px] leading-tight">
            Tailored Itineraries for Every Explorer
          </h3>
        </div>
        <div className="desc mt-5">
          <h5 className="text-[15px] md:text-2xl font-semibold opacity-40">
            Your trusted trip planner and adventure guide sparking thrilling
            journeys with personalized travel plans designed to match your
            passions and preferences.
          </h5>
        </div>
        <div className="button m-10">
          <Link to="/plan-a-trip">
            <Button className="bg-blue-500 text-md">
              {isAuthenticated ? "Let's Make Another Trip" : "Plan a Trip"}
            </Button>
          </Link>
        </div>
      </div>
      <div className="img m-10 w-full">
        <img src="/assets/image1.jpg" className="rounded-xl w-full" alt="" />
      </div>
    </div>
  );
}

export default Hero;
