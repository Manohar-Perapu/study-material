import React from "react";
import { CollegeImage } from "../../components/CollegeImage";
import { Header } from "../../components/Header";
import { HomeWrapper } from "../../components/HomeWrapper";
import { RightSec } from "../../components/RightSec";
import { Search } from "../../components/Search";
import { Home2 } from "../../icons/Home2";
import "./style.css";

export const MacbookPro = () => {
  return (
    <div className="macbook-pro">
      <div className="div-2">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <CollegeImage
              className="college-image-instance"
              image="https://c.animaapp.com/KLIOKiqK/img/image-2-1.png"
              imageClassName="design-component-instance-node"
            />
            <div className="frame-10">
              <Header
                className="header-instance"
                icon={<Home2 className="home-2" />}
                img="https://c.animaapp.com/KLIOKiqK/img/vector-5.svg"
                vector="https://c.animaapp.com/KLIOKiqK/img/vector-4.svg"
                vector1="https://c.animaapp.com/KLIOKiqK/img/vector-6.svg"
              />
              <RightSec
                className="right-sec-instance"
                hubClassName="right-sec-2"
                img="https://c.animaapp.com/KLIOKiqK/img/line-2-1.svg"
                line="https://c.animaapp.com/KLIOKiqK/img/line-1-1.svg"
              />
            </div>
          </div>
        </div>
        <HomeWrapper
          chevronRight="https://c.animaapp.com/KLIOKiqK/img/chevronright-1.svg"
          className="home-3"
          frame="https://c.animaapp.com/KLIOKiqK/img/frame-16-1.svg"
        />
        <Search
          className="search-instance"
          frame="https://c.animaapp.com/KLIOKiqK/img/frame-32-3.svg"
          img="https://c.animaapp.com/KLIOKiqK/img/frame-32-3.svg"
        />
      </div>
    </div>
  );
};
