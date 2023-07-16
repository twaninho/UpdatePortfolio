import React from 'react'
import SocialButton from './SocialButton'
import  Github from "../public/github.svg";
import Instagram from '../public/instagram.svg';
import Twitter from '../public/twitter.svg';
import Linkedin from '../public/linkedin.svg';

const Contact = () => {
  return (
    <div className="h-[25rem] rounded-3xl p-10 flex flex-col bg-[url('/gradient-bg.jpg')] bg-cover">
            <h1 className="sm:text-4xl text-2xl font-semibold mb-6">Want to work together?</h1>
            <p className='mb-3'>Feel free to reach out for collaborations or just a friendly hello
            </p>
            <p className="sm:flex-1 flex-[0.8]">Twanjhopmans@hotmail.com</p>
            <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
              <button className="bg-black text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto">Contact me</button>
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
  )
}

export default Contact
