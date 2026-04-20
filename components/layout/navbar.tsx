"use client";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Heart, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Services", href: "/services" },
	{ name: "Book Appointment", href: "/booking" },
	{ name: "Wellness & Education", href: "/wellness" },
	{ name: "Partners", href: "/partners" },
	{ name: "Digital Health", href: "/digital-health" },
	{ name: "Contact", href: "/contact" },
];

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<nav className='container mx-auto flex h-16 items-center justify-between px-4 lg:px-8'>
				<Link href='/' className='flex items-center gap-2'>
					<Image
						className='text-primary-foreground'
						src={"/allanad.jpeg"}
						alt={"logo"}
						width={50}
						height={50}
					/>
					<span className='text-lg font-semibold tracking-tight text-foreground'>
						Allanad Healthcare
					</span>
				</Link>

				{/* Desktop Navigation */}
				<div className='hidden lg:flex lg:items-center lg:gap-6'>
					{navigation.slice(0, 6).map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
						>
							{item.name}
						</Link>
					))}
					<Button asChild size='sm' className='ml-2'>
						<Link href='/booking'>Book Consultation</Link>
					</Button>
				</div>

				{/* Mobile Navigation */}
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild className='lg:hidden'>
						<Button variant='ghost' size='icon'>
							<Menu className='h-5 w-5' />
							<span className='sr-only'>Toggle menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side='right' className='w-[300px] sm:w-[400px]'>
						<SheetTitle className='sr-only'>Navigation Menu</SheetTitle>
						<div className='flex flex-col gap-6 pt-6'>
							<Link
								href='/'
								className='flex items-center gap-2'
								onClick={() => setIsOpen(false)}
							>
								<div className='flex h-9 w-9 items-center justify-center rounded-lg bg-primary'>
									<Heart className='h-5 w-5 text-primary-foreground' />
								</div>
								<span className='text-lg font-semibold'>
									Allanad Healthcare
								</span>
							</Link>
							<div className='flex flex-col gap-4'>
								{navigation.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className='text-base font-medium text-muted-foreground transition-colors hover:text-foreground'
										onClick={() => setIsOpen(false)}
									>
										{item.name}
									</Link>
								))}
							</div>
							<Button asChild className='mt-4'>
								<Link href='/booking' onClick={() => setIsOpen(false)}>
									Book Consultation
								</Link>
							</Button>
						</div>
					</SheetContent>
				</Sheet>
			</nav>
		</header>
	);
}
