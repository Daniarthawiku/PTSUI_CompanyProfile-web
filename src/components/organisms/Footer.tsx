import React from 'react';
import Link from 'next/link';
import Logo from '../atoms/Logo';
import Typography from '../atoms/Typography';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
    <footer className="bg-primary-base text-neutral-base py-8 px-6 md:px-12 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8 
        border-b border-primary-mid pb-4">
        
        {/* left side: Logo & Copyright */}
            <div className="flex flex-col gap-4">
                <Logo isDarkTheme={true} />
                <Typography variant="caption">
                    © {currentYear} PT. Sahabat Utama Industri. All Rights Reserved.
                    <br />
                    ISO 9001 & SVLK Certified.
                </Typography>
            </div>
        
        {/* right side: legals */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
                <div className="flex flex-col gap-3 text-sm">
                    <Typography variant="h4" className="uppercase tracking-wider">Corporate</Typography>
                    <Link href="#" className="text-neutral-text hover:text-primary-soft transition-colors">Legal Compliance</Link>
                    <Link href="#" className="text-neutral-text hover:text-primary-soft transition-colors">Privacy Policy</Link>
                </div>
            
                <div className="flex flex-col gap-3 text-sm font-sans">
                    <Typography variant="h4" className="uppercase tracking-wider">Navigation</Typography>
                    <Link href="#" className="text-neutral-text hover:text-primary-soft transition-colors">Global Export Terms</Link>
                    <Link href="#" className="text-neutral-text hover:text-primary-soft transition-colors">Sitemap</Link>
                </div>
            </div>
        </div>
    </footer>
    );
}