import { Card, CardContent } from "@/components/ui/card"

export default function Doctors() {
  const doctors = [
    {
      name: "Dr. Tanveer-Ul-Haq (CEO)",
      specialty: "Urologist",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Aneela",
      specialty: "Gynecologist",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Abdul Jaleel",
      specialty: "S.M.O",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Ali Hussain",
      specialty: "S.M.O",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Fawad Bilal",
      specialty: "S.M.O",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Shazad",
      specialty: "Anaesthisia Specialist",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section id="doctors" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-600">Our Doctors</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Meet our team of experienced and dedicated healthcare professionals.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {doctors.map((doctor, index) => (
            <Card key={index} className="overflow-hidden">
              <img
                src={doctor.image || "/placeholder.svg"}
                alt={doctor.name}
                className="w-full h-64 object-cover"
                width={300}
                height={300}
              />
              <CardContent className="p-4 text-center">
                <h3 className="text-xl font-bold">{doctor.name}</h3>
                <p className="text-blue-600">{doctor.specialty}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
