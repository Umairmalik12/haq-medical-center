import { Check } from "lucide-react"

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-600">About Us</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Haq Medical Center is a state-of-the-art healthcare facility dedicated to providing exceptional medical
              care to our patients. Our team of highly qualified healthcare professionals is committed to delivering
              personalized treatment with compassion and integrity. With cutting-edge technology and a patient-centered
              approach, we strive to improve the health and well-being of our community.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
            <div className="p-2 bg-blue-100 rounded-full">
              <Check className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Experienced Doctors</h3>
            <p className="text-center text-gray-500">
              Our team consists of board-certified physicians with years of experience in their respective fields.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
            <div className="p-2 bg-blue-100 rounded-full">
              <Check className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Modern Facilities</h3>
            <p className="text-center text-gray-500">
              We are equipped with the latest medical technology to provide accurate diagnoses and effective treatments.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
            <div className="p-2 bg-blue-100 rounded-full">
              <Check className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">24/7 Emergency Services</h3>
            <p className="text-center text-gray-500">
              Our emergency department is open 24 hours a day, 7 days a week to provide immediate care when you need it
              most.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
