import React from "react";
import Discord from "assets/img/icons8-discord.svg";
import Twitter from "assets/img/icons8-twitter.svg";
// import FooterIcon from "assets/img/icon-footer.png";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-wrap">
          <div className="content1">
            {/* <img src={FooterIcon} alt="" width={90} height={90} /> */}
            {/* <p class="title">Internet Kids</p>
            <p>
              Copyright © Internet Kids powered by{" "}
              <span style={{ color: "#6aff6a" }}>Solana</span>
            </p> */}
          </div>
          <div className="content2">
            <p>Join the Discord</p>
            <p>Follow us on Twitter</p>
            <p>Visit TeamSeas.Org</p>
          </div>
          <div className="content3">
            Together we can make the world a better place while showing off the
            power of the NFT community.
            {/* <a href="https://discord.gg/bkWJHedf3X">
              <img src={Discord} alt="" width="30" />
            </a>
            <a href="https://twitter.com/internetkidsio">
              <img src={Twitter} alt="" width="30" />
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
