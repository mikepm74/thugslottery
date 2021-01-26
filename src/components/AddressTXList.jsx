import React, { useState, useEffect } from "react";

export default function AddressTXList({ ticketArray }) {
  return (
    <div>
      <table
        style={{
          backgroundColor: "rgba(255,255,255,0.7)",
          border: "1px solid black",
        }}
      >
        <thead>
          <tr>
            <td>Address</td>
            <td>Tickets</td>
          </tr>
        </thead>
        <tbody>
          {Object.keys(ticketArray).map((key, i) => {
            return (
              <tr key={key + i}>
                <td>{key}</td>
                <td>{ticketArray[key]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
