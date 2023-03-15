// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const websiteLogoLight =
  'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
const websiteLogoDark =
  'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'

const lightThemeIcon =
  'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
const DarkThemeIcon =
  'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onChangeTheme = event => {
        toggleTheme(event.target.value)
      }

      const bgColor = isDarkTheme ? 'Light-bg' : 'Dark-bg'
      const linkColor = isDarkTheme ? 'Light-bg-link' : 'Dark-bg-link'

      const websiteLogoImg = isDarkTheme ? websiteLogoDark : websiteLogoLight
      const ThemeImg = isDarkTheme ? lightThemeIcon : DarkThemeIcon
      return (
        <div className={`nav-container ${bgColor}`}>
          <nav className="nav-header">
            <img src={websiteLogoImg} alt="website logo" className="logo-img" />
            <ul className="Links-container">
              <Link to="/" className="nav-link">
                <li className={linkColor}>Home</li>
              </Link>
              <Link to="/about" className="nav-link">
                <li className={linkColor}>About</li>
              </Link>
            </ul>
            <button
              type="button"
              className="theme-button"
              data-testid="theme"
              onClick={onChangeTheme}
            >
              <img src={ThemeImg} alt="theme" className="theme-img" />
            </button>
          </nav>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
