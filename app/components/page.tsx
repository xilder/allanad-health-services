"use client"

import { useState } from "react"
import { PageContainer, Section, SectionHeader } from "@/components/layout/page-container"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
import { 
  CardSkeleton, 
  ServiceCardSkeleton, 
  TestimonialSkeleton,
  TeamMemberSkeleton,
  ArticleCardSkeleton,
  FormSkeleton,
  PageHeaderSkeleton
} from "@/components/ui/loading-skeletons"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Toggle } from "@/components/ui/toggle"
import { Spinner } from "@/components/ui/spinner"
import { 
  Empty, 
  EmptyHeader, 
  EmptyTitle, 
  EmptyDescription, 
  EmptyContent,
  EmptyMedia 
} from "@/components/ui/empty"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { 
  Heart, 
  Shield, 
  Stethoscope, 
  ArrowRight, 
  Calendar, 
  Mail, 
  Phone, 
  Bold, 
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Info,
  AlertCircle,
  Search,
  Inbox,
  Plus,
  User,
  Settings
} from "lucide-react"

export default function ComponentsPage() {
  const [progress, setProgress] = useState(45)
  const [sliderValue, setSliderValue] = useState([50])
  const [switchOn, setSwitchOn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <PageContainer>
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance">
            Component Showcase
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Reference page displaying all reusable UI components with their variants for the Allanad Healthcare Alliance website.
          </p>
        </div>
      </Section>

      {/* Navigation */}
      <Section className="bg-background py-4 border-b sticky top-16 z-40">
        <div className="flex flex-wrap gap-2">
          {["Buttons", "Cards", "Badges", "Alerts", "Forms", "Toggles", "Progress", "Dialogs", "Accordions", "Avatars", "Empty States", "Loading", "Typography", "Colors"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm px-3 py-1 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </Section>

      {/* Buttons */}
      <Section id="buttons" className="bg-background">
        <SectionHeader title="Buttons" subtitle="Interactive button components with multiple variants and sizes" align="left" />
        
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-medium mb-3 text-muted-foreground">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-sm font-medium mb-3 text-muted-foreground">Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-sm font-medium mb-3 text-muted-foreground">Icon Buttons</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="icon-sm"><Heart className="h-4 w-4" /></Button>
              <Button size="icon"><Heart className="h-4 w-4" /></Button>
              <Button size="icon-lg"><Heart className="h-5 w-5" /></Button>
              <Button variant="outline" size="icon"><Settings className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon"><Search className="h-4 w-4" /></Button>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-sm font-medium mb-3 text-muted-foreground">With Icons</h3>
            <div className="flex flex-wrap gap-4">
              <Button className="gap-2">
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Button>
              <Button variant="outline" className="gap-2">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="secondary" className="gap-2">
                <Mail className="h-4 w-4" />
                Contact Us
              </Button>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-sm font-medium mb-3 text-muted-foreground">States</h3>
            <div className="flex flex-wrap gap-4">
              <Button disabled>Disabled</Button>
              <Button 
                onClick={() => {
                  setIsLoading(true)
                  setTimeout(() => setIsLoading(false), 2000)
                }}
                disabled={isLoading}
              >
                {isLoading && <Spinner className="mr-2" />}
                {isLoading ? "Loading..." : "Click to Load"}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Cards */}
      <Section id="cards" className="bg-muted/30">
        <SectionHeader title="Cards" subtitle="Container components for grouping related content" align="left" />
        
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Service Card</CardTitle>
              <CardDescription>With icon header</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Description of the service with relevant details and information.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="h-auto p-0">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Basic Card</CardTitle>
              <CardDescription>Standard card layout</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Card content goes here. Can contain any elements including text, images, or forms.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/30 bg-primary/5">
            <CardHeader>
              <CardTitle>Highlighted Card</CardTitle>
              <CardDescription>With accent styling</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Use border and background colors to highlight important cards.
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button size="sm">Primary</Button>
              <Button size="sm" variant="outline">Secondary</Button>
            </CardFooter>
          </Card>
        </div>
      </Section>

      {/* Badges */}
      <Section id="badges" className="bg-background">
        <SectionHeader title="Badges" subtitle="Small status indicators and labels" align="left" />
        
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-3 text-muted-foreground">Variants</h3>
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-sm font-medium mb-3 text-muted-foreground">With Icons</h3>
            <div className="flex flex-wrap gap-3">
              <Badge><Heart className="h-3 w-3" /> Featured</Badge>
              <Badge variant="secondary"><Calendar className="h-3 w-3" /> New</Badge>
              <Badge variant="outline"><Info className="h-3 w-3" /> Info</Badge>
              <Badge variant="destructive"><AlertCircle className="h-3 w-3" /> Alert</Badge>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-sm font-medium mb-3 text-muted-foreground">Use Cases</h3>
            <div className="flex flex-wrap gap-3">
              <Badge>Preventive Care</Badge>
              <Badge variant="secondary">Corporate Wellness</Badge>
              <Badge variant="outline">Digital Health</Badge>
              <Badge>In Stock</Badge>
              <Badge variant="destructive">Urgent</Badge>
            </div>
          </div>
        </div>
      </Section>

      {/* Alerts */}
      <Section id="alerts" className="bg-muted/30">
        <SectionHeader title="Alerts" subtitle="Contextual feedback messages" align="left" />
        
        <div className="space-y-4 max-w-2xl">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              This is a default alert for general information messages.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              This is a destructive alert for error messages and warnings.
            </AlertDescription>
          </Alert>
        </div>
      </Section>

      {/* Form Elements */}
      <Section id="forms" className="bg-background">
        <SectionHeader title="Form Elements" subtitle="Input fields and form controls" align="left" />
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="demo-input">Text Input</Label>
              <Input id="demo-input" placeholder="Enter text here" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="demo-email">Email Input</Label>
              <Input id="demo-email" type="email" placeholder="email@example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="demo-password">Password Input</Label>
              <Input id="demo-password" type="password" placeholder="Enter password" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="demo-disabled">Disabled Input</Label>
              <Input id="demo-disabled" placeholder="Disabled state" disabled />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="demo-select">Select</Label>
              <Select>
                <SelectTrigger id="demo-select">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="demo-textarea">Textarea</Label>
              <Textarea id="demo-textarea" placeholder="Enter longer text here..." rows={4} />
            </div>
          </div>
        </div>
      </Section>

      {/* Toggles & Selections */}
      <Section id="toggles" className="bg-muted/30">
        <SectionHeader title="Toggles & Selections" subtitle="Interactive selection controls" align="left" />
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium mb-4 text-muted-foreground">Switch</h3>
              <div className="flex items-center gap-4">
                <Switch id="switch-demo" checked={switchOn} onCheckedChange={setSwitchOn} />
                <Label htmlFor="switch-demo">Enable notifications</Label>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-sm font-medium mb-4 text-muted-foreground">Checkboxes</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Checkbox id="check1" defaultChecked />
                  <Label htmlFor="check1">Accept terms and conditions</Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="check2" />
                  <Label htmlFor="check2">Subscribe to newsletter</Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="check3" disabled />
                  <Label htmlFor="check3" className="text-muted-foreground">Disabled option</Label>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium mb-4 text-muted-foreground">Radio Group</h3>
              <RadioGroup defaultValue="option1">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="option1" id="r1" />
                  <Label htmlFor="r1">In-Person Consultation</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="option2" id="r2" />
                  <Label htmlFor="r2">Virtual Consultation</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="option3" id="r3" />
                  <Label htmlFor="r3">Phone Consultation</Label>
                </div>
              </RadioGroup>
            </div>

            <Separator />

            <div>
              <h3 className="text-sm font-medium mb-4 text-muted-foreground">Toggle Buttons</h3>
              <div className="flex flex-wrap gap-2">
                <Toggle aria-label="Toggle bold">
                  <Bold className="h-4 w-4" />
                </Toggle>
                <Toggle aria-label="Toggle italic">
                  <Italic className="h-4 w-4" />
                </Toggle>
                <Toggle aria-label="Toggle underline">
                  <Underline className="h-4 w-4" />
                </Toggle>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <Toggle variant="outline" aria-label="Align left">
                  <AlignLeft className="h-4 w-4" />
                </Toggle>
                <Toggle variant="outline" aria-label="Align center">
                  <AlignCenter className="h-4 w-4" />
                </Toggle>
                <Toggle variant="outline" aria-label="Align right">
                  <AlignRight className="h-4 w-4" />
                </Toggle>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Progress & Sliders */}
      <Section id="progress" className="bg-background">
        <SectionHeader title="Progress & Sliders" subtitle="Visual indicators for progress and range selection" align="left" />
        
        <div className="space-y-8 max-w-xl">
          <div>
            <h3 className="text-sm font-medium mb-4 text-muted-foreground">Progress Bar</h3>
            <div className="space-y-4">
              <Progress value={progress} />
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => setProgress(Math.max(0, progress - 10))}>-10</Button>
                <Button size="sm" variant="outline" onClick={() => setProgress(Math.min(100, progress + 10))}>+10</Button>
                <span className="text-sm text-muted-foreground ml-2">{progress}%</span>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-sm font-medium mb-4 text-muted-foreground">Progress States</h3>
            <div className="space-y-3">
              <div>
                <span className="text-xs text-muted-foreground">0%</span>
                <Progress value={0} className="mt-1" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground">25%</span>
                <Progress value={25} className="mt-1" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground">50%</span>
                <Progress value={50} className="mt-1" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground">75%</span>
                <Progress value={75} className="mt-1" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground">100%</span>
                <Progress value={100} className="mt-1" />
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-sm font-medium mb-4 text-muted-foreground">Slider</h3>
            <div className="space-y-4">
              <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
              <span className="text-sm text-muted-foreground">Value: {sliderValue[0]}</span>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-sm font-medium mb-4 text-muted-foreground">Spinner</h3>
            <div className="flex items-center gap-4">
              <Spinner />
              <Spinner className="size-6" />
              <Spinner className="size-8" />
              <Spinner className="size-10 text-primary" />
            </div>
          </div>
        </div>
      </Section>

      {/* Dialogs & Tooltips */}
      <Section id="dialogs" className="bg-muted/30">
        <SectionHeader title="Dialogs & Tooltips" subtitle="Overlay components for additional context" align="left" />
        
        <div className="flex flex-wrap gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Book an Appointment</DialogTitle>
                <DialogDescription>
                  Schedule a consultation with one of our healthcare specialists.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-dialog">Email</Label>
                  <Input id="email-dialog" type="email" placeholder="Enter your email" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Confirm Booking</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover for Tooltip</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a tooltip with helpful information</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Info className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Click for more details</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </Section>

      {/* Tabs */}
      <Section className="bg-background">
        <SectionHeader title="Tabs" subtitle="Organize content into switchable panels" align="left" />
        
        <Tabs defaultValue="overview" className="max-w-2xl">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
                <CardDescription>General information about our healthcare services.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Allanad Healthcare Alliance provides comprehensive healthcare solutions tailored to your needs.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="features" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Features</CardTitle>
                <CardDescription>Key features of our platform.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>24/7 Virtual Consultations</li>
                  <li>Personalized Health Plans</li>
                  <li>AI-Powered Health Insights</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="pricing" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Pricing</CardTitle>
                <CardDescription>Flexible plans for individuals and organizations.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Contact us for customized pricing based on your healthcare needs.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Section>

      {/* Accordions */}
      <Section id="accordions" className="bg-muted/30">
        <SectionHeader title="Accordions" subtitle="Collapsible content sections" align="left" />
        
        <Accordion type="single" collapsible className="max-w-2xl">
          <AccordionItem value="item-1">
            <AccordionTrigger>What services do you offer?</AccordionTrigger>
            <AccordionContent>
              We offer preventive care, virtual consultations, corporate wellness programs, and digital health consulting services tailored to individual and organizational needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do I book an appointment?</AccordionTrigger>
            <AccordionContent>
              You can book an appointment through our online booking system, call our office directly, or reach out via WhatsApp for immediate assistance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do you accept insurance?</AccordionTrigger>
            <AccordionContent>
              Yes, we accept most major insurance providers. Please contact our billing department for specific coverage information.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      {/* Avatars */}
      <Section id="avatars" className="bg-background">
        <SectionHeader title="Avatars" subtitle="User profile images with fallback states" align="left" />
        
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-4 text-muted-foreground">Sizes</h3>
            <div className="flex items-end gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop" alt="Doctor" />
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop" alt="Doctor" />
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12">
                <AvatarImage src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop" alt="Doctor" />
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop" alt="Doctor" />
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-sm font-medium mb-4 text-muted-foreground">Fallback States</h3>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-sm font-medium mb-4 text-muted-foreground">Avatar Stack</h3>
            <div className="flex -space-x-2">
              <Avatar className="border-2 border-background">
                <AvatarImage src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop" alt="Team member" />
                <AvatarFallback>T1</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background">
                <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop" alt="Team member" />
                <AvatarFallback>T2</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background">
                <AvatarImage src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop" alt="Team member" />
                <AvatarFallback>T3</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background">
                <AvatarFallback className="text-xs">+5</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </Section>

      {/* Empty States */}
      <Section id="empty-states" className="bg-muted/30">
        <SectionHeader title="Empty States" subtitle="Placeholder content for empty data views" align="left" />
        
        <div className="grid gap-6 md:grid-cols-2">
          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Inbox />
              </EmptyMedia>
              <EmptyTitle>No appointments</EmptyTitle>
              <EmptyDescription>
                You have no upcoming appointments scheduled.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Book Appointment
              </Button>
            </EmptyContent>
          </Empty>

          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Search />
              </EmptyMedia>
              <EmptyTitle>No results found</EmptyTitle>
              <EmptyDescription>
                Try adjusting your search or filter to find what you are looking for.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button variant="outline">Clear Filters</Button>
            </EmptyContent>
          </Empty>
        </div>
      </Section>

      {/* Loading Skeletons */}
      <Section id="loading" className="bg-background">
        <SectionHeader title="Loading Skeletons" subtitle="Placeholder components while content loads" align="left" />
        
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-medium mb-4 text-muted-foreground">Page Header</h3>
            <PageHeaderSkeleton />
          </div>

          <Separator />

          <div>
            <h3 className="text-sm font-medium mb-4 text-muted-foreground">Card Skeleton</h3>
            <div className="max-w-sm">
              <CardSkeleton />
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-sm font-medium mb-4 text-muted-foreground">Service Cards</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <ServiceCardSkeleton />
              <ServiceCardSkeleton />
              <ServiceCardSkeleton />
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-sm font-medium mb-4 text-muted-foreground">Testimonials</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <TestimonialSkeleton />
              <TestimonialSkeleton />
              <TestimonialSkeleton />
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-sm font-medium mb-4 text-muted-foreground">Team Members</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <TeamMemberSkeleton />
              <TeamMemberSkeleton />
              <TeamMemberSkeleton />
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-sm font-medium mb-4 text-muted-foreground">Article Cards</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <ArticleCardSkeleton />
              <ArticleCardSkeleton />
              <ArticleCardSkeleton />
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-sm font-medium mb-4 text-muted-foreground">Form</h3>
            <div className="max-w-md">
              <FormSkeleton />
            </div>
          </div>
        </div>
      </Section>

      {/* Typography */}
      <Section id="typography" className="bg-muted/30">
        <SectionHeader title="Typography" subtitle="Text styles and hierarchy" align="left" />
        
        <div className="space-y-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Heading 1 (H1)</h1>
              <code className="mt-2 text-xs text-muted-foreground block">text-4xl sm:text-5xl font-semibold tracking-tight</code>
            </div>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Heading 2 (H2)</h2>
              <code className="mt-2 text-xs text-muted-foreground block">text-3xl font-semibold tracking-tight</code>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Heading 3 (H3)</h3>
              <code className="mt-2 text-xs text-muted-foreground block">text-2xl font-semibold</code>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Heading 4 (H4)</h4>
              <code className="mt-2 text-xs text-muted-foreground block">text-xl font-semibold</code>
            </div>
            <div>
              <h5 className="text-lg font-medium">Heading 5 (H5)</h5>
              <code className="mt-2 text-xs text-muted-foreground block">text-lg font-medium</code>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Body Large - Used for introductions and important paragraphs. The leading is relaxed for better readability.
              </p>
              <code className="mt-2 text-xs text-muted-foreground block">text-lg leading-relaxed text-muted-foreground</code>
            </div>
            <div>
              <p className="text-base text-muted-foreground">
                Body Default - Standard paragraph text used throughout the site for most content.
              </p>
              <code className="mt-2 text-xs text-muted-foreground block">text-base text-muted-foreground</code>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Body Small - Used for captions, labels, and secondary information.
              </p>
              <code className="mt-2 text-xs text-muted-foreground block">text-sm text-muted-foreground</code>
            </div>
          </div>
        </div>
      </Section>

      {/* Colors */}
      <Section id="colors" className="bg-background">
        <SectionHeader title="Color Palette" subtitle="Theme colors used throughout the site" align="left" />
        
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="h-20 rounded-lg bg-primary" />
            <p className="mt-2 text-sm font-medium">Primary</p>
            <p className="text-xs text-muted-foreground">bg-primary</p>
          </div>
          <div>
            <div className="h-20 rounded-lg bg-secondary" />
            <p className="mt-2 text-sm font-medium">Secondary</p>
            <p className="text-xs text-muted-foreground">bg-secondary</p>
          </div>
          <div>
            <div className="h-20 rounded-lg bg-accent" />
            <p className="mt-2 text-sm font-medium">Accent</p>
            <p className="text-xs text-muted-foreground">bg-accent</p>
          </div>
          <div>
            <div className="h-20 rounded-lg bg-muted" />
            <p className="mt-2 text-sm font-medium">Muted</p>
            <p className="text-xs text-muted-foreground">bg-muted</p>
          </div>
          <div>
            <div className="h-20 rounded-lg bg-background border border-border" />
            <p className="mt-2 text-sm font-medium">Background</p>
            <p className="text-xs text-muted-foreground">bg-background</p>
          </div>
          <div>
            <div className="h-20 rounded-lg bg-card border border-border" />
            <p className="mt-2 text-sm font-medium">Card</p>
            <p className="text-xs text-muted-foreground">bg-card</p>
          </div>
          <div>
            <div className="h-20 rounded-lg bg-foreground" />
            <p className="mt-2 text-sm font-medium">Foreground</p>
            <p className="text-xs text-muted-foreground">bg-foreground</p>
          </div>
          <div>
            <div className="h-20 rounded-lg bg-destructive" />
            <p className="mt-2 text-sm font-medium">Destructive</p>
            <p className="text-xs text-muted-foreground">bg-destructive</p>
          </div>
        </div>
      </Section>
    </PageContainer>
  )
}
