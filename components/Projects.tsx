import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function Projects({}: Props) {
const projects = [1,2,3,4,5];

  return (
    <motion.div 
    initial={{
      opacity: 0
    }}
    whileInView={{
      opacity: 1
    }}
    transition={{
      duration: 1.5
    }}
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 "
    >
       <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"> 
       Projects
       </h3>

       <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        { projects.map((project, i) => (
            <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <motion.img 
                     initial={{
                        y: -300,
                        opacity: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0
                      }}
                      transition={{
                        duration: 1.2
                      }}
                      viewport={{ once: true}}
                    src="https://bocaindesigns.com/wp-content/uploads/2021/02/website-design-portfolio-image.png" 
                    alt="" 
                    />
                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center">
                            <span className="underline decoration-[#F7AB0A]">
                                Case Study {i + 1} of {projects.length} :
                            </span>{" "}
                            Bocain Design
                        </h4>
                        <p className="text-lg text-center md:text-left">
                            Tenetur quaerat culpa asperiores consectetur molestias dolores voluptates assumenda beatae et alias sapiente praesentium aliquid nulla aspernatur, odit ea eum deleniti quia. Et provident eaque animi, ducimus sapiente ex quidem.
                            Quidem veniam error minus facilis officia alias, molestias ex maxime suscipit, iste placeat tenetur deserunt 
                        </p>
                </div>
            </div>
              ))}
       </div>
       <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"/>


    </motion.div>
  );
}

export default Projects

 {/* <img src="https://www.thanksweb.in/assets/img/web-design-img.webpg" alt="" />
 <img src=" https://www.brandpeg.com/wp-content/uploads/2018/04/Web-design-services-in-Karachi-Pakistan-SEO-packagpng" alt="" />
<img src=" https://i.pinimg.com/originals/cc/4f/da/cc4fda19189f012c7d98236a32002844.png" alt="" /> */}