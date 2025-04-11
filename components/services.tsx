import { Stethoscope, UserRound, FlaskRoundIcon as Flask, Radio } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Stethoscope className="h-10 w-10 text-blue-600" />,
      title: "General Consultation",
      description: "Comprehensive health check-ups and consultations for all age groups.",
    },
    {
      icon: <UserRound className="h-10 w-10 text-blue-600" />,
      title: "Urologist",
      description: "Specialist in the urinary tract and male reproductive system, diagnosing and treating related conditions.",
    },
    {
      icon: <UserRound className="h-10 w-10 text-blue-600" />,
      title: "Gynecology",
      description: "Comprehensive women's health services and reproductive care.",
    },
    {
      icon: <Flask className="h-10 w-10 text-blue-600" />,
      title: "Laboratory Tests",
      description: "Advanced diagnostic testing with quick and accurate results.",
    },
  ]

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-600">Our Services</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              We offer a wide range of medical services to meet your healthcare needs.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
              <div className="p-2 bg-blue-100 rounded-full">{service.icon}</div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-center text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
