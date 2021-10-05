


import Forbes2 from '../Forbes.png';




const TestimonialContainer = () => {

  return (
    <div id="Testimonials" style={{ backgroundColor: "#55ACEE" }}>
      <div className="testim" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, color: "black", fontSize: "36px" }}>
        <div >
          <div className="team-grid" style={{ marginLeft: 'auto', marginRight: 'auto', width: '80%' }}>
            <div className="testim-box" >
              <div className="team-card">
                <img src={Forbes2} alt="" style={{}} />
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

    <TestimonialContainer />

  );
}






