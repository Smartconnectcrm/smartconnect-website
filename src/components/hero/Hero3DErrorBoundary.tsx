"use client"

import React, { Component, type ReactNode } from "react"

type Props = {
  children: ReactNode
  fallback?: ReactNode
}

type State = {
  hasError: boolean
  error?: Error
}

/**
 * Error boundary for Hero3D component.
 * Catches Three.js/fiber errors and shows fallback.
 */
export default class Hero3DErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("Hero3D Error:", error, errorInfo)
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="h-full w-full flex items-center justify-center bg-slate-950">
            <div className="text-white/40 text-sm">3D visualization unavailable</div>
          </div>
        )
      )
    }

    return this.props.children
  }
}
