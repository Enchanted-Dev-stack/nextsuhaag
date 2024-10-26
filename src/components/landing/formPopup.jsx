import React from 'react'

function  FormPopup(props) {

  const {open, onClose} = props

  return (
    <div className={`${open ? 'block' : 'hidden'} max-w-[500px] m-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 font-normal p-5 rounded-lg`}>
      yea

      <span onClick={onClose}>close</span>
    </div>
  )
}

export default  FormPopup
