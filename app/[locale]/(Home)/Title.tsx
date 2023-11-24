"use client"
import {motion} from "framer-motion"
import Image from "next/image"


const Title = ({title}:{title:string}) => {
  return (
    <motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       className="flex items-center justify-center gap-3 py-5">
        <motion.h1
        initial={{ marginTop: -50 }}
        whileInView={{ marginTop: 0 }}
        className="md:text-5xl sm:text-4xl text-2xl font-semibold">
          {title}
        </motion.h1>
        <Image
          src={"/israel.png"}
          width={100}
          height={100}
          alt="ISIS"
        />
      </motion.div>
  )
}

export default Title