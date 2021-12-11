import React from "react";

function TheGame() {
  return (
    <div
      className="container wrap-body"
      style={{
        backgroundColor: "#000000",
        height: "90vh",
        width: "unset",
        overflow: "hidden",
      }}
    >
      <div className="d-flex flex-column my-2">
        <h1 className="w-100 text-white text-center p-0 m-0 my-2 py-2">
          The Game
        </h1>
        <h2 className="thegame-title w-100 text-white text-center pb-3">
          The Game is a interactive puzzle game almost like a scavenger hunt,
          with 3 parts and prizes for 5 total winners. You must be in the IK
          discord and hold an IK NFT to play The Game.
        </h2>
        <ul className="thegame-desc text-white text-left">
          <li>
            Game 1 will be completely online and only open to the first 200 IK
            NFT Holders. We will release 3 hints after the first 200 NFTs are
            minted. Using these three hints you must complete an "online
            scavenger hunt" to unlock 3 codes. The first NFT holder to unlock
            all three codes will win a prize pool of 10 SOL.
          </li>
          <li>
            Game 2 will be online and offline and will begin when 1000 IK NFTs
            have been minted. One of the three codes will only be given out at
            our live events. There will be one game 2 winner who gets a prize of
            40 SOL and a custom 1/1 IK NFT. luck.
          </li>
          <li>
            Game 3 will again be online and offline and will begin when all 5000
            IK NFTs are minted. There will be three game 3 winners. The prizes
            are as follows; first place wins a Tesla Model 3 (or price
            equivalent in SOL), second place wins all expenses paid to one of
            our live events, third place wins 5 SOL and a 1/1 IK NFT. The only
            rule is to think outside of the box. Good luck.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TheGame;
