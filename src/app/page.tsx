import About from '@/components/About'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Heading2 from '@/components/ui/Heading2'

export default function Home() {
    return (
        <main className="flex max-w-7xl mx-auto flex-col px-6">
            <Section id="hero" className="pt-0">
                <Hero />
            </Section>
            <Section id="about">
                <About />
            </Section>
            <Section id="projects">
                <Heading2>Projects</Heading2>
            </Section>
            <Section id="experience">
                <Experience />
            </Section>
            <Section id="contact">
                <Heading2>Get In Touch</Heading2>
            </Section>
        </main>
    )
}
