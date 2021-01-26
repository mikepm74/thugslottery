import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { BITQUERY_INFLOW } from "../utils/links";
import winners from "../utils/pickWinners";

export default function AddressTXList({
  address,
  ticketRatio,
  tokenContract,
  numOfWinners,
}) {
  const [totalTickets, setTotalTickets] = useState(0);
  let tt = 0;

  useEffect(() => {
    setTotalTickets(tt);
  }, [tt]);

  const { loading, error, data } = useQuery(
    BITQUERY_INFLOW(address, tokenContract)
  );
  if (loading) return "Loading tx list...";
  if (error) return `Error! ${error.message}`;

  // format winner entries for beefy pickWinner
  const ticketList = {};
  data.ethereum.transfers.map(
    (tx) => (ticketList[tx.address.address] = tx.amount / ticketRatio)
  );

  const winningAddressees = winners(
    ticketList,
    0x6b18ddd481a4cf8ae7dc87d440627f5aa0f97ed2279d518b65da576be96b21a3,
    numOfWinners
  );

  return (
    <div>
      <p>Total amount of tickets: {totalTickets}</p>
      <table>
        <thead>
          <tr>
            <td>winners</td>
          </tr>
        </thead>
        <tbody>
          {winningAddressees.map((winner, i) => {
            return (
              <tr key={winner + i}>
                <td>{winner}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      Entries:
      <table>
        <thead>
          <tr>
            <td>address</td>
            <td>amount</td>
            <td>tickets</td>
          </tr>
        </thead>
        <tbody>
          {data.ethereum.transfers.map((tx) => {
            const tickets = tx.amount / ticketRatio;
            tt += tickets;
            return (
              <tr key={tx.transaction.hash}>
                <td>{tx.address.address}</td>
                <td>{tx.amount}</td>
                <td>{tickets}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
