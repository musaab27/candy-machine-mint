import Divider from '@material-ui/core/Divider';
import Team1 from '../Team1.png';
import Team2 from '../Team2.png';
import Team3 from '../Team3.png';
import Team5 from '../Team5.png';
import Team6 from '../Team6.png';
import Team7 from '../Team7.png';
import Team8 from '../Team8.png';
import Team10 from '../Team10.png';


export const Team = () => {
    return (
        <div id="team">
            <div className="container">
                <div style={{height:"auto", width:"300px", marginLeft:"auto", marginRight:"auto", marginTop:"30px", border:"2px solid white",}}>
                <h2 className="font-bold text-6xl mb-8 team-card" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, margin:"10px", height:"80px" }}>Meet the Team</h2>
                </div>
                <div className="team-grid" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '24px', marginTop:"30px"}}>
                    <div className="team-card">
                    <a style={{fontSize:"24px", textDecorationColor: "white", color:"white"}} href='https://twitter.com/lilApeCapital'>LilApeCapital</a>
                        <img src={Team1} alt="" />
                        <h5 style={{marginTop:"6px"}}>Chief Executive Shithead</h5>
                    </div>
                    <div className="team-card" >
                        <h4 className="">KingShit</h4>
                        <img src={Team2} alt="" />
                        <h5 style={{marginTop:"6px"}}>Shit Operation Officer</h5>
                    </div>
                    <div className="team-card">
                    <a style={{fontSize:"24px", textDecorationColor: "white", color:"white"}} href='https://twitter.com/painXBT'>painXBT</a>
                        <img src={Team3} alt="" />
                        <h5 style={{marginTop:"6px"}}>Shit Marketing Officer</h5>
                    </div>
                    <div className="team-card">
                        <h4 className="">Csuitorart</h4>
                        <img src={Team8} alt="" />
                        <h5 style={{marginTop:"6px"}}>Shit Artist</h5>
                    </div>
                    <div className="team-card">
                    <a style={{fontSize:"24px", textDecorationColor: "white", color:"white"}} href='https://twitter.com/Floatingheadzz'>Floatingheadzz</a>
                        <img src={Team6} alt="" />
                        <h5 style={{marginTop:"6px"}}>Shit Artist</h5>
                    </div>
                    <div className="team-card">
                        <h4 className="">Vozceez</h4>
                        <img src={Team5} alt="" />
                        <h5 style={{marginTop:"6px"}}>Shit Dev</h5>
                    </div>
                    <div className="team-card">
                        <h4 className="">Cryptoque</h4>
                        <img src={Team10} alt="" />
                        <h5 style={{marginTop:"6px"}}>Shit Dev</h5>
                    </div>
                    <div className="team-card">
                    <a style={{fontSize:"24px", textDecorationColor: "white", color:"white"}} href='https://twitter.com/BAgainstMe'>MBashirCrook</a>
                        <img src={Team7} alt="" />
                        <h5 style={{marginTop:"6px"}}>Shit Dev</h5>
                    </div>
                </div>
                <Divider style={{ borderWidth: 2 }} />
                <div style={{textAlign:"center", color: "white", fontSize: "18px"}}>© Magic Solana Shits</div>
            </div>
        </div>


    );
}



