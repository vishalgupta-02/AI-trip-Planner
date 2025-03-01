import React, { useContext, useEffect } from "react";
import { Button } from "../ui/button.jsx";
import { LogInContext } from "@/Context/LogInContext/Login.jsx";
import toast from "react-hot-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { LogInIcon, LogOutIcon } from "lucide-react";
import { Link } from "react-router-dom";
import ModeToggle from "../ui/mode-toggle.jsx";

function Header() {
  const { user, isAuthenticated, logout, loginWithPopup } =
    useContext(LogInContext);
  const LogOut = () => {
    logout();
  };
  const LogIn = () => {
    loginWithPopup();
  };

  return (
    <div className="w-full flex items-center justify-between shadow-sm p-3 md:px-5">
      <div className="logo flex gap-2 items-center justify-between">
        <div className="img inline-block">
          <img
            src="/assets/logoipsum-220.svg"
            alt=""
            className="md:w-65 w-35"
          />
        </div>
      </div>
      {isAuthenticated ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="">
            <div className="user flex items-center gap-2 mr-3">
              <h2 className="hidden sm:block font-medium">
                Hy {user.nickname}
              </h2>
              <div className="userimg overflow-hidden h-10 w-10 rounded-full">
                <img src={user.picture} alt="" />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-center sm:text-left">
            <DropdownMenuLabel className="font-semibold text-xl">
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className=" text-lg">
              <Link to="/all-trips">My Trips</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className=" text-lg">
              <Link to="/plan-a-trip">Create Trip</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className=" text-lg">
              <Button onClick={LogOut}>
                Log Out{" "}
                <DropdownMenuShortcut>
                  {" "}
                  <LogOutIcon className="h-4" />
                </DropdownMenuShortcut>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex justify-center items-start gap-5">
          <div>
            <ModeToggle />
          </div>
          <div>
            <Button onClick={LogIn} className="bg-blue-500 text-md">
              Sign In{" "}
              <DropdownMenuShortcut>
                {" "}
                <LogInIcon className="h-4" />
              </DropdownMenuShortcut>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
