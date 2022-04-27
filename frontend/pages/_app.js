import Router from 'next/router'
import '../styles/globals.css'
import Navbar from '../components/Navbar/Navbar'
import NProgress from 'nprogress'

const MyApp = ({ Component, pageProps }) => {
  NProgress.configure({ showSpinner: false })
  NProgress.configure({ parent: '.loading' })

  Router.events.on('routeChangeStart', () => NProgress.start())
  Router.events.on('routeChangeComplete', () => NProgress.done())

  return (
    <div className="app__container">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
