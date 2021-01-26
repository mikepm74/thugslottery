import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

export default function RaffleForm({ ticketsNormalized }) {
  const [winningAddresses, setWinningAddresses] = useState([]);
  const [winner, setWinner] = useState("GOOD LUCK G!!!");
  const [totalTickets, setTotalTickets] = useState(0);
  const [ticketsArray, setTicketsArray] = useState([]);
  const [entries, setEntries] = useState(false);

  // a little more random
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  // load tickets
  useEffect(() => {
    const list = [];
    const setList = () => {
      Object.keys(ticketsNormalized).map((address) => {
        const amount = ticketsNormalized[address];
        for (let i = 1; i <= amount; i++) {
          list.push(address);
        }
      });
    };
    setList();
    shuffle(list);
    setTicketsArray(list);
    setTotalTickets(list.length);
  }, [ticketsNormalized]);

  const handleSubmit = () => {
    setTotalTickets(ticketsArray.length);
    const rand = Math.floor(Math.random() * Math.floor(totalTickets));
    console.log(rand);
    // set winner and substract 1 ticket
    const winningAddress = ticketsArray[rand];
    setWinner(winningAddress);
    setWinningAddresses([...winningAddresses, winningAddress]);
    ticketsArray.splice(rand, 1);
  };
  const handleEntries = () => {
    setEntries(!entries);
  };

  return (
    <center>
      <br /> <br />
      <table
        width="420px"
        style={{
          backgroundColor: "rgba(255,255,255,0.7)",
          border: "1px solid black",
        }}
      >
        <tbody>
          <tr>
            <td align="center">
              <h1>{winner}</h1>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        {winningAddresses.length > 0 ? "DRAW WINNER" : "START "}
      </Button>
      <br />
      <div>
        <br />
        <table
          width="480x"
          style={{
            backgroundColor: "rgba(255,255,255,0.7)",
            border: "1px solid black",
          }}
        >
          <thead>
            <tr>
              <td align="center">WINNERS</td>
            </tr>
          </thead>
          <tbody>
            {Object.values(winningAddresses).map((address, i) => {
              return (
                <tr key={address + i}>
                  <td align="center">
                    {i + 1} {address}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br /> <br />
        <Button variant="contained" color="primary" onClick={handleEntries}>
          SHOW ENTRIES
        </Button>
        <br />
        <br />
        {entries ? (
          <table
            width="480x"
            style={{
              backgroundColor: "rgba(255,255,255,0.7)",
              border: "1px solid black",
            }}
          >
            <thead>
              <tr align="left">
                <td align="left">Address</td>
                <td align="right">Tickets</td>
              </tr>
            </thead>
            <tbody>
              {Object.keys(ticketsNormalized).map((address, i) => {
                return (
                  <tr align="right" key={address + i}>
                    <td align="center">{address}</td>
                    <td>{ticketsNormalized[address]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : null}
      </div>
    </center>
  );
}
