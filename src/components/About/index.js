// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const AboutLightImg =
  'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
const AboutDarkImg =
  'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutImg = isDarkTheme ? AboutDarkImg : AboutLightImg
      const HomeStyle = isDarkTheme ? ' Dark' : 'Light'

      return (
        <>
          <Navbar />
          <div className={`about-container ${HomeStyle}`}>
            <img src={aboutImg} alt="about" className="about-img" />
            <h1 className="about-heading">About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
