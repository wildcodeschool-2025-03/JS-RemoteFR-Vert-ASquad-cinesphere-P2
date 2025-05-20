import type { FC } from "react";
import "../assets/styles/HeaderBanner.css";

type HeaderBannerProps = {
  imgSrc?: string;
  titleSrc?: string;
};

const HeaderBanner: FC<HeaderBannerProps> = ({
  imgSrc = "https://i.imgur.com/Eh9QyEb.png",
  titleSrc = "https://cdn.bemaup.com/4_zc4e2bf4ddbd23e0c9d610c11_f105493bd58856de2_d20250514_m132403_c003_v0312005_t0023_u01747229043703",
}) => {
  return (
    <>
      <div className="banner-img">
        <img
          className="banner-background"
          src={imgSrc}
          alt="Banner Film Background"
        />
        <img className="banner-title" src={titleSrc} alt="Banner Title" />
      </div>
    </>
  );
};

export default HeaderBanner;
