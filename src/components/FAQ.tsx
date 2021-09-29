
import React from 'react';
import { Accordion } from '@material-ui/core';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RoyaltyDistribution from '../RoyaltyDistribution.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',


  },
  styles: {
    background: "#38B6FF",
    BorderColor: "white",
    borderWidth: "medium"
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    fontWeight: 700,
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
      <div style={{backgroundColor: "#38B6FF", width: "150px", height: "45px", margin: "auto", border: "2px solid white"}}>
        <h2 className="font-bold text-6xl mb-8" style={{ fontWeight: 900, textAlign: "center", color: "white" }}>FAQ</h2>
        </div>

        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.styles} style={{marginTop: "45px"}}>
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
              <li>The beginning stages of the SHITS will stand as simple collectibles that can be used as PFP’s. Shit owners will be eligible to participate in giveaways, airdrops, community decisions, and more. All secondary marketplace royalties will be reinvested back into the project and into holder's wallets! Random Minters will also receive blue chip Solana NFTs.</li>
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

        <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} className={classes.styles}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8bh-content"
            id="panel8bh-header"
          >
            <Typography className={classes.heading}>What is the Official mint price and release date? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <li>2 SOL. October 8th 8PM EST!</li>
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
              <li> All royalties will be reinvested back into the community.</li>
              <img src={RoyaltyDistribution} alt="royalties"/>
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

      </div>
    </div>
  );
};




