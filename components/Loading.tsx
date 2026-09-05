import React from 'react'

function LoadingPage() {
    return (
        <main
            className="min-h-screen flex items-center px-6 sm:px-10 lg:pl-80 lg:pr-16 max-w-5xl"
            aria-busy="true"
            aria-live="polite"
        >
            <div className="w-full max-w-content space-y-4">
                <div className="h-3 w-24 rounded bg-ink-700 animate-pulse" />
                <div className="h-8 w-2/3 rounded bg-ink-700 animate-pulse" />
                <div className="h-4 w-full rounded bg-ink-700 animate-pulse" />
                <div className="h-4 w-5/6 rounded bg-ink-700 animate-pulse" />
            </div>
            <span className="sr-only">Loading…</span>
        </main>
    )
}

export default LoadingPage
