// Write your code here
// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const HomeLightImg =
  'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
const HomeDarkImg = 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeImg = isDarkTheme ? HomeDarkImg : HomeLightImg

      const HomeStyle = isDarkTheme ? ' Dark' : 'Light'

      return (
        <>
          <Navbar />
          <div className={`about-container ${HomeStyle}`}>
            <img src={homeImg} alt="home" className="about-img" />
            <h1 className="about-heading">Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
