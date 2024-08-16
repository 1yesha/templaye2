import React from 'react'

const page = () => {
  return(
     <div><figure className=" bg-black text-white rounded-xl p-10 dark:bg-black">
     <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/AI.jfif" alt="" width="384" height="512"></img>
     <div className="pt-6 md:p-8 text-center md:text-right space-y-4">
       <blockquote>
         <p className="w-50 h-30 text-lg  font-medium">
           “Generative artificial intelligence is artificial intelligence capable of generating text, images, videos, or other data using generative models, often in response to prompts.”
         </p>
       </blockquote>
       <figcaption className="font-medium">
         <div className="text-sky-500 dark:text-sky-400">
           Ayesha Saleem
         </div>
         <div className="text-blue-500 dark:text-blue-500">
           Generative AI developer
         </div>
       </figcaption>
     </div>
   </figure></div>
  )
}

export default page