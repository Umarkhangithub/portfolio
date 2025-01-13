import Header from './Header'
import Footer from './Footer'

import './Layout.scss'
const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
      <main className='main  backdrop-blur-md '>{children}  </main>
      <Footer />
    </div>
  )
}

export default Layout
