import RootLayout from './layout'
import { Header } from '@components/header/header.component'
import { DashBoard } from '@components/dashboard/dashboard.component'
import { investments } from '@data/data'

export default function Home() {
 return (
  <RootLayout>
   <main>
    <Header />
    <DashBoard investments={investments} />
   </main>
  </RootLayout>
 )
}
