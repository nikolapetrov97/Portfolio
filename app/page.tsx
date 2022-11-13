import About from "../components/About"
import ContactMe from "../components/ContactMe"
import Experience from "../components/Experience"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import { fetchExperiences } from "../utils/fetchExperiences"
import { fetchPageInfo } from "../utils/fetchPageInfo"
import { fetchProjects } from "../utils/fetchProjects"
import { fetchSkills } from "../utils/fetchSkills"
import { fetchSocials } from "../utils/fetchSocials"

async function getData() {
    const pageInfo = await fetchPageInfo()
    const projects = await fetchProjects()
    const skills = await fetchSkills()
    const experiences = await fetchExperiences()
    const socials = await fetchSocials()

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
    console.log(data);

    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll
         z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
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