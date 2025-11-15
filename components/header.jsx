import React from "react";
import Navigation from "./navigation";
import Socials from "./socials";

const Header = (props) => {
  return (
    <div className="lg:fixed h-screen basis-1.5/4 flex flex-col justify-between pb-48 self-center lg:self-auto">
      <div className="">
        <h1 className="text-5xl subpixel-antialiased tracking-wide">
          {props.data.name}
        </h1>

        <div className="flex flex-row items-center mt-3">
          <h2 className="text-primary-600 text-base font-normal tracking-wider">
            {props.data.headline}
          </h2>
          <a
            href={`${props.data.socials.resume}`}
            download={`${props.data.socials.resume}`}
            className="ml-5 transition-all bg-primary-500 hover:bg-primary-300 text-surface-100 font-bold py-1 px-2 rounded flex flex-row justify-center items-center"
          >
            <span className="pl-2">&darr; Resume</span>
          </a>
        </div>
        <Navigation></Navigation>
        <Socials data={props.data.socials}></Socials>
      </div>
    </div>
  );
};

export default Header;
