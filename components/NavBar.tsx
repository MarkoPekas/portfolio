import { motion } from "framer-motion"

const NavBar = () => {
    return (
        <div className="h-20 p-4.5 w-full">
            <div className="w-full flex px-0 md:px-32 xl:px-64 h-full items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" strokeWidth="0.75" stroke="#f1f1f1" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7z" />
                </svg>

                <div className="flex-1"></div>
                <div className="hidden md:flex h-full">
                    <a className="px-5 text-white text-lg">One</a>
                    <a className="px-5 text-white text-lg">Two</a>
                    <a className="px-5 pr-10 text-white text-lg">Three</a>
                    <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className="cursor-pointer h-full mx-2 flex items-center justify-center rounded-md select-none bg-gradient-to-r from-pink-400 to-red-600  text-white font-semibold px-5 text-xl">These buttons</motion.div>
                    <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className="cursor-pointer h-full mx-2 flex items-center justify-center rounded-md select-none border border-white  text-white font-semibold px-5 text-xl">Do nothing</motion.div>
                </div>
                <div className="md:hidden flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="0.75" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default NavBar