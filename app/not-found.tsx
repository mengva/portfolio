import Link from "next/link";
import { profile } from "@/lib/data";

export const metadata = {
    title: "Page not found",
    robots: { index: false, follow: false },
};

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:pl-80 lg:pr-16 max-w-5xl">
            <p className="text-teal font-medium">404</p>
            <h1 className="font-display text-4xl sm:text-5xl leading-[1.1] mt-3 max-w-content text-paper">
                This page doesn&apos;t exist.
            </h1>
            <p className="mt-6 text-paper-muted max-w-content leading-relaxed">
                The link you followed may be broken, or the page may have moved.
                Everything on this site lives on one page.
            </p>

            <div className="mt-10">
                <Link
                    href="/"
                    className="text-teal hover:underline focus-ring text-sm"
                >
                    Back to {profile.name}&apos;s portfolio
                </Link>
            </div>
        </main>
    );
}
