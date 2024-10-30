import React from 'react'
import cover_Page from '../assets/coverPage.png'
const Home = () => {
  return (
 <main>
  <img src={cover_Page} alt="CoverImage" className='absolute object-cover w-full h-full' />
  <section className='relative flex justify-center min-h-screen px-8 pt-12 lg:pt-64'>
    <h1 className='pb-4 text-6xl font-bold leading-none cursive lg:leading-snug text-lime-100 home-name'>Hello! I'm Abdul Wahab</h1>
  </section>
 </main>
  )
}

export default Home