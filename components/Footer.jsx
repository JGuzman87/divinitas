import React from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear();
  return (
    <div className='flex justify-end'>
        <p>{`© ${currentYear} Davinitas Inc. All rights reserved worldwide`}</p>
    </div>
  )
}

export default Footer;