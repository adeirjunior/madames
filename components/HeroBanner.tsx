import styled from "styled-components";
import type { FC } from "react";
import Image from "next/image";
import { urlFor } from "../lib/client";

const Style = styled.div`
background: linear-gradient(to bottom, rgba(236, 71, 142, 1), rgba(236, 71, 142, 0));
width: 100%;
height: 12em;
.hero-banner-container {
  padding: 0 1em;
  position: relative;
  width: 100%;
  height: 100%;
  img {
    position: absolute;
    top: 50%;
    z-index: 100;
    left: 50%;
    user-select: none;
  }
}
`;

const HeroBanner = ({ banner }: any) => {
  const { image } = banner
  return (
    <Style>
      <div className="hero-banner-container">
        <Image src={urlFor(image && image.asset._ref).url()} width={120} height={175}/>

      </div>
    </Style>
  )
}

export default HeroBanner;