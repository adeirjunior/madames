import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../lib/client";

const Style = styled.div`
background: linear-gradient(to bottom, rgba(236, 71, 142, 1), rgba(236, 71, 142, 0));
width: 100%;
height: 12em;
.hero-banner-container {
  padding: 0 1em;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  img {
    position: absolute;
    top: 50%;
    z-index: 100;
    left: 50%;
    user-select: none;
  }
  .banner-left-side {
    float: left;
    h3 {
      color: #fff;
      font-size: 2rem;
      font-weight: 800;
    }
    h4 {
      color: #000;
      font-weight: bold;
      font-size: .85rem;
    }
    p {
      margin: .25em 0;
      color: #000;
      font-size: .75rem;
    }
    button {
      background-color: #EC3535;
      border: none;
      font-weight: 800;
      font-size: .8rem;
      padding: .5em 1em;
      color: #fff;
      font-family: Montserrat;
      border-radius: .5em;
      margin: .5em 0;
    }
  }
}
`;

const HeroBanner = ({ banner }: any) => {
  const { image } = banner
  return (
    <Style>
      <div className="hero-banner-container">
        <div className="banner-left-side">
          <p>langerie top </p>
          <h4>Vendas de Verão</h4>
          <h3>PROMO</h3>
          <Link href="/">
            <button>Compre Agora</button>
          </Link>
        </div>
        <div className="banner-description">

        </div>
        <Image src={urlFor(image && image.asset._ref).url()} width={120} height={175}/>
      </div>
    </Style>
  )
}

export default HeroBanner;