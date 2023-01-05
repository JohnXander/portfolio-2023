import { Footer } from '../footer/footer'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

const MainLayout = ({ children }: any) => {
  return (
      <>
          <main className={poppins.className}>{children}</main>
          <Footer />
      </>
  )
}

export default MainLayout