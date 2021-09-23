import Roadmap from '../RoadmapV2.png';

export const What = () => {
    return (
      <div id="what" className="text-center">
        <div style={{padding: 0}}>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                {/* <h2 className="font-bold text-6xl mb-8">RoadMap</h2> */}

              </div>  
            </div>
            <div className="col-xs-12 col-md-6">
            </div>
          </div>
          <div className="" style={{width: '100%', display: "flex"}}>
          {/* <img src="SideShit.png" alt="SideShit" style={{float: "left", width: "15%", flex: "15%", objectFit: "cover"}} /> */}
                    <img src={Roadmap} alt="RoadmapV2" style={{float:"left", width: "100%", flex:"70%",  objectFit: "cover"}}/>
                    {/* <img src="SideShitRight.png" alt="SideShit" style={{float: "left", width: "15%", flex:"15%",  objectFit: "cover"}} /> */}
                    {/* <img src="/RoadMap1.png" alt="RoadMap1" style={{width: "85%", height:"40%"}}/>
                    // <img src="/RoadMap2.png" alt="RoadMap2" style={{width: "85%", height:"40%"}}/>
                    // <img src="/RoadMap3.png" alt="RoadMap3" style={{width: "85%", height:"40%"}}/>
                    // <img src="/RoadMap4.png" alt="RoadMap4" style={{width: "85%", height:"40%"}}/> */}
              </div>
                {/* <p style={{marginTop: "10px", fontSize: "24px"}}>For more information! <u><a href="https://discord.gg/z3e5HvxZ7V" target="_blank" rel="noreferrer">Join our Discord!</a></u></p> */}
        </div>
      </div>
    );
  };
  