
import { Carousel } from 'antd';
import 'antd/dist/antd.css';


const TestimonialContainer = () => {

  return (
    <div id="Testimonials" style={{ backgroundColor: "#FF5C5C" }}>
      <div className="testim" >
        <div className="container" >
          {/* <h2 className=" font-bold text-6xl mb-8" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontSize: "3.75rem", textAlign: 'center', color: "white" }}>Testimonials </h2> */}
          <div className="team-grid" style={{ marginLeft: 'auto', marginRight: 'auto', width: '50%' }}>

            <div className="testim-box" >
              <p>"These NFTs are literally Shit"</p>
              <div className="team-card">
                <img src="img/forbes.JPG" alt="" />
              </div>
            </div>

            <div className="testim-box">
              <p>"They took shit and put it on the Blockchain"</p>
              <div className="team-card">
                <img src="img/bloomberg2.JPG" alt="" />
              </div>
            </div>

            <div className="testim-box">
              <p>"This may be the shittiest NFT Project we've seen"</p>
              <div className="team-card">
                <img src="img/cnbc-logo.png" alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
};

const TestimonialContainer2 = () => {

  return (
    <div id="Testimonials" style={{ backgroundColor: "#FF5C5C" }}>
      <div className="testim">
        <div className="container">
          {/* <h2 className=" font-bold text-6xl mb-8" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "3.75rem", fontWeight: 900, textAlign: 'center', color: "white" }}>Testimonials </h2> */}
          <div className="team-grid" style={{ marginLeft: 'auto', marginRight: 'auto', width: '50%' }}>

            {/* <div className="testim-box">
                <p>"Who is buying this shit?" </p>
              <div className="team-card">
                <img  src="img/yahoo.png" alt=""/>
              </div>
            </div> */}

            <div className="testim-box">
              <p>"We'd rather burn our money than invest in this.."</p>
              <div className="team-card">
                <img src="img/shark-tank.JPG" alt="" />
              </div>
            </div>

            <div className="testim-box">
              <p>"How do people even find value in this shit. I can't believe they're buying it."</p>
              <div className="team-card">
                <img src="img/Jim.JPG" alt="" />
              </div>
            </div>

            <div className="testim-box">
              <p>"I don't want to buy your shit..Fuck off you DONKEY! "</p>
              <div className="team-card">
                <img src="img/gordon.JPG" alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
};


export const Testimonials = () => {
  return (
    <Carousel>
      <TestimonialContainer />
      <TestimonialContainer2 />
    </Carousel>
  );
}






