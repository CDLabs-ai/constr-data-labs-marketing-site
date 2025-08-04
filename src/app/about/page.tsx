import { Clock, Target, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import LandingNav from "@/components/landing/landing-nav"
import LandingFooter from "@/components/landing/landing-footer"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <LandingNav />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Reimagining the Future of Construction Planning
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We&apos;re on a mission to transform how construction projects are planned, estimated, and executed through
            intelligent technology.
          </p>
          <div className="aspect-video max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <div className="text-gray-400 text-lg">Company Vision Video</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-end">
                  <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-16 h-16 flex items-center justify-center mb-2">
                    2018
                  </div>
                  <div className="h-full w-0.5 bg-blue-100 hidden md:block"></div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">The Problem</h3>
                  <p className="text-gray-600">
                    After years of working in construction management, our founders were frustrated with the clunky
                    Excel-based planning tools and chaotic contractor handoffs that led to costly delays and budget
                    overruns. They knew there had to be a better way.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-end">
                  <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-16 h-16 flex items-center justify-center mb-2">
                    2019
                  </div>
                  <div className="h-full w-0.5 bg-blue-100 hidden md:block"></div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">The Idea</h3>
                  <p className="text-gray-600">
                    RiskWise was born from a simple idea: what if we could combine advanced risk modeling with intuitive
                    project planning tools? Our team of civil engineers, data scientists, and software developers came
                    together to build the first prototype.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-end">
                  <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-16 h-16 flex items-center justify-center mb-2">
                    2021
                  </div>
                  <div className="h-full w-0.5 bg-blue-100 hidden md:block"></div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">First Launch</h3>
                  <p className="text-gray-600">
                    After two years of development and testing with early partners, we launched the first version of
                    RiskWise. The response was overwhelming, with construction teams reporting significant improvements
                    in planning accuracy and risk management.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-end">
                  <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-16 h-16 flex items-center justify-center mb-2">
                    Today
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2">Growing Impact</h3>
                  <p className="text-gray-600">
                    Today, RiskWise is used by thousands of construction professionals across the globe, from small
                    contractors to major infrastructure projects. We&apos;re constantly innovating and expanding our platform
                    to meet the evolving needs of the industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Precision</h3>
              <p className="text-gray-600">
                We believe in the power of accurate data and precise modeling to transform project outcomes. Every
                feature we build is designed to increase accuracy and reduce uncertainty.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Trust</h3>
              <p className="text-gray-600">
                We build relationships based on trust and reliability. Our customers count on our platform for critical
                decisions, and we take that responsibility seriously.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Transparency</h3>
              <p className="text-gray-600">
                We believe in clear communication and visibility. Our platform is designed to bring transparency to
                complex projects and our company operates with the same principle.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Efficiency</h3>
              <p className="text-gray-600">
                We&apos;re obsessed with making construction planning more efficient. Every feature we build aims to save
                time, reduce waste, and maximize resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product in Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">RiskWise in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Schedule Optimization</h3>
                <p className="text-gray-600">
                  Interactive Gantt charts with risk analysis help teams identify and mitigate potential delays.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Cost Estimation</h3>
                <p className="text-gray-600">
                  AI-powered cost suggestions and historical data integration for more accurate budgeting.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Risk Simulation</h3>
                <p className="text-gray-600">
                  Monte Carlo simulations help teams understand and prepare for various project scenarios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Building a Smarter Future</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the difference that intelligent project planning can make for your construction projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="px-8">
              Start Free Trial
            </Button>
            <Link href="/schedule-demo">
              <Button
                size="lg"
                variant="secondary"
                className="px-8"
              >
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <LandingFooter />
    </div>
  )
}