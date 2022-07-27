import { motion, useTransform, useViewportScroll } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import ShitIKnow from '../components/ShitIKnow'
import TypeOut from '../components/TypeOut'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import CmdTick from '../components/CmdTick'

const Home: NextPage = () => {
  let textGradient = 'text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-red-500 to-orange-500'
  let switcharoo = ['enterprises', 'startups', 'business', 'individuals']
  const [blade, setBlade] = useState(0)
  const [toasts, setToasts] = useState("")
  useEffect(() => {
    const interval = setInterval(() => {
      setBlade(blade => (blade + 1) % 4)
    }, 5000)
  }, [])
  const toast = (t: string) => {
    setToasts(t)
    setTimeout(() => {
      setToasts("copied ")
      setTimeout(() => {
        setToasts("")
      }, 200)
    }, 1000)
  }
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  return (
    <div className='min-h-screen bg-gray-900'>
      <Head>
        <title>My Epic Portfolio</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans" />
      </Head>
      <div className='h-screen flex flex-col mb-px'>
        <NavBar />
        <div className='flex-1 flex flex-col'>
          <div className='flex flex-col justify-center items-center flex-1'>
            <h1 className='text-5xl xl:text-8xl font-bold text-white text-center'>The developer<br/>for <span className={textGradient}>{switcharoo[blade]}</span></h1>
            <p className='text-gray-400 text-xl xl:text-3xl p-5'>It{`'`}s my portfolio (cool ain{`'`}t it)</p>
            <div className='p-3 flex h-20'>
              <motion.a href="https://www.toptal.com/resume/marko-pekas" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className="cursor-pointer h-full mx-2 flex items-center justify-center rounded-md select-none bg-gradient-to-r from-pink-400 to-red-600  text-white font-semibold px-5 text-xl">Toptal</motion.a>
              <Link href="/contacts"><motion.a whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className="cursor-pointer h-full mx-2 flex items-center justify-center rounded-md select-none border border-white  text-white font-semibold px-5 text-xl">Contact Me</motion.a></Link>
            </div>
          </div>
          <div className='flex flex-col items-center pb-14'>
            <p className='text-gray-500 p-2'>Has Mastered</p>
            <ShitIKnow />
          </div>
        </div>
      </div>
      <div className='h-[65vh] xl:h-[50vh] flex flex-col xl:flex-row xl:px-80'>
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -40 }
        }}
        className='h-full flex-1 xl:p-10 px-10 flex flex-col justify-center'>
          <p className='py-5 text-gray-400'><TypeOut text="// Anime Workout Program 5.0.1" /> </p>
          <p className='text-5xl text-white font-semibold'>Full Stack <span className={textGradient}>Development</span></p>
          <p className='py-4 text-xl text-gray-400'>Next Js, Prisma, Tailwind, Framer Motion. The perfect blend of tools.</p>
        </motion.div>
        <div className='h-full flex-1 xl:p-10 px-10 flex flex-col justify-center'>
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 40 }
        }} className='rounded-t-md p-5 bg-gradient-to-tr from-gray-900 to-black h-full -mb-40 shadow-2xl bg-center bg-cover' style={{backgroundImage: `url('/portfolio5.png')`}}>

          </motion.div>
        </div>
      </div>
      <div className='h-screen bg-white flex flex-col' id='framer'>
        <div className='xl:py-28 pt-28 pb-5 text-gray-900 flex justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <motion.path style={{pathLength: scale}} d="M6 15h12l-12 -12h12v6h-12v6l6 6v-6" />
          </svg>
        </div>
        <motion.p 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 }
        }} className='xl:text-6xl text-3xl font-semibold text-center'> Animated With <span className={textGradient}>Framer Motion</span></motion.p>
        <motion.p 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 }
        }} className='xltext-2xl text-lg p-5 text-gray-600 text-center'>Every site looks like a work of art</motion.p>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 }
          }} className='flex justify-center'>
          <div className='rounded-md bg-gray-800 p-3 flex items-center'>
            <p className='text-red-400'><span className='text-gray-400 opacity-50'>1 | </span>npm <span className='text-gray-300'>i framer-motion</span></p>
            <div className='text-gray-400 opacity-75 pl-3 cursor-pointer hover:opacity-100'>
              <div className='absolute'><motion.p initial={{y:20}} animate={toasts===""?{y: 20, opacity: 0}:toasts==="copied "?{y: 40, opacity: 0}:{y: 40, opacity: 1}}>{toasts}</motion.p></div>
              <svg onClick={() => {navigator.clipboard.writeText("npm i framer-motion"); toast("copied")}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                <rect x="9" y="3" width="6" height="4" rx="2" />
              </svg>
            </div>
          </div>
        </motion.div>
        <div className='flex flex-1 pt-10 xl:flex-row' id="projects">
          <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 }
          }} className='flex-1 '>
            <p className='px-10 text-lg'>The Anime Workout Website</p>
            <div className='mx-5 rounded-t-3xl h-full bg-black flex-1 flex justify-center items-center shadow-2xl  bg-cover' style={{backgroundImage: `url('/portfolio1.png')`}}>
              
            </div>
          </motion.div>
          <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 }
          }} className='flex-1 hidden xl:inline'>
            <p className='px-10 text-lg'>My Own Portfolio</p>
            <div className='mx-5 rounded-t-3xl h-full bg-black flex-1 flex justify-center items-center shadow-2xl bg-center bg-cover' style={{backgroundImage: `url('/portfolio2.png')`}}>

            </div>
          </motion.div>
          <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 }
          }} className='flex-1 hidden xl:inline'>
            <p className='px-10 text-lg'>A Fitness App</p>
            <div className='mx-5 rounded-t-3xl h-full bg-gradient-to-tr bg-white flex-1 flex justify-center items-center shadow-2xl bg-center bg-cover ' style={{backgroundImage: `url('/portfolio4.png')`}}>

            </div>
          </motion.div>
        </div>
      </div>
      <div className='h-screen xl:p-10 p-5 xl:pt-24 pt-20 xl:px-24 flex flex-col'>
          <div className='w-full flex-1 rounded-md bg-gradient-to-tr from-gray-900 to-black shadow-2xl flex flex-col'>
            <div className='flex p-5'>
              <div className='rounded-full w-4 h-4 mx-1.5 bg-gray-600 opacity-50'></div>
              <div className='rounded-full w-4 h-4 mx-1.5 bg-gray-600 opacity-50'></div>
              <div className='rounded-full w-4 h-4 mx-1.5 bg-gray-600 opacity-50'></div>
            </div>
            <p className='xl:text-xl text-sm text-white px-5 py-1'>{`Windows PowerShell`}</p>
            <p className='xl:text-xl text-sm text-white px-5'>{`Copyright (C) Microsoft Corporation. All rights reserved.`}</p><br />
            <p className='xl:text-xl text-sm text-white px-5'>{`Try the new cross-platform PowerShell https://aka.ms/pscore6`}</p><br />
            <p className='xl:text-xl text-sm text-white px-5 py-px opacity-95'>{`PS C:\\Users\\Pekas>`}<CmdTick /></p>
            
          </div>
          
          <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.9 }
          }} className='flex-1 flex justify-center items-center flex-col'>
            <p className='py-5 text-gray-400'><TypeOut text="// 341 hours of leetcode" /> </p>
            <p className='text-5xl text-white font-semibold text-center'>Damn <span className={textGradient}>Good Code</span></p>
            <p className='py-4 text-xl text-gray-400 text-center'>Created with years of LeetCode practice</p>
            <div className='my-5 rounded-md border-blue-500 text-blue-500 border items-center font-semibold text-xl px-5 py-3 flex cursor-pointer'>
              <a href="https://www.toptal.com/resume/marko-pekas" className='pr-2'>Seen Enough</a>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </div>
          </motion.div>
      </div>
      <div className='h-screen flex xl:p-10 p-5 flex-col xl:flex-row overflow-hidden' id="yoe">
          <motion.div initial={{opacity: 0, x: 40}} whileInView={{opacity: 1, x: 0}} transition={{delay: 0.2}} className='flex-1 flex flex-col justify-center px-10 text-green-500'>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <polyline points="7 8 3 12 7 16" />
              <polyline points="17 8 21 12 17 16" />
              <line x1="14" y1="4" x2="10" y2="20" />
            </svg>
            <p className='xl:text-xl text-green-500 font-mono pt-2'>I code lots, true story</p>
            <p className='xl:text-4xl text-2xl text-white font-semibold py-4'>5 Years Experience</p>
            <p className='xl:text-xl text-gray-400'>I have 5 YoE in React and Web App development, real Full Stack experience and a drive to constantly learn more. With broad experiences from startups to established tech companies.</p>
            <a className='text-sexy py-2' href="https://www.toptal.com/resume/marko-pekas">Find Me On Toptal</a>
          </motion.div>
          <motion.div initial={{opacity: 0, x: 20}} whileInView={{opacity: 1, x: 0}} transition={{delay: 0.3, ease: 'easeOut'}} className='flex-1 flex flex-col justify-center xl:p-32 p-10 bg-contain bg-no-repeat' style={{backgroundImage: `url(/bg-1.png)`}}>
            <motion.div initial={{opacity: 0, x: 40}} whileInView={{opacity: 1, x: 0}} transition={{delay: 0.3}} className='rounded-md shadow-2xl w-full h-full bg-gradient-to-tr from-gray-900 to-black bg-center bg-cover' style={{backgroundImage: `url(/portfolio6.jpg)`}}>

            </motion.div>
          </motion.div>
      </div>
      <div className='h-screen bg-white flex justify-center items-center p-10'>
          <div className='xl:w-1/2 h-1/2 w-full rounded-md text-white shadow-2xl flex flex-col justify-center p-3 items-center bg-gradient-to-br from-purple-800 via-red-500 to-orange-500'>
            <p className='text-gray-300 font-mono xl:text-xl text-center'>{`//`} A decision you wont regret</p>
            <p className='py-4 xl:text-5xl text-2xl font-semibold'>Hire Me</p>
            <div className='p-3 flex flex-col xl:flex-row xl:h-24 h-44'>
              <motion.a href="https://www.toptal.com/resume/marko-pekas" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className="cursor-pointer h-full mx-2 flex items-center justify-center rounded-md select-none bg-white text-gray-900 font-semibold px-5 text-xl">Toptal</motion.a>
              <Link href="/contacts"><motion.a whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className="cursor-pointer h-full mx-2 flex items-center justify-center rounded-md select-none border border-white  text-white font-semibold px-5 text-xl">Contact Me</motion.a></Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home
