import type { FC } from "react";
import "../assets/styles/HeaderBanner.css";

type HeaderBannerProps = {
  imgSrc?: string;
  title?: string;
};

const HeaderBanner: FC<HeaderBannerProps> = ({
  imgSrc = "https://i.imgur.com/Eh9QyEb.png",
  title = "LA RÉPARATION",
}) => {
  return (
    <>
      <img className="banner-img" src={imgSrc} alt="Banner Film" />
      <h1 className="banner-title">{title}</h1>
    </>
  );
};

export default HeaderBanner;
