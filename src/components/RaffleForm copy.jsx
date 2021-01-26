import React, { useState } from "react";
import { drugsContract, contestAddress } from "../utils/links";
import AddressTXList from "./AddressTXList";
import Button from "@material-ui/core/Button";

export default function RaffleForm() {
  const [address, setAddress] = useState(contestAddress);
  const [ticketRatio, setTickerRatio] = useState(10);
  const [tokenContract, setTokenContract] = useState(drugsContract);
  const [numOfWinners, setNumOfWinners] = useState(4);
  const [hasInfo, setHasInfo] = useState(false);

  const addressHandler = (event) => setAddress(event.target.value);
  const ticketRatioHandler = (event) => setTickerRatio(event.target.value);
  const tokenContractHandler = (event) => setTokenContract(event.target.value);
  const winnersHandler = (event) => setNumOfWinners(event.target.value);

  const handleSubmit = () => {
    if (hasInfo) {
      console.log("reset info");
      setAddress("");
      setTickerRatio(1);
      setTokenContract("");
      setNumOfWinners(10);
      console.log(address, ticketRatio, tokenContract, numOfWinners);
    }
    console.log(address, ticketRatio, tokenContract, numOfWinners);
      setHasInfo(!hasInfo);
  };

  return (
    <div>
      <h1>50/50 Raffle</h1>
      {hasInfo ? (
        <div>
          {" "}
          <p>address: {address} </p>
          <p>contract: {tokenContract} </p>
          <p>ratio: {ticketRatio}</p>
          <p>winners: {numOfWinners}</p>
        </div>
      ) : null}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        {hasInfo ? "new raffle" : "submit"}
      </Button>
      {hasInfo ? null : (
        <form>
          <p align="left">
            Enter contest address:
            <input type="text" onChange={addressHandler} />
          </p>
          <p align="left">
            Enter ticket ratio (tokens/ticket):
            <input type="text" onChange={ticketRatioHandler} />
          </p>
          <p align="left">
            Enter token contract:
            <input type="text" onChange={tokenContractHandler} />
          </p>
          <p align="left">
            Enter number of winners:
            <input type="text" onChange={winnersHandler} />
          </p>
        </form>
      )}
      <br />
      {hasInfo ? (
        <AddressTXList
          key={1}
          address={address}
          tokenContract={tokenContract}
          ticketRatio={ticketRatio}
          numOfWinners={numOfWinners}
        />
      ) : null}
    </div>
  );
}
