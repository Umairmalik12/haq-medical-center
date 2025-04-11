"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function AppointmentForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState<Date>()
  const [service, setService] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    // Prevent default for async logic if needed
    // e.preventDefault()

    // You could use setTimeout here to clear after redirection delay
    setTimeout(() => {
      setName("")
      setPhone("")
      setDate(undefined)
      setService("")
      setMessage("")
    }, 1000) // Adjust timing to your redirect, or remove if handled differently
  }

  return (
    <section
      id="appointments"
      className="w-full py-12 md:py-24 lg:py-32 bg-white"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-600">
              Make an Appointment
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Book your appointment online and we'll get back to you as soon as
              possible.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-[800px] mt-12">
          <form
            action="https://formsubmit.co/umairid112233@gmail.com"
            method="POST"
            className="grid gap-6"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Appointment Request - Haq Medical Center" />
            <input type="hidden" name="Clinic" value="Haq Medical Center" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="Full Name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="Phone Number"
                  placeholder="Enter your phone number"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date">Preferred Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Select a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(value) => setDate(value)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {date && (
                  <input
                    type="hidden"
                    name="Preferred Date"
                    value={format(date, "PPP")}
                  />
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service</Label>
                <Select value={service} onValueChange={(val) => setService(val)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="General Consultation">
                      General Consultation
                    </SelectItem>
                    <SelectItem value="Urologist">Urologist</SelectItem>
                    <SelectItem value="Gynecology">Gynecology</SelectItem>
                    <SelectItem value="Laboratory Tests">Laboratory Tests</SelectItem>
                  </SelectContent>
                </Select>
                {service && <input type="hidden" name="Service" value={service} />}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="Message"
                placeholder="Please provide any additional information about your appointment"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Submit Appointment Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
