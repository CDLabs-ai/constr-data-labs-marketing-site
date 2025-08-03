"use client"
import { useState } from "react"
import { ArrowRight, BarChart3, Calendar, Users, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import LandingNav from "@/components/landing/landing-nav"
import LandingFooter from "@/components/landing/landing-footer"
import { WaitingListModal } from "@/components/waiting-list-modal"

export default function HomePage() {
  const [waitingListOpen, setWaitingListOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-20">
      {/* Header */}
      <LandingNav />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionize Construction Planning with{" "}
            <span className="text-blue-600">AI-Powered Cost and Schedule Intelligence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Upload your historical documents, connect to your existing apps, and leverage our vertical AI to generate
            superior cost estimates and construction schedules in a fraction of the time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
           
            <Button size="lg" onClick={() => setWaitingListOpen(true)} className="text-lg px-8 py-3">
              Join the Waiting List
            </Button>
            
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
              <div className="text-gray-600">Construction professionals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2+</div>
              <div className="text-gray-600">Construction schedules optimized</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">750+</div>
              <div className="text-gray-600">Cost estimates generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-gray-50" id="features">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Construction Intelligence Platform</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From initial planning to project completion, RiskWise provides AI-powered insights at every stage of your
              construction project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Cost Estimates</CardTitle>
                <CardDescription>
                  AI-powered cost breakdowns with risk analysis and optimization suggestions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Calendar className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Schedules</CardTitle>
                <CardDescription>
                  Probabilistic scheduling with Monte Carlo simulations and critical path analysis
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Simulations</CardTitle>
                <CardDescription>
                  10,000+ trial simulations to forecast realistic timelines and budget scenarios
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Forecasting</CardTitle>
                <CardDescription>
                  Predictive analytics for project outcomes with confidence intervals and risk mitigation
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Generate Higher Quality Cost Estimates Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Generate Higher Quality Cost Estimates</h2>
              <p className="text-lg text-gray-600 mb-8">
                Transform your estimation process with RiskWise&apos;s specialized construction AI. Upload historical
                documents and generate comprehensive cost breakdowns with risk analysis and optimization
                recommendations.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Labor, materials, and equipment breakdown</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Risk assessment for each cost component</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">AI-driven optimization suggestions</span>
                </div>
              </div>
              <Link href="/cost-estimator">
                <Button size="lg">
                  Try Cost Estimator <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="text-6xl font-bold text-blue-600 mb-4">$914,320</div>
              <div className="text-gray-600 text-lg">Average project estimate</div>
              <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-gray-900">$677,680</div>
                  <div className="text-gray-600">Labor</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">$186,200</div>
                  <div className="text-gray-600">Materials</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">$220,480</div>
                  <div className="text-gray-600">Equipment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Construction Planning?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of construction professionals who trust RiskWise for accurate cost estimates and reliable
            project schedules.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/schedule-demo">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-3"
              >
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <LandingFooter />
      <WaitingListModal open={waitingListOpen} onOpenChange={setWaitingListOpen} />
    </div>
  )
}