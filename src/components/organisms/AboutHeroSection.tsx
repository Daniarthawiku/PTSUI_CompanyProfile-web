import Section from "../templates/Section";
import FadeIn from "../atoms/framer/FadeIn";
import Typography from "../atoms/Typography";
import Badge from "../atoms/Badge";
import Image from "next/image";

export default function AboutHeroSection(){
    return (
        <Section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center py-8">
            <div className="col-span-1 md:col-span-7 flex flex-col gap-8">
                <FadeIn direction="up">
                    <Typography variant="h1">
                        Crafting Nature’s Precision for Global Industry.
                    </Typography>
                    </FadeIn>
                    
                    <FadeIn direction="up" delay={0.1}>
                        <Typography variant="body" className="max-w-2xl">
                            For over 10+ years, PT. Sahabat Utama Industri has transformed raw, sustainable timber into the structural 
                            backbone of international trade. We are the architects of reliability.
                        </Typography>
                    </FadeIn>
                    
                    <FadeIn direction="up" delay={0.2}>
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <Badge>Est. 2015</Badge>
                            <Badge>ISO 9001 Certified</Badge>
                        </div>
                    </FadeIn>
                </div>
        
                <div className="col-span-1 md:col-span-5 h-[400px] w-full overflow-hidden bg-surface-card
                relative mt-stack-lg md:mt-0">
                    <FadeIn direction="left" delay={0.3} className="w-full h-full">
                        <Image 
                        src="/images/about/about-sanding.webp" 
                        alt="Timber processing facility" 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority/>
                    </FadeIn>
                </div>
        </Section>
    );
}