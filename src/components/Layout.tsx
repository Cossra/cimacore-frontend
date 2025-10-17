import Header from './header'
import Footer from './footer'
import type { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header />
      <main className="flex-1 max-w-6xl w-full mx-auto p-6">{children}</main>
      <Footer />
    </div>
  )
}
