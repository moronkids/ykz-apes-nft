import React, { useContext, useEffect } from "react";
import Connect from "components/Transactions";
import { Hooks } from "providers";
import Logo from "assets/img/logo.png";
import { Link } from "@material-ui/core";
function Banner() {
  const {
    setScroll,
    scroll,
    barMobile,
    setBarMobile,
    wallet_,
    setWallet_,
    datas,
    blnc,
  } = useContext(Hooks);
  console.log(datas, "cekin");
  useEffect(() => {}, [datas, wallet_]);
  return (
    <>
      <div
        id="banner"
        className="home-banner mx-auto justify-content-center align-items-center d-flex"
      >
        <div className="home-banner-wrapping justify-content-center align-items-center w-100 ">
          <div className="col-md-6 col-12 p-md-0 py-3 d-flex flex-column mx-auto text-center">
            {/* <div className="intro">Welcome to the</div>
            <div className="solana">Solana Sea Bandits</div> */}
            {/* <div className="piranhas">Solana Sea Bandits</div> */}
            <img
              src={Logo}
              alt=""
              width="279px"
              height="279px"
              className="img d-flex mx-auto"
            />
            {/* <div className="minting">MINTING NOW LIVE 🚀🚀</div> */}

            <div className="d-flex flex-column mx-auto justify-content-sm-start justify-content-center">
              <p
                style={{
                  fontSize: "1.5rem",
                  color: "#000000",
                  textAlign: wallet_ && "left",
                }}
                className="p-0 m-0"
              >
                .25 SOL
              </p>
              {wallet_ && (
                <>
                  <p
                    style={{
                      fontSize: "1.5rem",
                      color: "#000000",
                      textAlign: wallet_ && "left",
                    }}
                    className="p-0 m-0"
                  >
                    REMAINING&nbsp;{datas[0] + " / " + datas[1]}
                  </p>
                  <p
                    style={{
                      fontSize: "1.5rem",
                      color: "#000000",
                      textAlign: wallet_ && "left",
                    }}
                    className="p-0 m-0"
                  >
                    BALANCE: {blnc}
                  </p>
                </>
              )}
              <Connect />
            </div>

            <div
              className="d-flex justify-content-center pt-4 mx-auto w-100 h-100 my-auto"
              style={{
                gap: "20px",
              }}
            >
              <div className="d-flex my-auto">
                <Link
                  to="https://discord.gg/fUw57TAw"
                  style={{
                    width: "43px",
                    height: "auto",
                    cursor: "pointer",
                  }}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="discord"
                    // class="svg-inline--fa fa-discord MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-ptiqhd-MuiSvgIcon-root  fa-w-20"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    color="rgb(111, 133, 213);"
                  >
                    <path
                      d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                      fill="rgb(111, 133, 213)"
                    ></path>
                  </svg>
                </Link>
              </div>

              <div className="d-flex my-auto">
                <Link
                  to="https://twitter.com/YakuzaApes"
                  style={{
                    width: "43px",
                    height: "auto",
                    cursor: "pointer",
                  }}
                >
                  <svg
                    // class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    data-testid="TwitterIcon"
                  >
                    <path
                      fill="rgb(111, 133, 213)"
                      d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
