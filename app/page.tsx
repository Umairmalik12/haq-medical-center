import Header from "@/components/header"
import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import Services from "@/components/services"
import Doctors from "@/components/doctors"
import AppointmentForm from "@/components/appointment-form"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Staff from "@/components/staff"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Doctors />
        <AppointmentForm />
        <Contact />
        <Staff/>
      </main>
      <Footer />
    </div>
  )
}
