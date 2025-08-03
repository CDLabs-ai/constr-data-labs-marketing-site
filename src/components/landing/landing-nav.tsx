"use client"
import { useState } from "react"
import { Shield } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { WaitingListModal } from "../waiting-list-modal";

export default function LandingNav() {
    const [waitingListOpen, setWaitingListOpen] = useState(false)

    return (
        <>
            <header className="fixed top-0 border-b bg-white/80 backdrop-blur-sm w-full z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">RiskWise</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
                </Link>
                <Link href="#features" className="text-gray-600 hover:text-gray-900">
                Features
                </Link>
                <Link href="/solutions" className="text-gray-600 hover:text-gray-900">
                Solutions
                </Link>
                <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
                Pricing
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
                </Link>
            </nav>
            <Button onClick={() => setWaitingListOpen(true)} className="bg-blue-600 hover:bg-blue-700">
                Join the Waiting List
            </Button>
            </div>
        </header>
        <WaitingListModal open={waitingListOpen} onOpenChange={setWaitingListOpen} />
        </>
    )
}