
import MagicSolanaShit from '../MagicSolanaShit.png';
// import Top7 from '../Top7.jpg';
// import Top4 from '../Top4.jpg';
// import Top3 from '../Top3.png';
// import Top1 from '../Top1.png';
// import Top11 from '../Top11.jpg';
// import Top2 from '../Top2.png';
// import Top9 from '../Top9.png';
// import Top8 from '../Top8.png';
// import Top10 from '../Top10.png';
import Home from '../Home';
import ShitBlock from "../ShitBlock.png";

import * as anchor from "@project-serum/anchor";

// import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
// import { Testimonials } from './Testimonials';


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

    <div id="header" className="intro">
      <div className="container" style={{ width: "100%" }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ width: "100%" }}>
          <div className="columnsTwo" style={{ textAlign: "center" }}>
            <img id="main-img" src={MagicSolanaShit} alt="" style={{ marginTop: "0px", display: "block", marginLeft: "auto", marginRight: "auto" }} />
            <div className="text-6xl columnTwo" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontStyle: "italic", fontSize: "22px", color: "black" }}>6969 <u>Unique</u> Shits!</div>
            <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, paddingTop: "10px", width: "70%", textAlign: "center", margin: "auto", color:"black" }}>Magic Solana Shits are a collection of 6969 unique generative NFT's existing on the Solana Blockchain. This project is the SHIT! </div>
            <div style={{ justifyContent: "center", display: "block", marginLeft: "auto", marginRight: "auto" }}>
              <h4 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "20px", color: "Black" }}>Release Date: <b>October 8th, 8PM EST</b></h4>
              <h4 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "20px", color: "Black" }}>Current Cost: <b>2 SOL</b></h4>
              <div style={{ padding: "13px", justifyContent: "center", height:"50px" }}>
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


          <div className="columnTwo rowHeader" style={{ display: "flex", padding: "5px 0 0 0", flexWrap: "wrap", maxWidth: "100%", width: "100%" }}>
              <img src={ShitBlock} alt="ShitBlock" style={{width:"100%"}}/>
            {/* <div className="col-md-4 col-6" style={{ maxWidth: '100%', position: 'relative', margin: 0, flex: "0 0 auto" }}>
              <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%', borderRadius: "45px", overflow: 'hidden', }}>
                <img src={Top7} alt="ShitOne" style={{ height: "", padding: "7px", maxWidth: "100%" }} />
              </div>
            </div>
            <div className="col-md-4 col-6" style={{ maxWidth: '100%', position: 'relative', margin: 0, flex: "0 0 auto" }}>
              <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%', borderRadius: "45px", overflow: 'hidden', }}>
                <img src={Top4} alt="ShitOne" style={{ height: "auto", padding: "7px", maxWidth: "100%" }} />
              </div>
            </div>
            <div className="col-md-4 col-6" style={{ maxWidth: '100%', position: 'relative', margin: 0, flex: "0 0 auto" }}>
              <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%', borderRadius: "45px", overflow: 'hidden', }}>
                <img src={Top3} alt="ShitOne" style={{ height: "auto", padding: "7px", maxWidth: "100%" }} />
              </div>
            </div>




            <div className="col-md-4 col-6" style={{ maxWidth: '100%', position: 'relative', margin: 0, flex: "0 0 auto", }}>
              <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%', borderRadius: "45px", overflow: 'hidden', }}>
                <img src={Top1} alt="ShitOne" style={{ height: "auto", padding: "7px", maxWidth: "100%" }} />
              </div>
            </div>
            <div className="col-md-4 col-6" style={{ maxWidth: '100%', position: 'relative', margin: 0, flex: "0 0 auto" }}>
              <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%', borderRadius: "45px", overflow: 'hidden', }}>
                <img src={Top11} alt="ShitOne" style={{ height: "auto", padding: "7px", maxWidth: "100%" }} />
              </div>
            </div>
            <div className="col-md-4 col-6" style={{ maxWidth: '100%', position: 'relative', margin: 0, flex: "0 0 auto" }}>
              <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%', borderRadius: "45px", overflow: 'hidden', }}>
                <img src={Top2} alt="ShitOne" style={{ height: "auto", padding: "7px", maxWidth: "100%" }} />
              </div>
            </div>




            <div className="col-md-4 col-6" style={{ maxWidth: '100%', position: 'relative', margin: 0, flex: "0 0 auto" }}>
              <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%', borderRadius: "45px", overflow: 'hidden', }}>
                <img src={Top9} alt="ShitOne" style={{ height: "auto", padding: "7px", maxWidth: "100%" }} />
              </div>
            </div>
            <div className="col-md-4 col-6" style={{ maxWidth: '100%', position: 'relative', margin: 0, flex: "0 0 auto" }}>
              <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%', borderRadius: "45px", overflow: 'hidden', }}>
                <img src={Top8} alt="ShitOne" style={{ height: "auto", padding: "7px", maxWidth: "100%" }} />
              </div>
            </div>
            <div className="col-md-4 col-6" style={{ maxWidth: '100%', position: 'relative', margin: 0, flex: "0 0 auto" }}>
              <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%', borderRadius: "45px", overflow: 'hidden', }}>
                <img src={Top10} alt="ShitOne" style={{ height: "auto", padding: "7px", maxWidth: "100%" }} />
              </div>
            </div> */}

          </div>





        </div>
        <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, color: "black", fontSize: "36px", textAlign: "center", paddingBottom: "30px", paddingTop: "30px", WebkitTextStroke: "2px", WebkitTextFillColor: "white" }}><i>WELCOME TO THE SHIT-SHOW!</i></h2>
      </div>
      {/* <div style={{ backgroundColor: "#FFDE59", width: "260px", height: "100px", margin: "auto", }}> </div> */}
      {/* <div style={{backgroundColor: "#FFDE59", width: "260px", height: "100px", margin: "auto", }}>
         <h2 className=" font-bold text-6xl mb-8" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontSize: "28px", textAlign: 'center', color: "white", marginTop: "48px", backgroundColor: "#55ACEE", padding: "12px", border: "2px solid white"}}>Roadmap </h2> 
      </div> */}
    </div>

  )
}

export const Header = () => {

  return (
    <Content />
  );
};
