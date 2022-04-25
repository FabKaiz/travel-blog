import Navbar from '../components/Navbar'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
