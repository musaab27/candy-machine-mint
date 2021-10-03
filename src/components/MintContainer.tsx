import SingleGif from "../SingleGif.gif";
import Home from "../Home";
import * as anchor from "@project-serum/anchor";

export const MainContainer = () => {
  const treasury = new anchor.web3.PublicKey(
    process.env.REACT_APP_TREASURY_ADDRESS!
  );

  const config = new anchor.web3.PublicKey(
    process.env.REACT_APP_CANDY_MACHINE_CONFIG!
  );

  const candyMachineId = new anchor.web3.PublicKey(
    process.env.REACT_APP_CANDY_MACHINE_ID!
  );

  // const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

  const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
  const connection = new anchor.web3.Connection(rpcHost);

  const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

  const txTimeout = 30000; // milliseconds (confirm this works for your project)
  

  return (
    <div id="root" style={{ background: "#55acee", height: "100vh", width: "100vw" }}>
      <div className="container">
        <h1 className="font-bold text-6xl mb-8" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "100px", textAlign: "center", color: "white" }}>MAGIC SOLANA SHITS</h1>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={SingleGif} style={{ width: "400px", height: "400px", display: "block", border: "20px solid white", marginBottom:"10px" }} alt="SingleGif" />
        </div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <h1 className="font-bold text-6xl" style={{padding:"10px", fontFamily: "Montserrat, sans-serif", fontSize: "40px", textAlign: "center", color: "white"}}>Connect Wallet to Mint!</h1>
        </div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <Home 
            candyMachineId={candyMachineId}
            config={config}
            connection={connection}
            startDate={startDateSeed}
            treasury={treasury}
            txTimeout={txTimeout}
          />
        </div>
      </div>
    </div>
  );
};
