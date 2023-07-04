import RootLayout from './layout'
import { Header } from '@components/header/header.component'
import { DashBoard } from '@components/dashboard/dashboard.component'

export default function Home() {
 return (
  <RootLayout>
   <main>
    <Header />
    <DashBoard />
   </main>
  </RootLayout>
 )
}
