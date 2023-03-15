// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const NotFoundStyle = isDarkTheme ? 'Dark-bg-style' : 'light-bg-style'
      return (
        <>
          <Navbar />
          <div className={`notfound-container ${NotFoundStyle}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt=" not found"
              className="not-found-img"
            />

            <h1 className="notfound-heading">Lost Your Way?</h1>
            <p className="notfound-paragraph">
              We cannot seem to find the page you are looking for
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
