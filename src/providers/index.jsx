import React, { useState, useEffect, useContext, createContext } from "react";
export const Hooks = createContext();
const Index = (props) => {
  const [scroll, setScroll] = useState("");
  const [timer, setTimer] = useState(true);
  const [barMobile, setBarMobile] = useState(false);
  const [wallet_, setWallet_] = useState(false);
  const [datas, setDatas] = useState([]);
  const [publicKey, setPublicKey] = useState()
  const [candyM, setCandyM] = useState()
  const value = {
    scroll,
    setScroll,
    timer,
    barMobile,
    setBarMobile,
    wallet_,
    setWallet_,
    setTimer,
    datas,
    setDatas,
    candyM, setCandyM,
    publicKey, setPublicKey
  };
  return <Hooks.Provider value={value}>{props.children}</Hooks.Provider>;
};

export default Index;
