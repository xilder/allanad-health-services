import {
	PageContainer,
	Section,
	SectionHeader,
} from "@/components/layout/page-container";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Mail, MessageCircle, Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Frequently Asked Questions",
	description:
		"Find answers to common questions about Allanad Healthcare Alliance services, booking, and more.",
};

const faqCategories = [
	{
		name: "General",
		questions: [
			{
				q: "What is Allanad Healthcare Alliance?",
				a: "Allanad Healthcare Alliance is a modern healthcare provider offering integrated services including medical consultations, nutrition and dietetics, fitness coaching, nursing care, pharmaceutical services, and diagnostics. We are committed to making quality healthcare accessible, personalized, and convenient.",
			},
			{
				q: "Where is Allanad Healthcare Alliance located?",
				a: "Our headquarters and main facilities are located in Abuja, Nigeria. We offer both in-person and virtual consultations to serve patients across the country.",
			},
			{
				q: "Is Allanad Healthcare Alliance accredited?",
				a: "Yes, our medical professionals are licensed healthcare practitioners with relevant qualifications and experience. All our services comply with healthcare regulations and standards.",
			},
			{
				q: "What makes Allanad different from other healthcare providers?",
				a: "We offer an integrated approach to healthcare that combines medical care, wellness, nutrition, fitness, and technology. Our services are personalized, convenient, and focused on prevention and long-term health outcomes.",
			},
		],
	},
	{
		name: "Services & Booking",
		questions: [
			{
				q: "How do I book an appointment?",
				a: "You can book an appointment through our booking page on the website. Simply select the service you need, choose your preferred date and time, fill in your information, and confirm your booking.",
			},
			{
				q: "What services do you offer?",
				a: "We offer medical consultations, nutrition and dietetics planning, fitness and lifestyle coaching, nursing and home care services, pharmaceutical and skincare products, and diagnostic partnerships.",
			},
			{
				q: "Do you offer virtual consultations?",
				a: "Yes, we offer both in-person and virtual consultations for many of our services. You can select your preferred mode during the booking process.",
			},
			{
				q: "How long is a typical consultation?",
				a: "Most consultations last between 30-60 minutes, depending on the complexity of your health concern. Your healthcare provider will let you know the expected duration when you book.",
			},
			{
				q: "Can I reschedule or cancel my appointment?",
				a: "Yes, you can reschedule or cancel your appointment up to 24 hours before the scheduled time through your appointment confirmation or by contacting our team.",
			},
		],
	},
	{
		name: "Pricing & Payments",
		questions: [
			{
				q: "How much do your services cost?",
				a: "Our pricing varies depending on the service. We offer flexible pricing options to make quality healthcare accessible. For specific pricing information, please contact our team or visit the service pages.",
			},
			{
				q: "Do you accept insurance?",
				a: "We are working on partnerships with major health insurance providers. Please contact us to confirm if your insurance plan is accepted.",
			},
			{
				q: "What payment methods do you accept?",
				a: "We accept various payment methods including bank transfers, card payments, and mobile money. You'll see all available options during the booking process.",
			},
			{
				q: "Is there a subscription option?",
				a: "Yes, we offer flexible subscription and membership plans for regular healthcare needs. Contact our team to learn more about available packages.",
			},
		],
	},
	{
		name: "Medical & Health",
		questions: [
			{
				q: "Is my health information kept confidential?",
				a: "Absolutely. We strictly adhere to healthcare confidentiality laws and regulations. Your medical information is secure and only shared with healthcare professionals involved in your care.",
			},
			{
				q: "Can I request medical records?",
				a: "Yes, you can request copies of your medical records. Please contact our office with your request and we'll provide them as per healthcare regulations.",
			},
			{
				q: "What should I do in a medical emergency?",
				a: "For medical emergencies, please call emergency services immediately. Allanad Healthcare Alliance services are for non-emergency healthcare needs.",
			},
			{
				q: "Do you provide prescriptions?",
				a: "Yes, our doctors can provide prescriptions as part of consultations. We also have partnerships with pharmacies for prescription fulfillment.",
			},
			{
				q: "How do I access my prescription?",
				a: "After your consultation, prescriptions are provided to you directly. You can collect medications from our pharmacy partners or have them delivered to you.",
			},
		],
	},
	{
		name: "Digital Health & Technology",
		questions: [
			{
				q: "Do you have a mobile app?",
				a: "We are currently developing our mobile app to provide seamless access to our services. You can stay updated on our website for the launch date.",
			},
			{
				q: "Can I access my health records online?",
				a: "Yes, we are building a secure patient portal where you can access your health records, appointment history, and more.",
			},
			{
				q: "What technology do you use for virtual consultations?",
				a: "We use secure, HIPAA-compliant video conferencing platforms for virtual consultations. Details will be provided in your appointment confirmation.",
			},
		],
	},
	{
		name: "Partnerships & Businesses",
		questions: [
			{
				q: "Do you offer corporate wellness programs?",
				a: "Yes, we offer customized corporate wellness programs for organizations. Contact us to discuss your company's specific needs and requirements.",
			},
			{
				q: "Can healthcare providers partner with Allanad?",
				a: "We welcome partnerships with qualified healthcare professionals and organizations. Please visit our Partners page or contact us to learn more.",
			},
			{
				q: "How can my organization use Allanad&apos;s services?",
				a: "Organizations can use our services through corporate wellness programs, employee health benefits, or bulk service packages. Contact us for partnership opportunities.",
			},
		],
	},
];

