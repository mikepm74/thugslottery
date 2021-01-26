import { gql } from "@apollo/client";

export const addressTokenTranfers = (address) =>
  "https://api.bscscan.com/api?module=account&action=tokentx&address=" +
  address +
  "&startblock=0&endblock=999999999&sort=asc";

export const contestAddress = "0x93E8A4cd2c98B0667BF2AD9C46f7660F390dF348";
export const drugsContract = "0x339550404ca4d831d12b1b2e4768869997390010";
export const vaults = [
  "0xfae4a35305a1dced8303029ac05e51386f667ed8",
  "0xE7408598DB157Cd4A24Bc26B579910AF36a72fad",
  "0x40e39743dBcb30c7Fc4152F57F29Cd22D9fc7932",
  "0x8AE31751A226B0C5357a377E53B6DB12bDF5e64d",
];

export const BITQUERY_INFLOW = (address, tokenContract) => {
  let string = `{
  ethereum(network: bsc) {
    transfers(options: {offset: 0}, amount: {gt: 0}, receiver: {is: "0x93E8A4cd2c98B0667BF2AD9C46f7660F390dF348"}, currency: {is: "0x339550404ca4d831d12b1b2e4768869997390010"}, date: {till: "2021-01-29T00:01:00+00:00"}) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      address: sender {
        address
      }
      currency {
        address
        symbol
      }
      amount
      transaction {
        hash
      }
      external
    }
  }
}

`;
  return gql(string);
};
