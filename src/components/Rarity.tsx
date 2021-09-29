import RarityTraits from "../RarityTraits.png";

export const Rarity = () => {
  return (
    <div id="rarity" style={{backgroundColor:"#55acee"}} >
      <div style={{backgroundColor:"#55acee", height:"25px"}}></div>
      <h2 className="font-bold text-6xl" style={{ backgroundColor:"#55acee", fontFamily: "Montserrat, sans-serif", fontWeight: 900, textAlign:"center"}}>Rarity</h2>
      <img src={RarityTraits} alt="Rarity!" style={{ margin: "auto", width: "100%" }} />
    </div>
  );
};
