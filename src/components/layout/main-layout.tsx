import { Footer } from '../footer/footer'
import { Header } from '../header/header'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

const MainLayout = ({ children }: any) => {
  return (
      <>
          <Header />
          <main className={poppins.className}>{children}</main>
          <Footer />
      </>
  )
}

export default MainLayout