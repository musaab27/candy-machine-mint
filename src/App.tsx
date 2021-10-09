import "./App.css";
import "./styles.css";
import "./bootstrap.css";
import "./tailwind.css";
import { useMemo } from "react";
import { Main } from "./components/Main";
import { MainContainer } from "./components/MintContainer";

// import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";



// const treasury = new anchor.web3.PublicKey(
//   process.env.REACT_APP_TREASURY_ADDRESS!
// );

// const config = new anchor.web3.PublicKey(
//   process.env.REACT_APP_CANDY_MACHINE_CONFIG!
// );

// const candyMachineId = new anchor.web3.PublicKey(
//   process.env.REACT_APP_CANDY_MACHINE_ID!
// );

// const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
// const connection = new anchor.web3.Connection(rpcHost);

// const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

// const txTimeout = 30000; // milliseconds (confirm this works for your project)
const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [getPhantomWallet(), getSolflareWallet(), getSolletWallet()],
    []
  );

  return (
 
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletDialogProvider>
        {/* <Home
            candyMachineId={candyMachineId}
            config={config}
            connection={connection}
            startDate={startDateSeed}
            treasury={treasury}
            txTimeout={txTimeout}
          /> */}
         
            <Router>
            <Switch>
            <Route exact path ='/home'>
              <Main/>
              </Route>
            <Route exact path='/' >
            <MainContainer/>
            </Route>
            </Switch>
            </Router>
          </WalletDialogProvider>
      </WalletProvider>
    </ConnectionProvider>



  );
};

export default App;
