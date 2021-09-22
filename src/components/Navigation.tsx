import DiscordIcon from "./DiscordIcon"
import TwitterIcon from "./TwitterIcon"


export const Navigation = () => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-transparent' >
      <div className='container' >
        <div className='navbar-header' >
          <a className='navbar-brand page-scroll' href='#page-top'>
            {" "}{
            " "}
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#header' className='page-scroll'>
                Home
              </a>
            </li>
            <li>
              <a href='#what' className='page-scroll'>
                Roadmap
              </a>
            </li>
            {/* <li>
              <a href='#rarity' className='page-scroll'>
                Rarity
              </a>
            </li> */}
            <li>
              <a href='#guide' className='page-scroll'>
                Minting
              </a>
            </li>
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
            <li>
              <a href='#Testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li>
            
            <li>
              <a href='https://twitter.com/magicsolanashit' className='page-scroll'>
              <TwitterIcon fill='#5D7600' />
              </a>
            </li>
            <li>
              <a href='https://discord.gg/WHmh2mzKyp' className='page-scroll'>
                <DiscordIcon fill='#5D7600' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};
