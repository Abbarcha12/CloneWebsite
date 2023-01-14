import React from 'react'
import './TobNavBar.css'
import CallMadeIcon from '@material-ui/icons/CallMade'
const TopNavBar = () => {
  return (
    <section className='top__Nav__Bar'>
      <div className='container'>
        <div className=' d-flex flex-row-reverse '>
          <div className='  Top__Items'>
            {' '}
            <a href=''>BKR $31.50</a>
          </div>
          <div className='  Top__Items'>
            <a href=''>
              Investors{' '}
              <span>
                <CallMadeIcon />
              </span>
            </a>
          </div>
          <div className='  Top__Items'>
            <a href=''>
              careers
              <span>
                <CallMadeIcon />
              </span>
            </a>
          </div>
          <div className='  Top__Items '>
            {' '}
            <a href=''>Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopNavBar
