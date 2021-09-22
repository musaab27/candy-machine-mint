
import MagicSolanaShit from '../MagicSolanaShit.png';
import Top7 from '../Top7.jpg';
import Top4 from '../Top4.jpg';
import Top3 from '../Top3.png';
import Top1 from '../Top1.png';
import Top11 from '../Top7.jpg';
import Top2 from '../Top2.png';
import Top9 from '../Top9.png';
import Top8 from '../Top8.png';
import Top10 from '../Top10.png';
import Home from '../Home';

import * as anchor from "@project-serum/anchor";

// import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { Testimonials } from './Testimonials';


const Content = () => {

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

    <div id="header" className="intro" >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ width: "100%" }}>
          <div className="columnsTwo" style={{textAlign: "center"}}>
            <img src={MagicSolanaShit} alt="" style={{ marginTop: "0px", display: "block", marginLeft: "auto", marginRight: "auto" }} />
            <div className="text-6xl columnTwo" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontStyle: "italic", fontSize: "22px", color: "black" }}>6,969 <u>Unique</u> Shits!</div>
            <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, paddingTop: "10px", width: "70%", textAlign:"center", margin:"auto" }}>Magic Solana Shits are a collection of 6,969 unique generative NFT's existing on the Solana Blockchain. This project is the SHIT! </div>
            <div className="mint-container" style={{justifyContent: "center", display: "block", marginLeft: "auto", marginRight: "auto"}}>
              <h2  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "20px"}}>Click the button below to MINT!</h2>
              <h4 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "20px"}}>Release Date: <b>October 8th</b></h4>
              <h4 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "20px"}}>Current Cost: <b>2 SOL</b></h4>
            <div style={{ padding: "13px", justifyContent: "center" }}>
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
            <div className="flex items-center justify-center mt-4 mb-8 md:mb-4"></div>

          </div>

          <div className="columnsTwo">
            <div className="columnTwo" style={{ display: "flex" }}>

              <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                  <img src={Top7} alt="ShitOne" style={{ width: '200px', height: "200px" }} />
                </div>
              </div>
              <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                  <img src={Top4} alt="ShitOne" style={{ width: '200px', height: "200px" }} />
                </div>
              </div>
              <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                  <img src={Top3} alt="ShitOne" style={{ width: '200px', height: "200px" }} />
                </div>
              </div>
            </div>

            <div className="columnTwo" style={{ display: "flex" }}>

              <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                  <img src={Top1} alt="ShitOne" style={{ width: '200px', height: "200px" }} />
                </div>
              </div>
              <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                  <img src={Top11} alt="ShitOne" style={{ width: '200px', height: "200px" }} />
                </div>
              </div>
              <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                  <img src={Top2} alt="ShitOne" style={{ width: '200px', height: "200px" }} />
                </div>
              </div>
            </div>

            <div className="columnTwo" style={{ display: "flex" }}>

              <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                  <img src={Top9} alt="ShitOne" style={{ width: '200px', height: "200px" }} />
                </div>
              </div>
              <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                  <img src={Top8} alt="ShitOne" style={{ width: '200px', height: "200px" }} />
                </div>
              </div>
              <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                  <img src={Top10} alt="ShitOne" style={{ width: '200px', height: "200px" }} />
                </div>
              </div>
            </div>

          </div>



        </div>
        <h2 style={{fontFamily: "Montserrat, sans-serif", fontWeight: 900, color: "black", fontSize: "36px", textAlign: "center" }}><i>WELCOME TO THE SHIT-SHOW!</i></h2>
      </div>
      <Testimonials/>
      <div style={{backgroundColor: "#FFDE59", width: "260px", height: "100px", margin: "auto"}}>
         <h2 className=" font-bold text-6xl mb-8" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontSize: "28px", textAlign: 'center', color: "white", marginTop: "48px", backgroundColor: "#fc5c5c", padding: "12px" }}>Testimonials </h2> 
      </div>
    </div>

  )
}

export const Header = () => {

  return (
    <Content />
  );
};
