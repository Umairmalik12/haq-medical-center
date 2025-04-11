import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-blue-600">
                Your Health, Our Priority
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Comprehensive and compassionate care at Haq Medical Center.
              </p>
            </div>
            <Link href="#appointments" >
    
            <div  className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-blue-600 hover:bg-blue-700">Make an Appointment</Button>
            </div>
            </Link>
          </div>
          <div className="flex justify-center">
            <img
 src="/haq-medical.jpeg"
               alt="Medical professionals"
              className="rounded-lg object-cover w-full max-w-[600px] shadow-lg"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
