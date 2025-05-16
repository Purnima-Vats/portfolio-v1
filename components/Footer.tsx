"use client"

import Link from "next/link"
import {Envelope, GithubLogo, XLogo } from "@phosphor-icons/react"

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="w-full px-6 md:px-8 max-w-7xl mx-auto py-6 text-gray-400 border-t border-gray-700 mt-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                <p className="text-sm">
                    Made with ❤️ <br className="md:hidden" />
                    <span className="block md:inline">&copy; {year} Purnima Vats</span>
                </p>

                <div className="flex items-center gap-4">
                    <Link
                        href="https://twitter.com/purnimaavats"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                        aria-label="Twitter"
                    >
                        <XLogo className="h-5 w-5" />
                    </Link>
                    <Link
                        href="https://github.com/Purnima-Vats"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                        aria-label="GitHub"
                    >
                        <GithubLogo className="h-5 w-5" />
                    </Link>
                    <Link
                        href="mailto:purnimavats6789@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                        aria-label="Mail"
                    >
                        <Envelope className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}


