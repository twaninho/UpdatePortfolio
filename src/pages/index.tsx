import Head from "next/head";
import Navbar from "../../components/Navbar";
import SocialButton from "../../components/SocialButton";
import  Github from "../../public/github.svg";
import Instagram from '../../public/instagram.svg';
import Twitter from '../../public/twitter.svg';
import Linkedin from '../../public/linkedin.svg';
import ProjectPreview from "../../components/ProjectPreview";
import Contact from "../../components/Contact";


export default function Home() {


  return (
    <>
      <Head>
        <title>Portfolio — Twan Hopmans</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      
      <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
          <div className="sm:h-[30rem] h-[25rem] rounded-3xl p-10 flex flex-col gap-16 bg-[url('/gradient-bg.jpg')] bg-cover">
            <h1 className="sm:text-4xl text-2xl font-semibold">Hello, I'm a Web Developer with 6 months of experience.</h1>
            <p className="flex-1">I care a lot about using design for positive impact and enjoy
              creating user-centric, delightful, and human experiences.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
              <a href="#contact">
              <button className="bg-black text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto hover:bg-button transition-all ease-in-out duration-300">Contact me</button>
              </a>
              <div className="lg:flex items-center gap-4 hidden">
                <SocialButton bgColor="github" socialLink="https://github.com/twaninho">
                  <Github className="w-8 h-8"/>
                </SocialButton>
                <SocialButton bgColor="instagram" socialLink="https://www.instagram.com/">
                  <Instagram className="w-5 h-5"/>
                </SocialButton>
                <SocialButton bgColor="twitter" socialLink="https://twitter.com/FifaIBRA">
                  <Twitter className="w-5 h-5"/>
                </SocialButton>
                <SocialButton bgColor="linkedin" socialLink="https://www.linkedin.com/in/twan-hopmans-9680b9175/">
                  <Linkedin className="w-5 h-5"/>
                </SocialButton>
              </div>
            </div>
          </div>
          <div className="h-[30rem] rounded-3xl p-8 bg-[url('/profile.jpg')] bg-cover"/>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4" id="projects">
        <ProjectPreview 
        name = "Metaversus"
        description = "Welcome to the metaverse"
        imageUrl = "/metaverse.png"
        bgColor = "#685cdd"
        dark
        websiteUrl = "https://twan-metaverse.netlify.app/"
        />
        <ProjectPreview 
        name = "Sushiman"
        description = "Culinary art perfected"
        imageUrl = "/sushi.png"
        bgColor = "#FCD9CE"
        websiteUrl = "https://sushi-twan.netlify.app/"
        />
        <ProjectPreview 
        name = "Shoppy"
        description = "Empowering global consumer access"
        imageUrl = "/chart.png"
        websiteUrl = "https://shoppy-twan.netlify.app/"
        />
        <ProjectPreview 
        name = "Netflix"
        description = "Binge-worthy stories, endless delight"
        imageUrl = "/Netflix.png"
        bgColor = "#3A3636"
        dark
        websiteUrl = "https://twan-metaverse.netlify.app/"
        />
        <ProjectPreview 
        name = "Fitclub"
        description = "Unleash your inner strength"
        imageUrl = "/Gym.png"
        websiteUrl = "https://fitclub-twan.netlify.app/"
        />
        <ProjectPreview 
        name = "Omnifood"
        description = "Welcome to the metaverse"
        imageUrl = "/food.png"
        websiteUrl = "https://twan-metaverse.netlify.app/"
        bgColor="#F7B26E"
        />
      </section>

      <footer>
      <Contact />
      </footer>
    </>
  );
}
