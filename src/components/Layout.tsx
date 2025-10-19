import Header from './header'
import Footer from './footer'
import type { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header />
      <main className="flex-1 w-full">
        <div className="max-w-6xl mx-auto p-6">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
