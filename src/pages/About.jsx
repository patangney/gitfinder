import React from 'react'
import {VscSmiley} from 'react-icons/vsc'

function About () {
  return (
    <>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. This
        project is part of the
        <a href='https://www.udemy.com/course/modern-react-front-to-back/'>
          {' '}
          React Front To Back
        </a>{' '}
        Udemy course by
        <strong>
          <a href='https://traversymedia.com'> Brad Traversy</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400 mb-10'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      
      <h1 className='text-3xl mb-4'>Tech Used</h1>
      
      <div class='mockup-code'>
        <pre data-prefix='1'>
          <code>Tailwindcss Daisyui Postcss React-icons Vercel
              
          </code>
        </pre>
        <pre data-prefix='2'>
          <code><progress class="progress progress-warning w-56"></progress></code>
        </pre>
        <pre data-prefix='3' class='bg-success text-warning-content'>
          <code>And lots of other goodies <VscSmiley className='inline pr-2 text-3xl'/></code> 
        </pre>
      </div>
    </>
  )
}

export default About
