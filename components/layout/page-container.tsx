import { cn } from "@/lib/utils"
import React from "react"

interface PageContainerProps {
  children: React.ReactNode
  className?: string
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <main className={cn("min-h-screen", className)}>
      {children}
    </main>
  )
}

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 lg:py-24", className)}>
      <div className="container mx-auto px-4 lg:px-8">
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
  align?: "left" | "center"
}

export function SectionHeader({ title, subtitle, className, align = "center" }: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-12",
      align === "center" && "text-center",
      className
    )}>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground lg:text-4xl text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-pretty mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
