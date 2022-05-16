import React from 'react'
import './rendering.css'

const Rendering = ({file:{name, type, size}}) => {
  return (
	  <div className='rendering_container'>
    <div className='rendering_items'>
	<p>Filename: {name}</p>
	<p>Filetype: {type}</p>
	<p>Size in bytes: {size}</p>
	</div>
	</div>
  )
}

export default Rendering