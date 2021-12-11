import React, { useContext, useEffect } from "react";
import Connect from "components/Transactions";
import { Hooks } from "providers";
import Hero from "assets/img/hero.png";
import AnotherHero from "assets/img/hero-line.svg";
import ReactPlayer from "react-player/youtube";
function Banner() {
  const {
    setScroll,
    scroll,
    barMobile,
    setBarMobile,
    wallet_,
    setWallet_,
    datas,
  } = useContext(Hooks);
  useEffect(() => {}, [datas, wallet_]);
  return (
    <>
      <div
        id="banner"
        className="home-banner mx-auto justify-content-center align-items-center d-flex"
      >
        <div className="home-banner-wrapping justify-content-start align-items-center w-100 ">
          <div className="col-md-6 col-12 p-md-0 py-3 d-flex flex-column mx-auto text-center">
            <div className="intro">Welcome to the</div>
            <div className="solana">Solana Sea Bandits</div>
            <div className="piranhas">Solana Sea Bandits</div>
            {/* <img src={Hero} alt="" className="img d-sm-none d-block" /> */}
            {/* <div className="minting">MINTING NOW LIVE 🚀🚀</div> */}
            <div className="first-mint">
              YARR!! SOLANA SEA BANDITS ARE HERE! We are a crew of 1010 Sea
              Bandits coming for your booty! Our team works hard to deliver long
              lasting value to our crew mates! COME JOIN US ON OUR ADVENTURE TO
              THE LAND OF RICHES!
              <a
                className="here"
                href="https://medium.com/@TheSolanaPiranhas/how-to-mint-a-solana-piranha-nft-c7159f1e1466"
                rel="noreferrer"
                target="_blank"
              >
                HERE{" "}
              </a>
            </div>

            {wallet_ && (
              <>
                <h2
                  style={{
                    color: "#d07474",
                  }}
                  className="text d-sm-block d-flex mx-auto my-0 justify-content-sm-start justify-content-center"
                >
                  {datas[0] + " / " + datas[1]}
                </h2>
              </>
            )}
            <div className="d-flex mx-auto justify-content-sm-start justify-content-center">
              <Connect />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
