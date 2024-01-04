import { useWeb3Contract } from "react-moralis";
import { abi, contractAddresses } from "../constants";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

export default function LotteryEntrance() {
  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
  const chainId = parseInt(chainIdHex);
  const raffleAddress =
    chainId in contractAddresses ? contractAddresses[chainId][0] : null;
  const [entranceFee, setEntranceFee] = useState("0");

  // console.log(parseInt(chainIdHex)); // parse to get the actual number from the hex format

  // const { runContractFunction: enterRaffle } = useWeb3Contract({
  //   abi:abi,
  //   contractAddress: raffleAddress,// need to specify networkId
  //   functionName:"enterRaffle",
  //   params:{},
  //   msgValue:
  // });

  const { runContractFunction: getEntranceFee } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress, // need to specify networkId
    functionName: "getEntranceFee",
    params: {},
  });

  useEffect(() => {
    if (isWeb3Enabled) {
      // try to read the raffle entrance fee
      async function updateUI() {
        const entranceFeeFromCall = (await getEntranceFee()).toString();
        setEntranceFee(entranceFeeFromCall);
      }
      updateUI();
    }
  }, [isWeb3Enabled]);

  return (
    <div>
      Hi From Lottery Entrance!{" "}
      <div>
        Entrance Fee: {ethers.utils.formatUnits(entranceFee, "ether")} ETH
      </div>
    </div>
  );
}
