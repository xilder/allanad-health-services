"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Spinner } from "@/components/ui/spinner"
import { CalendarIcon, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  { value: "preventive", label: "Preventive Health Services" },
  { value: "consultation", label: "Clinical Consultation" },
  { value: "corporate", label: "Corporate Wellness Program" },
  { value: "digital", label: "Digital Health Consulting" },
]

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
]

export function BookingForm() {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState<string>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call - replace with actual booking integration
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="border-border">
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="mb-2 text-2xl">Appointment Confirmed!</CardTitle>
          <CardDescription className="max-w-sm text-base">
            Thank you for booking with Allanad Healthcare Alliance. You will receive a confirmation email and WhatsApp message shortly.
          </CardDescription>
          {selectedDate && selectedTime && (
            <div className="mt-6 rounded-lg bg-muted px-4 py-3">
              <p className="text-sm font-medium text-foreground">
                {format(selectedDate, "EEEE, MMMM d, yyyy")} at {selectedTime}
              </p>
            </div>
          )}
          <Button
            className="mt-6"
            onClick={() => {
              setIsSubmitted(false)
              setSelectedDate(undefined)
              setSelectedTime(undefined)
            }}
          >
            Book Another Appointment
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>Schedule Your Consultation</CardTitle>
        <CardDescription>
          Fill out the form below to book your appointment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Service Selection */}
          <div className="space-y-2">
            <Label htmlFor="service">Service Type *</Label>
            <Select required>
              <SelectTrigger id="service">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.value} value={service.value}>
                    {service.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date Selection */}
          <div className="space-y-2">
            <Label>Preferred Date *</Label>
            <div className="rounded-lg border border-input p-3">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) =>
                  date < new Date() || date.getDay() === 0 || date.getDay() === 6
                }
                className="mx-auto"
              />
            </div>
            {selectedDate && (
              <p className="text-sm text-muted-foreground">
                Selected: {format(selectedDate, "EEEE, MMMM d, yyyy")}
              </p>
            )}
          </div>

          {/* Time Selection */}
          <div className="space-y-2">
            <Label>Preferred Time *</Label>
            <div className="grid grid-cols-4 gap-2">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  type="button"
                  variant={selectedTime === time ? "default" : "outline"}
                  size="sm"
                  className={cn(
                    "text-xs",
                    selectedTime === time && "bg-primary text-primary-foreground"
                  )}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>

          {/* Personal Information */}
          <div className="space-y-4 border-t border-border pt-6">
            <h3 className="text-sm font-semibold text-foreground">Your Information</h3>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" placeholder="John" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" placeholder="Doe" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" placeholder="john@example.com" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" type="tel" placeholder="+234 XXX XXX XXXX" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes (Optional)</Label>
              <Textarea
                id="notes"
                placeholder="Any specific concerns or questions you would like to discuss..."
                rows={3}
              />
            </div>
          </div>

          {/* Payment Notice - Placeholder for future integration */}
          <div className="rounded-lg border border-border bg-muted/50 p-4">
            <p className="text-sm text-muted-foreground">
              <strong>Payment:</strong> Payment options will be available after confirmation. We accept Paystack and Flutterwave.
            </p>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={!selectedDate || !selectedTime || isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Spinner className="mr-2" />
                Booking...
              </>
            ) : (
              <>
                <CalendarIcon className="mr-2 h-4 w-4" />
                Confirm Appointment
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