export default function FAQPage() {
	return (
		<PageContainer>
			{/* Hero Section */}
			<Section className='bg-gradient-to-b from-muted/50 to-background'>
				<div className='mx-auto max-w-3xl text-center'>
					<h1 className='text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance'>
						Frequently Asked Questions
					</h1>
					<p className='mt-6 text-lg leading-relaxed text-muted-foreground text-pretty'>
						Find answers to common questions about our services, booking,
						pricing, and more.
					</p>
				</div>
			</Section>

			{/* FAQ Content */}
			<Section className='bg-background'>
				<div className='mx-auto max-w-4xl'>
					<div className='space-y-12'>
						{faqCategories.map((category) => (
							<div key={category.name}>
								<h2 className='mb-6 text-2xl font-semibold text-foreground'>
									{category.name}
								</h2>
								<Accordion
									type='single'
									collapsible
									className='w-full space-y-2'
								>
									{category.questions.map((item, index) => (
										<AccordionItem
											key={index}
											value={`${category.name}-${index}`}
											className='border border-border/50 rounded-lg px-4 bg-card'
										>
											<AccordionTrigger className='py-4 hover:no-underline'>
												<span className='text-left font-medium text-foreground'>
													{item.q}
												</span>
											</AccordionTrigger>
											<AccordionContent className='pb-4 text-muted-foreground'>
												{item.a}
											</AccordionContent>
										</AccordionItem>
									))}
								</Accordion>
							</div>
						))}
					</div>
				</div>
			</Section>

			{/* Still Have Questions */}
			<Section className='bg-muted/30'>
				<div className='mx-auto max-w-3xl'>
					<SectionHeader
						title="Didn't Find Your Answer?"
						subtitle="We're here to help"
						align='center'
					/>
					<p className='mx-auto mb-8 max-w-2xl text-center text-base text-muted-foreground'>
						If you have a question that isn&apos;t answered here, please
						don&apos;t hesitate to reach out to our team. We&apos;re happy to
						help.
					</p>

					<div className='grid gap-6 sm:grid-cols-3'>
						<Card className='border-border/50'>
							<CardContent className='pt-6'>
								<div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
									<MessageCircle className='h-6 w-6 text-primary' />
								</div>
								<h3 className='font-semibold text-foreground'>Live Chat</h3>
								<p className='mt-2 text-sm text-muted-foreground'>
									Chat with our support team during business hours.
								</p>
								<Button
									asChild
									size='sm'
									variant='outline'
									className='mt-4 w-full'
								>
									<Link href='/contact'>Start Chat</Link>
								</Button>
							</CardContent>
						</Card>

						<Card className='border-border/50'>
							<CardContent className='pt-6'>
								<div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
									<Mail className='h-6 w-6 text-primary' />
								</div>
								<h3 className='font-semibold text-foreground'>Email Us</h3>
								<p className='mt-2 text-sm text-muted-foreground'>
									Send us an email and we&apos;ll get back to you within 24
									hours.
								</p>
								<a
									href='mailto:contact@allanadhealth.com'
									className='mt-4 inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium border border-input rounded-md hover:bg-accent'
								>
									contact@allanadhealth.com
								</a>
							</CardContent>
						</Card>

						<Card className='border-border/50'>
							<CardContent className='pt-6'>
								<div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
									<Phone className='h-6 w-6 text-primary' />
								</div>
								<h3 className='font-semibold text-foreground'>Call Us</h3>
								<p className='mt-2 text-sm text-muted-foreground'>
									Speak with our team directly by phone.
								</p>
								<a
									href='tel:+234XXXXXXXX'
									className='mt-4 inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium border border-input rounded-md hover:bg-accent'
								>
									+234 XXX XXX XXXX
								</a>
							</CardContent>
						</Card>
					</div>
				</div>
			</Section>

			{/* Important Notice */}
			<Section className='bg-background'>
				<div className='mx-auto max-w-3xl rounded-lg border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950'>
					<div className='flex gap-4'>
						<AlertCircle className='mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400' />
						<div>
							<h3 className='font-semibold text-amber-900 dark:text-amber-100'>
								Emergency Services
							</h3>
							<p className='mt-2 text-sm text-amber-800 dark:text-amber-200'>
								Allanad Healthcare Alliance provides non-emergency healthcare
								services. In case of a medical emergency, please call emergency
								services (911, 999, or your local emergency number) immediately.
								Do not use this service for emergencies.
							</p>
						</div>
					</div>
				</div>
			</Section>
		</PageContainer>
	);
}
