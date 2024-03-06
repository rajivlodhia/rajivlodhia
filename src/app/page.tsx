import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Section from '@/components/Section'

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
                <Projects />
            </Section>
            <Section id="experience">
                <Experience />
            </Section>
            <Section id="contact">
                <Contact />
            </Section>
        </main>
    )
}
