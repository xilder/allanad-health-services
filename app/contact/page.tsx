import { PageContainer, Section } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us",
	description:
		"Get in touch with Allanad Healthcare Alliance. We're here to answer your questions about our healthcare services and partnership opportunities.",
};

const contactInfo = [
	{
		icon: Mail,
		title: "Email",
		value: "contact@allanadhealth.com",
		href: "mailto:contact@allanadhealth.com",
	},
	{
		icon: Phone,
		title: "Phone",
		value: "+234 XXX XXX XXXX",
		href: "tel:+234XXXXXXXX",
	},
	{
		icon: MapPin,
		title: "Location",
		value: "Abuja, Nigeria",
		href: null,
	},
	{
		icon: Clock,
		title: "Hours",
		value: "Mon - Fri: 9AM - 5PM",
		href: null,
	},
];

export default function ContactPage() {
	return (
		<PageContainer>
			{/* Hero Section */}
			<Section className='bg-gradient-to-b from-muted/50 to-background'>
				<div className='mx-auto max-w-3xl text-center'>
					<h1 className='text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance'>
						Contact Us
					</h1>
					<p className='mt-6 text-lg leading-relaxed text-muted-foreground text-pretty'>
						We would be happy to hear from you. Whether you have a question,
						want to schedule a consultation, or are interested in partnership
						opportunities, our team is ready to assist.
					</p>
				</div>
			</Section>

			{/* Contact Content */}
			<Section className='bg-background'>
				<div className='mx-auto max-w-5xl'>
					<div className='grid gap-8 lg:grid-cols-3'>
						{/* Contact Form */}
						<div className='lg:col-span-2'>
							<Card className='border-border'>
								<CardHeader>
									<CardTitle>Send Us a Message</CardTitle>
									<CardDescription>
										Fill out the form below and we will get back to you as soon
										as possible.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<form className='space-y-6'>
										<div className='grid gap-4 sm:grid-cols-2'>
											<div className='space-y-2'>
												<Label htmlFor='name'>Full Name *</Label>
												<Input id='name' placeholder='John Doe' required />
											</div>
											<div className='space-y-2'>
												<Label htmlFor='email'>Email Address *</Label>
												<Input
													id='email'
													type='email'
													placeholder='john@example.com'
													required
												/>
											</div>
										</div>

										<div className='space-y-2'>
											<Label htmlFor='phone'>Phone Number</Label>
											<Input
												id='phone'
												type='tel'
												placeholder='+234 XXX XXX XXXX'
											/>
										</div>

										<div className='space-y-2'>
											<Label htmlFor='subject'>Subject</Label>
											<Input id='subject' placeholder='How can we help you?' />
										</div>

										<div className='space-y-2'>
											<Label htmlFor='message'>Message *</Label>
											<Textarea
												id='message'
												placeholder='Tell us more about your inquiry...'
												rows={5}
												required
											/>
										</div>

										<Button type='submit' size='lg' className='w-full gap-2'>
											<Send className='h-4 w-4' />
											Send Message
										</Button>
									</form>
								</CardContent>
							</Card>
						</div>

						{/* Contact Information */}
						<div className='space-y-6'>
							{/* Contact Details */}
							<Card className='border-border'>
								<CardHeader>
									<CardTitle>Contact Information</CardTitle>
								</CardHeader>
								<CardContent className='space-y-4'>
									{contactInfo.map((item) => (
										<div key={item.title} className='flex items-start gap-3'>
											<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10'>
												<item.icon className='h-5 w-5 text-primary' />
											</div>
											<div>
												<p className='text-sm font-medium text-foreground'>
													{item.title}
												</p>
												{item.href ?
													<a
														href={item.href}
														className='text-sm text-muted-foreground hover:text-primary'
													>
														{item.value}
													</a>
												:	<p className='text-sm text-muted-foreground'>
														{item.value}
													</p>
												}
											</div>
										</div>
									))}
								</CardContent>
							</Card>

							{/* WhatsApp Card */}
							<Card className='border-border bg-[#25D366]/5'>
								<CardContent className='pt-6'>
									<div className='flex items-start gap-3'>
										<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366] text-white'>
											<MessageCircle className='h-5 w-5' />
										</div>
										<div>
											<h3 className='font-semibold text-foreground'>
												WhatsApp
											</h3>
											<p className='mt-1 text-sm text-muted-foreground'>
												For quick inquiries, you can reach us directly on
												WhatsApp. Our team will respond as soon as possible.
											</p>
											<Button
												asChild
												className='mt-4 bg-[#25D366] text-white hover:bg-[#20BD5A]'
											>
												<a
													href='https://wa.me/234XXXXXXXXXX'
													target='_blank'
													rel='noopener noreferrer'
												>
													<MessageCircle className='mr-2 h-4 w-4' />
													Chat With Us
												</a>
											</Button>
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Map Placeholder */}
							<Card className='border-border overflow-hidden'>
								<div className='h-48 bg-muted flex items-center justify-center'>
									<div className='text-center'>
										<MapPin className='mx-auto h-8 w-8 text-muted-foreground/50' />
										<p className='mt-2 text-sm text-muted-foreground'>
											Abuja, Nigeria
										</p>
									</div>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</Section>
		</PageContainer>
	);
}
