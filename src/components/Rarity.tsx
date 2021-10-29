import RarityTraits from "../RarityTraits.png";
import GiveAway from "../GiveAway.png";

export const Rarity = () => {
  return (
    // <div id="rarity" style={{backgroundColor:"#55acee"}} >
    //   <div style={{backgroundColor:"#55acee", height:"25px"}}></div>
    //   <h2 className="font-bold text-6xl" style={{ backgroundColor:"#55acee", fontFamily: "Montserrat, sans-serif", fontWeight: 900, textAlign:"center"}}>Rarity</h2>
    //   <img src={RarityTraits} alt="Rarity!" style={{ margin: "auto", width: "100%" }} />
    // </div>
    <div style={{backgroundColor:"#55ACEE"}}>
    <div style={{position:"relative", backgroundColor:"#55ACEE"}} >
    <div   className="alternatingShit"></div>
    {/* <div style={{backgroundColor:"#FFDE59"}}>
    <img src={GiveAway} alt="Rarity!" style={{ margin: "auto", width: "80%", backgroundColor:"#FFDE59"}}/>
    </div> */}
    <div id="rarity"></div>
    <div  style={{ backgroundColor: "#FFDE59", height:"55px"  }}></div> 
    {/* property for above class if I end up moving the rotating shit ...height: '55px' */}
    <div  style={{ backgroundColor: '#FFDE59', height: "110px" }}>
        <div style={{ backgroundColor: "#FFDE59", width: "250px", height: "100px", margin: "auto" }}>
            <h2  className=" font-bold text-6xl mb-8" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, textAlign: 'center', color: "white", backgroundColor: "#55ACEE", padding: "10px", border: "2px solid white", textShadow: "2px 1px 0 #000"  }}>Rarity </h2>
        </div>
    </div>
    <img src={RarityTraits} className="container" alt="Rarity!" style={{ margin: "auto", width: "100%" }} />
</div>
</div>
  );
};
