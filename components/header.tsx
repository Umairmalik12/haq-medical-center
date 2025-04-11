"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  function smoothScroll(target:any) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
    }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Haq Medical Center
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
        <nav className="flex gap-6">
  <button onClick={() => smoothScroll("#home")} className="text-sm font-medium hover:text-blue-600">
    Home
  </button>
  <button onClick={() => smoothScroll("#about")} className="text-sm font-medium hover:text-blue-600">
    About Us
  </button>
  <button onClick={() => smoothScroll("#services")} className="text-sm font-medium hover:text-blue-600">
    Services
  </button>
  <button onClick={() => smoothScroll("#doctors")} className="text-sm font-medium hover:text-blue-600">
    Doctors
  </button>
  <button onClick={() => smoothScroll("#appointments")} className="text-sm font-medium hover:text-blue-600">
    Appointments
  </button>
  <button onClick={() => smoothScroll("#contact")} className="text-sm font-medium hover:text-blue-600">
    Contact
  </button>
  <button onClick={() => smoothScroll("#staff")} className="text-sm font-medium hover:text-blue-600">
    Staff
  </button>
</nav>

          
          <Button   onClick={() => smoothScroll("#appointments")}  className="bg-blue-600 hover:bg-blue-700">Book Appointment</Button>
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
  <div className="md:hidden">
  <nav className="flex flex-col space-y-4 p-4 bg-white border-t">
    <button
      onClick={() => {
        smoothScroll("#home");
        toggleMenu();
      }}
      className="text-left text-sm font-medium hover:text-blue-600"
    >
      Home
    </button>
    <button
      onClick={() => {
        smoothScroll("#about");
        toggleMenu();
      }}
      className="text-left text-sm font-medium hover:text-blue-600"
    >
      About Us
    </button>
    <button
      onClick={() => {
        smoothScroll("#services");
        toggleMenu();
      }}
      className="text-left text-sm font-medium hover:text-blue-600"
    >
      Services
    </button>
    <button
      onClick={() => {
        smoothScroll("#doctors");
        toggleMenu();
      }}
      className="text-left text-sm font-medium hover:text-blue-600"
    >
      Doctors
    </button>
    <button
      onClick={() => {
        smoothScroll("#appointments");
        toggleMenu();
      }}
      className="text-left text-sm font-medium hover:text-blue-600"
    >
      Appointments
    </button>
    <button
      onClick={() => {
        smoothScroll("#contact");
        toggleMenu();
      }}
      className="text-left text-sm font-medium hover:text-blue-600"
    >
      Contact
    </button>
    <button
      onClick={() => {
        smoothScroll("#staff");
        toggleMenu();
      }}
      className="text-left text-sm font-medium hover:text-blue-600"
    >
      Staff
    </button>
    <Button   onClick={() => smoothScroll("#appointments")}  className="bg-blue-600 hover:bg-blue-700">Book Appointment</Button>

  </nav>
</div>
      )}
    </header>
  )
}
