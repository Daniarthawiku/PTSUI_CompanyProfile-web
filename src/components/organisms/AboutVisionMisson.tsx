import Section from "../templates/Section";
import FadeIn from "../atoms/framer/FadeIn";
import TextReveal from "../atoms/framer/TextReveal";
import Typography from "../atoms/Typography";

export default function AboutVisionMisson(){
    return (
        <Section bgClass="bg-primary-dark">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <FadeIn direction="right" delay={0.1}>
                    <TextReveal className="flex flex-col gap-4 p-8 border-l-2 border-primary-soft">
                        <Typography variant="custom" className="font-serif text-3xl font-medium text-neutral-base">Our Vision</Typography>
                        <Typography variant="custom" className="font-sans text-lg leading-[1.6] text-neutral-base/90">
                            To be the premier global standard in sustainable industrial timber manufacturing, proving that uncompromising 
                            precision can coexist with profound environmental stewardship.
                        </Typography>
                    </TextReveal>
                </FadeIn>

                <FadeIn direction="left" delay={0.1}>
                    <TextReveal className="flex flex-col gap-4 p-8 border-l-2 border-primary-soft">
                        <Typography variant="custom" className="font-serif text-3xl font-medium text-neutral-base">Our Mission</Typography>
                        <Typography variant="custom" className="font-sans text-lg leading-[1.6] text-neutral-base/90">
                            We engineer high-performance wood products through rigorous quality control, empower our local workforce with 
                            world-class technical expertise, and strictly adhere to international ecological compliance protocols.
                        </Typography>
                    </TextReveal>
                </FadeIn>
            </div>
        </Section>
    );
}