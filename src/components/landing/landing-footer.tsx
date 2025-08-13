import { ChartColumn} from "lucide-react"
import Link from "next/link"

export default function LandingFooter() {
    return (
     <footer className="bg-gray-900 text-white py-12 px-4">
     <div className="container mx-auto">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div>
           <div className="flex items-center space-x-2 mb-4">
             <ChartColumn className="h-6 w-6 text-blue-400" />
             <span className="text-xl font-bold">RiskWise</span>
           </div>
           <p className="text-gray-400">AI-powered construction planning and cost estimation platform.</p>
         </div>
         
         <div>
           <h3 className="font-semibold mb-4">Company</h3>
           <ul className="space-y-2 text-gray-400">
             <li>
               <Link href="#" className="hover:text-white">
                 About
               </Link>
             </li>
             <li>
               <Link href="#" className="hover:text-white">
                 Contact
               </Link>
             </li>
             <li>
               <Link href="#" className="hover:text-white">
                 Support
               </Link>
             </li>
           </ul>
         </div>
       </div>
       <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
         <p>&copy; 2025 RiskWise. All rights reserved.</p>
       </div>
     </div>
   </footer>   
    )
}