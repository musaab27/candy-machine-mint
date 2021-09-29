import RarityTraits from "../RarityTraits.png";

export const Rarity = () => {
  return (
    // <div id="rarity" style={{backgroundColor:"#55acee"}} >
    //   <div style={{backgroundColor:"#55acee", height:"25px"}}></div>
    //   <h2 className="font-bold text-6xl" style={{ backgroundColor:"#55acee", fontFamily: "Montserrat, sans-serif", fontWeight: 900, textAlign:"center"}}>Rarity</h2>
    //   <img src={RarityTraits} alt="Rarity!" style={{ margin: "auto", width: "100%" }} />
    // </div>
    <div style={{position:"relative"}} id="rarity">
    <div style={{ backgroundColor: "#FFDE59", height: '40px' }}></div>
    <div style={{ backgroundColor: '#FFDE59', height: "100px" }}>
        <div style={{ backgroundColor: "#FFDE59", width: "260px", height: "100px", margin: "auto" }}>
            <h2 className=" font-bold text-6xl mb-8" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, textAlign: 'center', color: "white", backgroundColor: "#55ACEE", padding: "12px", border: "2px solid white" }}>Rarity </h2>
        </div>
    </div>
    <img src={RarityTraits} alt="Rarity!" style={{ margin: "auto", width: "100%" }} />
</div>
  );
};
