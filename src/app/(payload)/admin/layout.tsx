import React from 'react'

// Import custom styling globally
import '../custom.scss'

type Args = {
  children: React.ReactNode
}

const Layout = ({ children }: Args) => {
  return <>{children}</>
}

export default Layout
