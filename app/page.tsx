import About from "../components/About"
import ContactMe from "../components/ContactMe"
import Experience from "../components/Experience"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import { groq } from 'next-sanity'
import { sanityClient } from '../sanity'
import { PageInfo, Social, Experience as ExpierienceType, Project, Skill } from '../typings'

const pageInfoQuery = groq`*[_type == "pageInfo"][0]`
const skillQuery = groq`*[_type == "skill"]`
const socialQuery = groq`*[_type == "social"]`
const experienceQuery = groq`*[_type == "experience"] | order(dateStarted desc) {
    ...,
    technologies[]->
}`
const projectQuery = groq`*[_type == "project"] {
    ...,
    technologies[]->
}`
async function getData() {
    const pageInfo: PageInfo = await sanityClient.fetch(pageInfoQuery)
    const experiences: ExpierienceType[] = await sanityClient.fetch(experienceQuery)
    const projects: Project[] = await sanityClient.fetch(projectQuery)
    const skills: Skill[] = await sanityClient.fetch(skillQuery)
    const socials: Social[] = await sanityClient.fetch(socialQuery)

    return {
        pageInfo,
        projects,
        skills,
        experiences,
        socials
    }
}

async function Home() {
    const data = await getData()

    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll
         z-0 overflow-x-hidden sm:scrollbar sm:scrollbar-track-gray-400/20 sm:scrollbar-thumb-[#F7AB0A]/80">
            <Header socials={data?.socials} />
            <section id="hero" className="snap-start">
                <Hero pageInfo={data?.pageInfo} />
            </section>
            <section id="about" className="snap-center">
                <About pageInfo={data?.pageInfo} />
            </section>
            <section id="experience" className="snap-center">
                <Experience experiences={data?.experiences} />
            </section>
            <section id="skills" className="snap-start">
                <Skills skills={data?.skills} />
            </section>
            {data?.projects?.length > 0 && (
                <section id="projects" className="snap-start">
                    <Projects projects={data?.projects} />
                </section>
            )}
            <section id="contact" className="snap-start">
                <ContactMe />
            </section>
            <Footer />
        </div>
    )
}

export default Home