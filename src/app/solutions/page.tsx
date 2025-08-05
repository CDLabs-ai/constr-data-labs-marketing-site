"use client"
import { useState } from "react"
import { WaitingListModal } from "@/components/waiting-list-modal"
import Link from "next/link"
import {  Users, Calculator, HardHat, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import LandingNav from "@/components/landing/landing-nav"
import LandingFooter from "@/components/landing/landing-footer"

export default function SolutionsPage() {
    const [waitingListOpen, setWaitingListOpen] = useState(false)
    return (
        <div className="min-h-screen bg-white pt-16">
        <LandingNav />
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
            <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Built for Every Builder
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                RiskWise adapts to your specific needs, whether you&apos;re managing projects, estimating costs, or analyzing
                risks.
            </p>
            </div>
        </section>

        {/* Project Managers Section */}
        <section className="py-20">
            <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-gray-100 rounded-xl p-6 shadow-inner">
                <div className="aspect-video bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-4">
                    <div className="h-8 bg-blue-100 rounded-md w-1/3 mb-4"></div>
                    <div className="grid grid-cols-7 gap-1 mb-4">
                        {Array(7)
                        .fill(0)
                        .map((_, i) => (
                            <div key={i} className="h-6 bg-gray-100 rounded-sm"></div>
                        ))}
                    </div>
                    <div className="space-y-2">
                        <div className="h-8 bg-blue-50 rounded-md w-full"></div>
                        <div className="h-8 bg-green-50 rounded-md w-4/6"></div>
                        <div className="h-8 bg-yellow-50 rounded-md w-5/6"></div>
                        <div className="h-8 bg-red-50 rounded-md w-3/6"></div>
                    </div>
                    </div>
                </div>
                </div>
                <div>
                <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Project Managers</h2>
                <p className="text-lg text-gray-600 mb-6">
                    Project managers can finally visualize timelines, dependencies, and risks all in one interactive
                    interface — and adjust schedules with confidence using AI-assisted simulations.
                </p>
                <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Unified dashboard for complete project visibility</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Interactive Gantt charts with dependency management</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Real-time progress tracking and reporting</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Risk identification and mitigation planning</span>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </section>

        {/* Cost Estimators Section */}
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-4">
                    <Calculator className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Cost Estimators</h2>
                <p className="text-lg text-gray-600 mb-6">
                    Build more accurate estimates in less time with AI-powered cost suggestions, historical data
                    integration, and collaborative review tools that eliminate spreadsheet chaos.
                </p>
                <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Intelligent cost suggestions based on project type</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Historical data integration for better accuracy</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Collaborative review and approval workflows</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Automated variance analysis and reporting</span>
                    </li>
                </ul>
                </div>
                <div className="order-1 md:order-2 bg-white rounded-xl p-6 shadow-lg">
                <div className="aspect-video bg-white rounded-lg overflow-hidden">
                    <div className="p-4">
                    <div className="h-8 bg-blue-100 rounded-md w-1/3 mb-4"></div>
                    <div className="space-y-2">
                        <div className="h-6 bg-gray-100 rounded-md w-full"></div>
                        <div className="h-6 bg-gray-100 rounded-md w-5/6"></div>
                        <div className="h-6 bg-gray-100 rounded-md w-4/6"></div>
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-4">
                        <div className="h-20 bg-blue-50 rounded-md"></div>
                        <div className="h-20 bg-blue-50 rounded-md"></div>
                        <div className="h-20 bg-blue-50 rounded-md"></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* General Contractors Section */}
        <section className="py-20">
            <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-gray-100 rounded-xl p-6 shadow-inner">
                <div className="aspect-video bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-4">
                    <div className="h-8 bg-blue-100 rounded-md w-1/3 mb-4"></div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="h-32 bg-blue-50 rounded-md"></div>
                        <div className="h-32 bg-green-50 rounded-md"></div>
                    </div>
                    <div className="h-24 bg-gray-100 rounded-md w-full"></div>
                    </div>
                </div>
                </div>
                <div>
                <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-4">
                    <HardHat className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4">General Contractors</h2>
                <p className="text-lg text-gray-600 mb-6">
                    Streamline subcontractor coordination, track progress across multiple projects, and identify potential
                    delays before they impact your bottom line.
                </p>
                <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Multi-project portfolio management</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Subcontractor coordination and tracking</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Early risk identification and mitigation</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Integrated cost and schedule management</span>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </section>

        {/* Civil Engineers Section */}
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-4">
                    <Building className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Civil Engineers</h2>
                <p className="text-lg text-gray-600 mb-6">
                    Model complex infrastructure projects with precision, simulate various scenarios, and communicate
                    technical details clearly to stakeholders and team members.
                </p>
                <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Advanced modeling and simulation tools</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Technical specification management</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Design change impact analysis</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Regulatory compliance tracking</span>
                    </li>
                </ul>
                </div>
                <div className="order-1 md:order-2 bg-white rounded-xl p-6 shadow-lg">
                <div className="aspect-video bg-white rounded-lg overflow-hidden">
                    <div className="p-4">
                    <div className="h-8 bg-blue-100 rounded-md w-1/3 mb-4"></div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="h-32 bg-red-50 rounded-md"></div>
                        <div className="h-32 bg-yellow-50 rounded-md"></div>
                    </div>
                    <div className="h-24 bg-blue-50 rounded-md w-full"></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20">
            <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Real Results for Real Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">3 Weeks</div>
                <p className="text-gray-600">Average time saved on project schedules</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">15%</div>
                <p className="text-gray-600">Reduction in cost overruns</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">87%</div>
                <p className="text-gray-600">Of risks identified before impact</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">4.8/5</div>
                <p className="text-gray-600">Average customer satisfaction rating</p>
                </div>
            </div>
            </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="h-40 bg-gray-100 rounded-lg mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Metro Station Expansion</h3>
                <p className="text-gray-600 mb-4">
                    Reduced schedule delays by 40% through early risk identification and mitigation planning.
                </p>
                <Link href="#" className="text-blue-600 font-medium hover:underline">
                    Read case study →
                </Link>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="h-40 bg-gray-100 rounded-lg mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Office Tower Development</h3>
                <p className="text-gray-600 mb-4">
                    Saved $2.3M in potential cost overruns through accurate estimation and risk analysis.
                </p>
                <Link href="#" className="text-blue-600 font-medium hover:underline">
                    Read case study →
                </Link>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="h-40 bg-gray-100 rounded-lg mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Highway Bridge Construction</h3>
                <p className="text-gray-600 mb-4">
                    Completed 3 weeks ahead of schedule with integrated planning and simulation tools.
                </p>
                <Link href="#" className="text-blue-600 font-medium hover:underline">
                    Read case study →
                </Link>
                </div>
            </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600">
            <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Start Optimizing Your Proposals Today</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join over 50,000 professionals who are leveraging RiskWise to transform their proposal and schedule management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                
                <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-3 hover:bg-black hover:text-white duration-500"
                onClick={() => setWaitingListOpen(true)}
                >
                Join the Waiting List
                </Button>
                
            </div>
            </div>
        </section>
        <LandingFooter />
        <WaitingListModal open={waitingListOpen} onOpenChange={setWaitingListOpen} />
        </div>
    )
}