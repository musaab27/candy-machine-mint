
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
// import ShitBlock from "../ShitBlock.png";
// import { Link } from 'react-router-dom';
import AnimatedShit from "../animatedShit.gif";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { useState } from "react";
import { useHistory } from "react-router-dom";




const Content = () => {

  // const [disabled, setDisabled] = useState(true);
  const history = useHistory();
  const [open, setOpen] = useState(false);
  // const [password, setPassword] = useState<string>("");
  // const CorrectPassword = "wagmi";
  // const handleOpen = () => setOpen(true);

  // const handleClose = () => {
  //   setOpen(false);
  //   setError(false);
  //   setErrorMessage("");
  //   setPassword("");
  // }

  // const handleChange = (event: any) => {
  //   setPassword(event.target.value);
  // }

  // const [error, setError] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");
  // const handleNext = () => {

  //   if (password !== CorrectPassword) {

  //     setError(true);
  //     setErrorMessage("Oh Poop! Please Try Again..");
  //   }
  // }

  const handleSubmit = () => {
  
    
      history.push("/");
  }

  

  // const handleClick = () => {}

  return (

    <div id="header" className="intro">
      <div className="container" style={{ width: "100%" }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ width: "100%" }}>
          <div className="columnsTwo" style={{ textAlign: "center" }}>
            <img id="main-img" className="MagicSolImg" src={MagicSolanaShit} alt="" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
            <div className="text-6xl columnTwo" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontStyle: "italic", fontSize: "26px", color: "black", textShadow: "2px 1px 0 #fff" }}><strong>6969</strong> <u>Unique</u> Shits!</div>
            <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, paddingTop: "10px", width: "70%", textAlign: "center", margin: "auto", color: "black" }}>Magic Solana Shits are a collection of 6969 unique generative NFT's existing on the Solana Blockchain. This project is the SHIT! </div>
            <div style={{ justifyContent: "center", display: "block", marginLeft: "auto", marginRight: "auto" }}>
              <h4 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "20px", color: "Black", textShadow: "2px 1px 0 #fff" }}>Release Date: <b>October 8th, 8PM EST</b></h4>
              <h4 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "20px", color: "Black", textShadow: "2px 1px 0 #fff" }}>Current Cost: <b>2 SOL</b></h4>
              <div style={{ padding: "13px", justifyContent: "center", height: "50px" }}>
                {/* <Link to={disabled === true ? '/#' : '/mint'} target="_blank" rel="noopener noreferrer"> */}
                <Button style={{ backgroundColor: "black", border: "3px solid white" }} variant="outlined" onClick={handleSubmit}>
                  Take Me to Mint!
                </Button >
                {/* <Dialog open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="Password for Minting"
                >
                  <DialogTitle style={{ fontFamily: "Montserrat, sans-serif" }}>Enter Password to Mint!
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText style={{ fontSize: "16px", color: "black" }}>
                      Thank you to all our supporters, especially the OGs.
                      We have set a special password to take you to the minting site. Please enter it to continue.
                    </DialogContentText>
                    <TextField style={{ fontSize: "16px" }}
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Password:"
                      type="email"
                      fullWidth
                      variant="standard"
                      value={password}
                      onChange={handleChange}
                      inputProps={{ style: { fontSize: 16 } }}
                      InputLabelProps={{ style: { fontSize: 16 } }}
                      error={error}
                      helperText={errorMessage}

                    />
                  </DialogContent>
                  <DialogActions>
                    <Button  variant="contained" color="primary" onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
                  </DialogActions>
                </Dialog> */}
                {/* </Link> */}
              </div>
            </div>
            <div className="flex items-center justify-center mt-4 mb-8 md:mb-4">
            </div>

          </div>


          <div className="columnTwo rowHeader" style={{ display: "flex", padding: "5px 0 0 0", flexWrap: "wrap", maxWidth: "100%", width: "100%" }}>
            <img src={AnimatedShit} alt="ShitBlock" style={{ width: "100%" }} />
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
        <h2 className=" font-bold text-6xl" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, color: "white", fontSize: "36px", textAlign: "center", paddingBottom: "20px", paddingTop: "30px", textShadow: "2px 1px 0 #000" }}><i>WELCOME TO THE SHIT-SHOW!</i></h2>
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
