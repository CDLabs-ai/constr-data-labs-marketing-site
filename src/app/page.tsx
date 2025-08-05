"use client"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import LandingNav from "@/components/landing/landing-nav"
import LandingFooter from "@/components/landing/landing-footer"
import { WaitingListModal } from "@/components/waiting-list-modal"

export default function HomePage() {
  const [waitingListOpen, setWaitingListOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-20">
      <LandingNav />

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
           
            <Button size="lg" onClick={() => setWaitingListOpen(true)} className="text-lg px-8 py-3 bg-blue-600 duration-500">
              Join the Waiting List
            </Button>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
              <div className="text-gray-600">Construction professionals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2.5M+</div>
              <div className="text-gray-600">Construction schedules optimized</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">750K+</div>
              <div className="text-gray-600">Cost estimates generated</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">Company Logos</div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Accelerate Proposal Creation</h2>
              <p className="text-lg text-gray-600 mb-8">
                Transform your proposal process with RiskWise&apos;s advanced AI engine. Generate comprehensive, tailored proposals in minutes instead of days.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl font-bold text-blue-600 mb-2">10x faster</div>
                  <span className="text-gray-700">Than traditional methods</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl font-bold text-blue-600 mb-2">30% higher</div>
                  <span className="text-gray-700">Win rate for clients</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg p-8 text-center flex items-center justify-center">
              <Image src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1" alt="Proposal acceleration" width={500} height={400} className="object-cover rounded-lg"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="rounded-lg p-8 text-center flex items-center justify-center">
              <Image src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1" alt="Conversational AI" width={500} height={400} className="object-cover rounded-lg"/>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Have Real Conversations With Your Data</h2>
              <p className="text-lg text-gray-600 mb-8">
                RiskWise&apos;s conversational AI allows you to interact with your project data naturally. Ask questions, get insights, and make decisions faster than ever before.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl font-bold text-blue-600 mb-2">15,000+</div>
                  <span className="text-gray-700">Data sources integrated</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Natural language</div>
                  <span className="text-gray-700">Query capability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Proprietary Forecasting Engine</h2>
              <p className="text-lg text-gray-600 mb-8">
                Leverage our industry-leading AI forecasting engine to predict project timelines, resource needs, and potential risks with unprecedented accuracy.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl font-bold text-blue-600 mb-2">97% accuracy</div>
                  <span className="text-gray-700">In timeline predictions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl font-bold text-blue-600 mb-2">40% reduction</div>
                  <span className="text-gray-700">In project delays</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg p-8 text-center flex items-center justify-center">
              <Image src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1" alt="Forecasting engine" width={500} height={400} className="object-cover rounded-lg"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
             <h2 className="text-4xl font-bold text-gray-900 mb-10">How to Get Started</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="flex flex-col items-center">
              <div className="w-[60px] h-[60px] text-2xl font-bold bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                1
              </div>
              <h2 className="text-4xl font-semibold text-gray-900 mb-6 text-center">Start for free</h2>
              <p className="text-lg text-gray-600 mb-8 text-center">
                Sign up and use RiskWise as your trusted, daily proposal and schedule management platform.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[60px] h-[60px] text-2xl font-bold bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                2
              </div>
              <h2 className="text-4xl font-semibold text-gray-900 mb-6 text-center">Optimize with ease</h2>
              <p className="text-lg text-gray-600 mb-8 text-center">
                Generate proposals, optimize schedules, and have conversations with your data using our AI.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[60px] h-[60px] text-2xl font-bold bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                3
              </div>
              <h2 className="text-4xl font-semibold text-gray-900 mb-6 text-center">Choose a tier</h2>
              <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
                Take it to the next level with our advanced features and join thousands of satisfied clients.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="rounded-lg p-8 text-center flex items-center justify-center">
              <Image src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1" alt="AI Schedule Optimization" width={500} height={400} className="object-cover rounded-lg"/>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Smart Schedule Optimization</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our AI automatically identifies bottlenecks, optimizes resource allocation, and suggests improvements to your project schedules.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl font-bold text-blue-600 mb-2">22% increase</div>
                  <span className="text-gray-700">In resource efficiency</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Real-time</div>
                  <span className="text-gray-700">Schedule adjustments</span>
                </div>
              </div>
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