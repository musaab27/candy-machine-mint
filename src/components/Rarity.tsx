import RarityTraits from "../RarityTraits.png";

export const Rarity = () => {
  return (
    // <div id="rarity" style={{backgroundColor:"#55acee"}} >
    //   <div style={{backgroundColor:"#55acee", height:"25px"}}></div>
    //   <h2 className="font-bold text-6xl" style={{ backgroundColor:"#55acee", fontFamily: "Montserrat, sans-serif", fontWeight: 900, textAlign:"center"}}>Rarity</h2>
    //   <img src={RarityTraits} alt="Rarity!" style={{ margin: "auto", width: "100%" }} />
    // </div>
    <div style={{backgroundColor:"#55ACEE"}}>
    <div style={{position:"relative", backgroundColor:"#55ACEE"}} id="rarity">
    <div style={{ backgroundColor: "#FFDE59", height: '55px' }}></div>
    <div style={{ backgroundColor: '#FFDE59', height: "110px" }}>
        <div style={{ backgroundColor: "#FFDE59", width: "250px", height: "100px", margin: "auto" }}>
            <h2 className=" font-bold text-6xl mb-8" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, textAlign: 'center', color: "white", backgroundColor: "#55ACEE", padding: "10px", border: "2px solid white" }}>Rarity </h2>
        </div>
    </div>
    <img src={RarityTraits} className="container" alt="Rarity!" style={{ margin: "auto", width: "100%" }} />
</div>
</div>
  );
};
