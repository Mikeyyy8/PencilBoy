import { useThemeStore } from "../store"
import assets from "../assets"

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  const {theme} = useThemeStore()

  return (

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.5 }}
      id="home"
      className="lg:p-5 lg:px-15 h-full md:h-fit lg:h-screen w-full mb-10"
      >
      <div className="flex items-center justify-around flex-col lg:flex-row-reverse space-y-16 md:space-y-0 overflow-x-hidden gap-16 lg:gap-0 scroll-smooth">
        <div className="w-full lg:w-1/2">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight uppercase selection:bg-black selection:text-white text-left min-h-[18rem] font-sans hidden md:block md:p-5 lg:p-0">
            <Typewriter
              options={{
                strings: ['The Pencil Boy Movement', 'You know who', 'MR NVSBL', "Ideas don't come fully formed",
                   'style by panache...', 'Do you know who I am?', 'Curated chaos....',
                    "What's your name again?", 'This Would go hard on a tee', 'building monaco wealth',
                     'Join the community bro', 'Workings in statement'],
                autoStart: true,
                loop: true
              }}

            />
          </h1>

          <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight uppercase selection:bg-black selection:text-white text-left min-h-[18rem] font-sans block md:hidden break-words p-5">
            the pencil boy community
          </h1>

        </div>
        <img src={theme === 'light' ? assets.pcblack : assets.pcbwhite} alt="pencilboy.png" className="lg:w-2/5 w-auto drop-shadow-2xl translate-x-1/2 lg:translate-x-0 dark:drop-shadow-neutral-500/60" />
      </div>
    </motion.div>
  )
}

export default Hero
// 
