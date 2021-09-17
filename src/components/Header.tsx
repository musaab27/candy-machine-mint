

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
            <img src="MagicSolanaShit.JPG" alt="" style={{ marginTop: "0px", display: "block", marginLeft: "auto", marginRight: "auto" }} />
            <div className="text-6xl columnTwo" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontStyle: "italic", fontSize: "22px", color: "black" }}>6,969 <u>Unique</u> Shits!</div>
            <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, paddingTop: "10px", width: "70%", textAlign:"center", margin:"auto" }}>Magic Solana Shits are a collection of 6,969 unique generative NFT's existing on the Solana Blockchain. This project is the SHIT! </div>
            <div className="mint-container" style={{justifyContent: "center", display: "block", marginLeft: "auto", marginRight: "auto"}}>
              <h2  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "24px"}}>Click the button below to MINT!</h2>
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
                  <img src="ShitsLanding/1.png" alt="ShitOne" style={{ width: '200px', height: "200px" }} />
                </div>
              </div>
              <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                  <img src="ShitsLanding/2.png" alt="ShitOne" style={{ width: '200px', height: "200px" }} />
                </div>
              </div>
              <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                  <img src="ShitsLanding/3.png" alt="ShitOne" style={{ width: '200px', height: "200px" }} />
                </div>
              </div>
            </div>

            <div className="columnTwo" style={{ display: "flex" }}>

              <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                  <img src="ShitsLanding/5.png" alt="ShitOne" style={{ width: '200px', height: "200px" }} />
                </div>
              </div>
              <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                  <img src="ShitsLanding/6.png" alt="ShitOne" style={{ width: '200px', height: "200px" }} />
                </div>
              </div>
              <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                  <img src="ShitsLanding/7.png" alt="ShitOne" style={{ width: '200px', height: "200px" }} />
                </div>
              </div>
            </div>

            <div className="columnTwo" style={{ display: "flex" }}>

              <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                  <img src="ShitsLanding/8.png" alt="ShitOne" style={{ width: '200px', height: "200px" }} />
                </div>
              </div>
              <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                  <img src="ShitsLanding/9.png" alt="ShitOne" style={{ width: '200px', height: "200px" }} />
                </div>
              </div>
              <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: 0 }}>
                <div style={{ boxSizing: 'border-box', display: 'block', maxWidth: '100%' }}>
                  <img src="ShitsLanding/10.png" alt="ShitOne" style={{ width: '200px', height: "200px" }} />
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

// <div className="intro text-black">
//     <div className="container">
//       <div className="hero md:pb-16">
//         <div >
//           <div>
//             <div className="mx-auto text-center">
//               <a href="#" className="inline-block align-middle">
//                 <img src="Shits/BlueShit.png" alt="" className="w-64 h-64 border-2 border-white rounded-xl mb-8" />
//               </a>
//             </div>
//             <div className="text-6xl font-bold text-center leading-12" style={{color: "black", fontFamily: "Montserrat, sans-serif", fontWeight: 900}}>
//               MAGIC SOLANA SHITS
//             </div>
//             {/* <div className="text-4xl font-bold text-center leading-12 mt-4" style={{color: "white"}}>
//               Shits that last forever
//             </div> */}
//             <div className="text-xl md:text-3xl py-4 md:py-8 px-8 md:px-12 lg:px-24" style={{ lineHeight: "1.75em", color: "black"}}>
//               Magic Solana Shits are 10,000 pieces of shit, programmatically generated through a smart contract on the Solana Blockchain. Magic Shits are comprised of numerous unique traits, allowing for a multitude of unique options. By owning a Magic Shit, you gain access to the shithead community! 
//             </div>

//           </div>

//         </div>
//       </div>
//     </div>
//     <div className="row">
//     </div>
//   </div>
//style={{position: "absolute", boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: "block", width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%'}}
// </header>