import Divider from '@material-ui/core/Divider';

export const Team = () => {
    return (
        <div id="team">
            <div className="container">
                <h2 className="font-bold text-6xl mb-8 team-card" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, marginBottom: "50px" }}>Meet the Team!</h2>
                <div className="team-grid" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '24px'}}>
                    <div className="team-card">
                        <h4 className="">LilApeCapital</h4>
                        <img src="ShitsLanding/1.PNG" alt="" />
                        <h5>Chief Executive Shithead</h5>
                    </div>
                    <div className="team-card" >
                        <h4 className="">KingShit</h4>
                        <img src="ShitsLanding/2.PNG" alt="" />
                        <h5>Shit Operation Officer</h5>
                    </div>
                    <div className="team-card">
                        <h4 className="">painXBT</h4>
                        <img src="ShitsLanding/3.PNG" alt="" />
                        <h5>Shit Marketing Officer</h5>
                    </div>
                    <div className="team-card">
                        <h4 className="">Csuitorart</h4>
                        <img src="ShitsLanding/8.PNG" alt="" />
                        <h5>Shit Artist</h5>
                    </div>
                    <div className="team-card">
                        <h4 className="">Vozceez</h4>
                        <img src="ShitsLanding/5.PNG" alt="" />
                        <h5>Shit Dev</h5>
                    </div>
                    <div className="team-card">
                        <h4 className="">Cryptoque</h4>
                        <img src="ShitsLanding/10.PNG" alt="" />
                        <h5>Shit Dev</h5>
                    </div>
                    <div className="team-card">
                        <h4 className="">MBashirCrook</h4>
                        <img src="ShitsLanding/7.PNG" alt="" />
                        <h5>Shit Dev</h5>
                    </div>
                </div>
                <Divider style={{ borderWidth: 2 }} />
                <div style={{textAlign:"center", color: "white", fontSize: "18px"}}>© Magic Solana Shits</div>
            </div>
        </div>


    );
}



