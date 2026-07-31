import React from 'react';
import Link from 'next/link';
import Logo from '../atoms/Logo';
import Button from '../atoms/Button';

export default function Navbar() {
    return (
    <nav className="navbar bg-neutral-base border-b border-neutral-border px-4 md:px-8 py-3 sticky top-0 z-50">
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
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/facilities">Facilities</Link></li>
                    <li><Link href="/export">Export</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
        <Logo />
        </div>

        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-6 font-sans text-sm font-semibold text-neutral-text">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
                <li><Link href="/facilities" className="hover:text-primary transition-colors">Facilities</Link></li>
                <li><Link href="/export" className="hover:text-primary transition-colors">Export</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
        </div>

        <div className="navbar-end gap-4 items-center">
            {/* <span className="text-sm font-bold font-sans hidden md:inline text-primary-dark">EN/ID</span> */}
            <Link href="/contact">
            <Button variant="primary" size="sm">Request Quote</Button>
            </Link>
        </div>
    </nav>
    );
}