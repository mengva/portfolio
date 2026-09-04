"use client";

import { useEffect } from "react";
import Link from "next/link";
import { profile } from "@/lib/data";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log to your monitoring service of choice here.
        console.error(error);
    }, [error]);

    return (
        <main className="min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:pl-80 lg:pr-16 max-w-5xl">
            <p className="text-gold font-medium">Error</p>
            <h1 className="font-display text-4xl sm:text-5xl leading-[1.1] mt-3 max-w-content text-paper">
                Something went wrong.
            </h1>
            <p className="mt-6 text-paper-muted max-w-content leading-relaxed">
                An unexpected error occurred while loading this page. You can try
                again, or head back to the homepage.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <button
                    onClick={reset}
                    className="text-teal hover:underline focus-ring"
                >
                    Try again
                </button>
                <Link href="/" className="text-teal hover:underline focus-ring">
                    Back to {profile.name}&apos;s portfolio
                </Link>
            </div>
        </main>
    );
}
