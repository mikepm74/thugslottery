import "./App.css";
import RaffleForm from "./components/RaffleForm";
import { useQuery } from "@apollo/client";
import { BITQUERY_INFLOW } from "./utils/links";
import { vaults, drugsContract, contestAddress } from "./utils/links";

function App() {
  const ticketsNormalized = {};
  const { loading, error, data } = useQuery(
    BITQUERY_INFLOW(contestAddress, drugsContract)
  );

  if (loading) return "Loading tx list...";
  if (error) return `Error! ${error.message}`;

  const isVault = (address) => !vaults.includes(address);
  // format winner entries for beefy pickWinner
  data.ethereum.transfers
    .filter((tx) => {
      console.log(isVault(tx.address.address));
      return isVault(tx.address.address);
    })
    .map(
      (tx) => (ticketsNormalized[tx.address.address] = Math.floor(tx.amount))
    );

  return (
    <div className="App">
      {!loading ? (
        <RaffleForm ticketsNormalized={ticketsNormalized}></RaffleForm>
      ) : null}
    </div>
  );
}

export default App;
