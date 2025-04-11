import { MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-600">Contact Us</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              We're here to help. Reach out to us with any questions or concerns.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-blue-600" />
              <div>
                <h3 className="text-lg font-bold">Address</h3>
                <p className="text-gray-500">
                  Haq Medical Centre, Near Khan Medical Store, Shah Rukn-e-Alam Colony, Multan, Pakistan
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-blue-600" />
              <div>
                <h3 className="text-lg font-bold">Phone</h3>
                <p className="text-gray-500">+92 300 1234567</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-blue-600" />
              <div>
                <h3 className="text-lg font-bold">Email</h3>
                <p className="text-gray-500">info@haqmedicalcenter.com</p>
              </div>
            </div>
          </div>
          <div className="h-[300px] rounded-lg overflow-hidden border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.388657628458!2d71.5128489!3d30.2071154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b342f230ae015%3A0x346b255fbe09b827!2sHaq%20Medical%20Centre!5e0!3m2!1sen!2s!4v1712846930587!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
