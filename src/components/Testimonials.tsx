


import Forbes2 from '../Forbes.png';




const TestimonialContainer = () => {

  return (
    <div id="Testimonials" style={{ backgroundColor: "#55ACEE" }}>
      <div className="testim" style={{fontFamily: "Montserrat, sans-serif", fontWeight: 900, color: "black", fontSize: "36px"}}>
        <div >
          {/* <h2 className=" font-bold text-6xl mb-8" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontSize: "3.75rem", textAlign: 'center', color: "white" }}>Testimonials </h2> */}
          <div className="team-grid" style={{ marginLeft: 'auto', marginRight: 'auto', width: '80%' }}>

            <div className="testim-box" >
              <div className="team-card">
                <img src={Forbes2} alt="" style={{}} />
              </div>
            </div>
{/* 
            <div className="testim-box">
              <div className="team-card">
              <img src={CNBC} alt="" style={{}} />
              </div>
            </div>

            <div className="testim-box">
              <div className="team-card">
                <img src={Bloomberg} alt="" style={{}} />
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  )
};



export const Testimonials = () => {
  return (

      <TestimonialContainer />

  );
}






