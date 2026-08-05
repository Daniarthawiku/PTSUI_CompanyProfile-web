"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '../atoms/Logo';
import Button from '../atoms/Button';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useNavbarScroll } from '@/lib/useNavbarScroll';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Export', href: '/export' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);
    const navY = useNavbarScroll(80);

    return (
    <motion.nav
        style={{ y: navY }}
        className="navbar bg-neutral-base border-b border-neutral-border px-4 md:px-8 py-3 fixed top-0 w-full z-50 h-[80px]"
    >
        <div className="navbar-start">
            {/* dropdown for mobile */}
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" 
                    stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral-base 
                rounded-none w-52 text-neutral-text font-semibold font-sans">
                    {NAV_LINKS.map((link) => (
                        <li key={`mobile-${link.name}`}>
                            <Link href={link.href} className={pathname === link.href ? 'text-primary-dark font-bold' : ''}>
                            `{link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Logo />
        </div>

        <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-4 font-sans text-sm font-semibold text-neutral-text relative">
                {NAV_LINKS.map((link) => {
                    const isActive = pathname === link.href;
                    const isHovered = hoveredPath === link.href;

                    return (
                    <li 
                    key={link.name} 
                    className="relative px-3 py-2 cursor-pointer"
                    onMouseEnter={() => setHoveredPath(link.href)}
                    onMouseLeave={() => setHoveredPath(null)} >
                        
                        <Link 
                        href={link.href} 
                        className={`relative z-10 transition-colors duration-300 ${
                        isActive || isHovered ? 'text-primary-dark' : 'text-neutral-text'}`}>
                            {link.name}
                        </Link>

                            {/* active border & sliding hover */}
                            {(isHovered || (isActive && hoveredPath === null)) && (
                                <motion.div
                                layoutId="nav-indicator"
                                className="absolute bottom-0 left-0 w-full h-[3px] bg-primary"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 45,
                            }}/>

                        )}
                    </li>
                    );
                })}
            </ul>
        </div>
        
        <div className="navbar-end gap-4 items-center">
            <span className="text-sm font-bold font-sans hidden md:inline text-primary-dark">EN/ID</span>
            <Link href="/contact">
                <Button variant="primary" size="sm">Request Quote</Button>
            </Link>
        </div>
    </motion.nav>
    );
}