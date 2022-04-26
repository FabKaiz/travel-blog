import '../styles/globals.css'
import Navbar from '../components/Navbar/Navbar'


const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="app__container">
      <Navbar />
      <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
