import Link from "next/link"
import { Facebook} from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-gray-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Haq Medical Center</h3>
            <p className="text-gray-400">Providing quality healthcare services with compassion and excellence.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#doctors" className="text-gray-400 hover:text-white">
                  Doctors
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
  <h3 className="text-lg font-bold">Services</h3>
  <ul className="space-y-2">
    <li>
        General Consultation
    
      <p className="text-gray-500 mt-2">
        Our general consultation service provides a comprehensive health checkup for individuals seeking advice on general health concerns.
      </p>
    </li>
    <li>
        Urologist
    
      <p className="text-gray-500 mt-2">
        Our urology specialists offer expert diagnosis and treatment for a variety of urinary tract and male reproductive issues.
      </p>
    </li>
    <li>
        Gynecology
    
      <p className="text-gray-500 mt-2">
        Our gynecology services cater to women's health, providing everything from routine exams to advanced treatments for reproductive health issues.
      </p>
    </li>
  </ul>
</div>


<div className="space-y-4">
  <h3 className="text-lg font-bold">Connect With Us</h3>
  <div className="flex space-x-4">
    <Link
      href="https://www.facebook.com/people/Haque-Medical-Centre-Multan/100063767306253/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 transition-colors"
    >
      <Facebook className="h-6 w-6" />
      <span className="sr-only">Facebook</span>
    </Link>
  </div>
</div>

        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© 2025 Haq Medical Center. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Website created by Umair Javed</p>
        </div>
      </div>
    </footer>
  )
}
