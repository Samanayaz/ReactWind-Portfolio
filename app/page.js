/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import devImage from '../public/hero.jpg';
import design from '../public/interface2.png';
import soft from '../public/team.jpg';
import web1 from '../public/homepage2.png';
import web2 from '../public/checkout2.png';
// import resume from '../public/samanFe.pdf';
// import { Page, Document } from "react-pdf";


export default function Home() {

  return (
    <div>
      <Head>
        <title>Samans Portfolio</title>
      </Head>


      <main className="bg-white-50 px-10" >
        <section className="h-screen clearfix contents">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">UIbySaman</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              {/* <li>
                <a href="" className=" bg-gradient-to-r from-cyan-500 to-teal-500 py-2 text-white rounded-md px-4 ml-8">Resume</a>
              </li>
              <li>
                <Document file={resume}
                onLoadError={console.error}
                > <Page pageIndex={0}/>

                </Document>
              </li> */}
            </ul>
          </nav>

          <div className="text-center p-10 py-10">
            <h2 className="text-4xl py-2 text-teal-600 font-medium">Saman Ayaz Ebrahim</h2>
            <h3 className="text-xl py-2">Front End Developer | UI Designer</h3>
            <p className="uppercase text-sm">Making the interfaces more beautiful, pixel by pixel</p>
            <p className="text-medium py-5 leading-8 text-gray-800 max-w-xl mx-auto">
              A UI Developer with the extensive experience along with creative problem-solving approach and curiosity to
              create best experience for people. My knowledge of user research and design catalyzes seamless collaboration
              with different teams to create pixel perfect implementation of digital solutions.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-600">
            <a href="https://www.linkedin.com/in/saman-ayaz-205a191a3/"><AiFillLinkedin /></a>
            <a href="https://github.com/Samanayaz?tab=repositories"> <AiFillGithub /></a>
            
           
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image src={(devImage)} layout="fill" objectFit="cover" alt="girl working on computer" />
          </div>
        </section>

        <section className="lg:flex gap-10 my-10">
          <div className="text-center shadow-lg p-6 rounded-xl my-10 lg:w-2/4">
            <h3 className="text-3xl py-1 dark:text-white">Skillset</h3>

            <div className="flex flex-col xl:flex-row items-center justify-around">
              <div className="flex justify-center m-3 w-1/4">
                <Image src={(design)} />
              </div>
              <div className="w-2/4 p-4 items-end leading-8 text-gray-800 dark:text-gray-200">
                <p className="text-md py-2">
                  React · Typescript · Storybook · Material UI · SCSS · Tailwindcss · Bootstrap · HTML · CSS · JavaScript · NxtJs · Laravel · Symfony Framework · Docker · Usability Testing
                </p>
                <p className="text-sm hidden md:block">
                  User interviews · Surveys · User Interface Design · Prototyping · Qualitative Research · User Flows · Typography · Visual Accessibility Design · Wireframing · Storyboarding · Persona Creation · Comparative Analysis ·
                  Heuristic Evaluation.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center shadow-lg p-6 rounded-xl my-10 lg:w-2/4">
            <h4 className="text-2xl py-1 dark:text-white">Soft Skills</h4>
            <div className="flex flex-col-reverse xl:flex-row items-center justify-around">
              <div className="w-2/4 p-4">
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 ">
                  Clear Communication · Clean Code · Active Listening · Team collaboration · Creative problem Solving  · User Accessibility · Multiple Tasks Handling
                </p>
              </div>
              <div className="flex justify-center m-3 w-1/4 ">
                <Image src={(soft)} />
              </div>
            </div>
          </div>

        </section>


        {/* project */}

        <section>
          <div className="text-center ">
            <h3 className="text-2xl py-1 text-teal-600 font-medium">Projects</h3>

            <p>Here are few of my personally done projects</p>

          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 lg:w-1/4 ">
            
              <a href="https://samanayaz.github.io/Homepage/" target="_blank"><Image src={web1} className="rounded-sm object-cover border-2 border-solid border-black w-full h-full" /></a>
            </div>
            <div className="basis-1/3 lg:w-1/4" >
              <a href="https://samanayaz.github.io/CheckOut/" target="_blank"  ><Image src={web2} className="rounded-sm object-cover border-2 border-solid border-black w-full h-full" /></a>
            </div>
          </div>
        </section>


<section>
<div className="text-center shadow-lg p-6 rounded-xl my-10">
            <h3 className="text-2xl py-1 text-teal-600 font-medium">Contact</h3>

            <p className="uppercase text-sm">Currently available for contract or full-time work,
            and would love to hear from you</p>
<div className="py-10">
<p className="shadow-sm p-2">Email: samanmamdani@gmail.com</p>
            <p className="shadow-sm p-2">Phone: (847) 630-2658</p>
            <p className="shadow-sm p-2">Location: Chicago, Illinois</p>
</div>
    

          </div>
</section>
      </main>
    </div>
  );
}
