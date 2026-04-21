import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const lora = Lora({
	subsets: ["latin"],
	variable: "--font-lora",
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		default:
			"Allanad Healthcare Alliance | Compassionate Healthcare. Intelligent Systems.",
		template: "%s | Allanad Healthcare Alliance",
	},
	description:
		"Allanad Healthcare Alliance provides accessible, patient-centered healthcare services and digital health solutions designed for the future of medicine.",
	keywords: [
		"healthcare",
		"digital health",
		"preventive care",
		"wellness",
		"telemedicine",
		"Abuja",
		"Nigeria",
		"health consultations",
	],
	authors: [{ name: "Allanad Healthcare Alliance" }],
	creator: "Allanad Healthcare Alliance",
	openGraph: {
		type: "website",
		locale: "en_NG",
		url: "https://allanadhealth.com",
		siteName: "Allanad Healthcare Alliance",
		title:
			"Allanad Healthcare Alliance | Compassionate Healthcare. Intelligent Systems.",
		description:
			"Accessible, patient-centered healthcare services and digital health solutions.",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Allanad Healthcare Alliance",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Allanad Healthcare Alliance",
		description:
			"Accessible, patient-centered healthcare services and digital health solutions.",
		images: ["/og-image.jpg"],
	},
	robots: {
		index: true,
		follow: true,
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#f8fafc" },
		{ media: "(prefers-color-scheme: dark)", color: "#1e293b" },
	],
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={`${inter.variable} ${lora.variable}`}>
			<body className='font-sans antialiased'>
				<Navbar />
				{children}
				<Footer />
				<WhatsAppButton />
				<Analytics />
			</body>
		</html>
	);
}
