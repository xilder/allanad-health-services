"use client"

import Link from "next/link"
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Preventive Care", href: "/services#preventive" },
    { name: "Consultations", href: "/services#consultations" },
    { name: "Corporate Wellness", href: "/services#corporate" },
    { name: "Digital Health", href: "/digital-health" },
  ],
  resources: [
    { name: "Wellness Hub", href: "/wellness" },
    { name: "Health Guides", href: "/wellness#guides" },
    { name: "Partners", href: "/partners" },
    { name: "FAQ", href: "/faq" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/share/1Ay56dypaZ/" },
  { name: "Twitter", icon: Twitter, href: "https://x.com/AllanadAll72519" },
  // { name: "LinkedIn", icon: Linkedin, href: "https://www.tiktok.com/@allanad.care?_r=1&_t=ZN-95PcM5gY26g" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/allanadcare?igsh=MTFtcW5vMTJscG1jdg==" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                          className='text-primary-foreground'
                          src={"/allanad.jpeg"}
                          alt={"logo"}
                          width={50}
                          height={50}
                        />
              <span className="text-lg font-semibold">Allanad Healthcare</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Compassionate healthcare services and digital health solutions designed to improve patient outcomes and empower individuals.
            </p>
            
            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm font-medium text-foreground">Stay informed about health insights</p>
              <form className="mt-3 flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-[240px]"
                />
                <Button type="submit" size="sm">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Resources</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info & Social */}
        <div className="mt-12 flex flex-col gap-6 border-t border-border pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <a href="mailto:contact@allanadhealth.com" className="flex items-center gap-2 hover:text-foreground">
              <Mail className="h-4 w-4" />
              contact@allanadhealth.com
            </a>
            <a href="tel:+234 812 887 7253" className="flex items-center gap-2 hover:text-foreground">
              <Phone className="h-4 w-4" />
              +234 812 887 7253
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Lagos, Nigeria
            </span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Allanad Healthcare Alliance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
