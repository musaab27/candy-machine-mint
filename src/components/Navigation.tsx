
import DiscordIcon from "./DiscordIcon"
import TwitterIcon from "./TwitterIcon"


export const Navigation = () => {
  return (
      <div  className=" navbar-default navbar-transparent sticky-position navBorderBox " id='menu' style={{zIndex: 1000, height:"50px"}}>
      <div className='container' >
        <div 
          className='collapse navbar-collapse' 
          id='bs-example-navbar-collapse-1'
        >
          <ul className=' navbar-nav navbar-right'style={{textDecoration:"none", color:"white"}} >
            <li>
              <a href='#header' className='page-scroll'>
                Home
              </a>
            </li>
            <li>
              <a href='#rarity' className='page-scroll'>
                Rarity
              </a>
            </li>
            <li>
              <a href='#RoadMapHeader' className='page-scroll'>
                Roadmap
              </a>
            </li>
            {/* <li>
              <a href='#guide' className='page-scroll'>
                Minting
              </a>
            </li> */}
            <li>
              <a href='#faq' className='page-scroll'>
                FAQ
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            {/* <li>
              <a href='#Testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li> */}
            <li>
              <a href='https://twitter.com/magicsolanashit' style={{position:"relative", top:"-23px"}} className='page-scroll'>
              <TwitterIcon fill='#5D7600' />
              </a>
            </li>
            <li>
              <a href='https://discord.gg/WHmh2mzKyp' style={{position:"relative", top:"-23px", left:"18px"}} className='page-scroll'>
                <DiscordIcon fill='#5D7600' />
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>

  )
};
