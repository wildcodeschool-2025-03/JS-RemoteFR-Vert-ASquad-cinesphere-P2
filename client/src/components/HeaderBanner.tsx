import type { FC } from "react";
import "./HeaderBanner.css";

type HeaderBannerProps = {
  imgSrc?: string;
  title?: string;
};

const HeaderBanner: FC<HeaderBannerProps> = ({
  imgSrc = "https://i.imgur.com/Eh9QyEb.png",
  title = "LA RÉPARATION",
}) => {
  return (
    <div className="banner-img">
      <img src={imgSrc} alt="Banner background" />
      <div>
        <h1 className="banner-title">{title}</h1>
      </div>
    </div>
  );
};

export default HeaderBanner;
