import StyledComponentsRegistry from '@/lib/registry'
import { ThemeProvider } from '@/lib/theme-provider'
import { GlobalStyles } from '@theme/global'

export const metadata = {
 title: 'Risilience Tech Test',
 description: 'A Tech Test for Risilience by Clark Fennell',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <ThemeProvider>
   <GlobalStyles />
   <html lang="en">
    <body>
     <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </body>
   </html>
  </ThemeProvider>
 )
}
