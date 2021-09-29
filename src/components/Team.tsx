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
                <h2 className="font-bold text-6xl mb-8 team-card" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, marginBottom: "50px", textDecorationLine:"underline", textDecorationThickness:"2px"}}>Meet the Team!</h2>
                <div className="team-grid" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '24px'}}>
                    <div className="team-card">
                        <h4 className="">@LilApeCapital</h4>
                        <img src={Team1} alt="" />
                        <h5 style={{marginTop:"6px"}}>Chief Executive Shithead</h5>
                    </div>
                    <div className="team-card" >
                        <h4 className="">KingShit</h4>
                        <img src={Team2} alt="" />
                        <h5 style={{marginTop:"6px"}}>Shit Operation Officer</h5>
                    </div>
                    <div className="team-card">
                        <h4 className="">@painXBT</h4>
                        <img src={Team3} alt="" />
                        <h5 style={{marginTop:"6px"}}>Shit Marketing Officer</h5>
                    </div>
                    <div className="team-card">
                        <h4 className="">Csuitorart</h4>
                        <img src={Team8} alt="" />
                        <h5 style={{marginTop:"6px"}}>Shit Artist</h5>
                    </div>
                    <div className="team-card">
                        <h4 className="">@Floatingheadzz</h4>
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
                        <h4 className="">MBashirCrook</h4>
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



