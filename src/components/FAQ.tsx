
import React from 'react';
import { Accordion } from '@material-ui/core';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',


  },
  styles: {
    background: "#18E4B4",
    BorderColor: "white",
    borderWidth: "medium"
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    fontWeight: 900,
    fontStyle: "normal",

  },
}));

;

export const Faq = () => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (

    <div id="faq">
      <div className="container">
        <h2 className="font-bold text-6xl mb-8" style={{ fontWeight: 900, textAlign: "center", color: "black" }}>FAQ</h2>

        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.styles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>What are Magic Solana Shits?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <li>Magic Solana Shits is an NFT project of 6,969 shits with unique, generative assets living on the Solana Blockchain. With a community full of shit heads, our limitations are endless.</li>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className={classes.styles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>What is an NFT?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <li>An NFT is a non-fungible token that represents a unit of data stored on a digital ledger, called a blockchain,
                that certifies a digital asset to be unique and therefore is not interchangeable.</li>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={classes.styles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>How do I get started buying NFTs?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ color: "white" }}>
              <li>If you want to be ready to mint, you will need SOL (Solana).</li>
              <li>
                Get the <a style={{ color: 'purple' }} href="https://phantom.app/"><b>Phantom Wallet</b></a> Extension for Google Chrome, which is the recommended wallet for SOL.
              </li>
              <li>
                You will have to send SOL to your new Wallet.
                You can exchange SOL using the Voyager APP, CoinBase, Crypto.com, as well as a variety of other options.
              </li>
              <li>
                Click the Connect Button on the top left of our website to connect your wallet. After connecting you will be able to buy!
              </li>
              <li>
                If you're having trouble, please reach out to us at our <a style={{ color: 'purple' }} href="https://discord.gg/z3e5HvxZ7V" target="_blank" rel="noreferrer"><b>Discord!</b></a>
              </li>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className={classes.styles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.heading}>Who would want to buy a pile of shit?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <li>Who wouldn’t?! When you combine a goofy meme with the potential for people to profit, you create a viral project filled with a community of shitheads. Anyone who can appreciate a rock, can appreciate a rare pile of shit. It’s not supposed to be serious, it’s supposed to be fun.</li>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className={classes.styles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography className={classes.heading}>What utility does a piece of shit have?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <li>The beginning stages of the SHITS will stand as simple collectibles that can be used as PFP’s. Shit owners will be eligible to participate in giveaways, airdrops, community decisions, and more. As we move into the later stages of the project, the Shits will be able to be used as avatars in an array of virtual games. The main game being TOILET FLUSH, a play to earn game where Shits can stake .01-.1 solana to enter a race where they race down the sewer system, winner take all.</li>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className={classes.styles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <Typography className={classes.heading}>What is the Official Shits Twitter?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <li>@Magicsolanashit</li>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className={classes.styles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7bh-content"
            id="panel7bh-header"
          >
            <Typography className={classes.heading}>When will the Official drop be?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <li>October 8th!</li>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} className={classes.styles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8bh-content"
            id="panel8bh-header"
          >
            <Typography className={classes.heading}>What is the Official mint price? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <li>2 SOL.</li>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} className={classes.styles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel9bh-content"
            id="panel9bh-header"
          >
            <Typography className={classes.heading}>Will there be any Pre-Sale? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <li>Yes, Og Shit Stain status members will have a chance to start minting 5 minutes early for a maximum of 1 shit. There will be 1,000 slots open for OGs. Then, the remaining 5,969 shits will be randomly distributed through mint. Additional 1/1 SHIT NFTS will be created for community giveaways, those will not be included in the collection. 
</li>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')} className={classes.styles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel10bh-content"
            id="panel10bh-header"
          >
            <Typography className={classes.heading}>Is there a limit to how many I can purchase? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <li>Three Shits per transaction.</li>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')} className={classes.styles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel11bh-content"
            id="panel11bh-header"
          >
            <Typography className={classes.heading}>How to determine rarity? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <li>Each trait has a % rarity. Some Shits will have no traits, some will have many, some will have legendary traits. Each Shit is unique and memeworthy, some might be faster than others. It will be up to the secondary market to determine the exact value of such rarity.</li>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')} className={classes.styles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel12bh-content"
            id="panel12bh-header"
          >
            <Typography className={classes.heading}>Why Solana?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <li>With the gas price being ridiculously high on ETH, we have decided to give NFT collectors the speed and fees they deserve by utilizing Solana’s lightning fast transactions with low transaction costs.</li>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')} className={classes.styles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel13bh-content"
            id="panel13bh-header"
          >
            <Typography className={classes.heading}>Where is the digital artwork stored?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <li>Magic Solana Shits will be stored on Arweave, a decentralized data storage that backs data with sustainable and perpetual endowments, allowing users and developers to truly store data forever.</li>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className={classes.styles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.heading}>Will there be resale royalties?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <li>Yes, 5% of royalties will be applied to all resales. All royalties will be used for future game development of the Toilet Bowl, a PVP racing game to earn SOL. </li>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')} className={classes.styles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel15bh-content"
            id="panel15bh-header"
          >
            <Typography className={classes.heading}>Will you be giving a portion of proceeds to charity?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <li>Yes! We are going to be getting involved with charity after launch so stay tuned for more announcements!</li>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel16'} onChange={handleChange('panel16')} className={classes.styles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel16bh-content"
            id="panel16bh-header"
          >
            <Typography className={classes.heading}>Where can I trade Magic Solana Shits?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <li>After our release, we will attempt to list on Solanart.io, Digital Eyes, and get verified on SolSea.</li>
            </Typography>
          </AccordionDetails>
        </Accordion>

      </div>
    </div>
  );
};




