import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
   shortenAddress,
} from "./candy-machine";

const ConnectButton = styled(WalletDialogButton)``;

const CounterText = styled.span``; // add your styles here

const MintContainer = styled.div``; // add your styles here

const MintButton = styled(Button)``; // add your styles here

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Home = (props: HomeProps) => {
  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT
  const [itemsRemaining, setItemsRemaining] = useState(0);

  const [quantity, setQuantity] = useState(0);

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const [startDate, setStartDate] = useState(new Date(props.startDate));

  const wallet = useWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const onMint = async () => {
    for (var i = 0; i < quantity; i++) {
    try {
      setIsMinting(true);
      if (wallet.connected && candyMachine?.program && wallet.publicKey) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "processed",
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet?.publicKey) {
        const balance = await props.connection.getBalance(wallet?.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
    }
  }
  };

  const handleQuantityChange = (quantity: number) => {
    setQuantity(quantity);
  };

  useEffect(() => {
    (async () => {
      if (wallet?.publicKey) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(() => {
    (async () => {
      if (
        !wallet ||
        !wallet.publicKey ||
        !wallet.signAllTransactions ||
        !wallet.signTransaction
      ) {
        return;
      }

      const anchorWallet = {
        publicKey: wallet.publicKey,
        signAllTransactions: wallet.signAllTransactions,
        signTransaction: wallet.signTransaction,
      } as anchor.Wallet;

      const { candyMachine, goLiveDate, itemsRemaining } =
        await getCandyMachineState(
          anchorWallet,
          props.candyMachineId,
          props.connection
        );

        setItemsRemaining(itemsRemaining);
        
      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  }, [wallet, props.candyMachineId, props.connection]);

  return (
    <main>
      {wallet.connected && <h1 className="font-bold text-6xl mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "60px", textAlign: "center", color: "white", padding:"4px 0 0 0" }}>Remaining Shits: {itemsRemaining} / 6969</h1>}
      <MintContainer style={{display:"flex", justifyContent:"center", marginBottom:"10px"}}>
        {!wallet.connected ? (
          <ConnectButton color ="secondary" variant="outlined" className="connectbtn" style={{ color: "white", borderWidth:"5px", borderColor: "white", backgroundColor: "black", width: '250px', fontSize: "12px", fontFamily: "Bungee, sans-serif", fontWeight: 900}}><b>Connect Wallet</b></ConnectButton>
        ) : (
          <div>
          <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding:"0 0 10px 0"}}>
          <input type="number" style={{border:"2px solid #d3a2fa", fontWeight:"bold", fontSize:"16px", width: "180px", textAlign:"center", fontFamily:"Montserrat, sans-serif", color:"black", borderRadius:"4px"}} 
          min={1}
          max={5}
          placeholder="Quantity Desired"
          onChange={(e) =>
            handleQuantityChange(Number(e.target.value))
          }
          value={quantity > 0 ? String(quantity) : ""}
            /> 
            </div>
            <div>
          <MintButton  style={{color: '#FF66C4', borderWidth:"5px", borderColor: "#d3a2fa", backgroundColor: "#40647C", width: '180px', fontSize: "18px", fontWeight: 900}}
            disabled={isSoldOut || isMinting || !isActive || quantity < 1 || quantity > 5}
            onClick={onMint}
            variant="outlined"
            color ="secondary"
            className="connectbtn"
          >

            {isSoldOut ? (
              "SOLD OUT"
            ) : isActive ? (
              isMinting ? (
                <CircularProgress />
              ) : (
                "MINT"
              )
            ) : (
              <Countdown
                date={startDate}
                onMount={({ completed }) => completed && setIsActive(true)}
                onComplete={() => setIsActive(true)}
                renderer={renderCounter}
              />
            )}
          </MintButton>
          </div>
          </div>
        )}
      </MintContainer>

      <div style={{color: "white"}}>
      {/* {wallet.connected && (
        <p style={{marginBottom:"10px"}}>Address: {shortenAddress(wallet.publicKey?.toBase58() || "")}</p>
      )}

      {wallet.connected && (
        <p style={{marginBottom:"10px"}}>Balance: {(balance || 0).toLocaleString()} SOL</p>
      )} */}
           
      </div>
      {/* {wallet.connected && <p style={{fontSize:"18px", fontWeight: 700}}>Remaining Mints: {itemsRemaining}</p>} */}

      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </main>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CounterText>
      {days} : {hours} : {minutes} : {seconds} 
    </CounterText>
  );
};

export default Home;
