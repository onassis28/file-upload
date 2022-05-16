import React from 'react'
import {useState} from 'react'
import './upload.css'
import Rendering from '../Rendering/Rendering'

const Upload = () => {
    const[selectedfile,setSelectedFile]=useState({})
    const[isFilepicked,setIsFilePicked]=useState(false)

    const handleChange=(e)=>{
        setSelectedFile(e.target.files[0])
       
        console.log(selectedfile)
    }
    const handleClick=(e)=>{
        e.preventDefault()
        setIsFilePicked(true);
        const formData = new FormData();

		formData.append('file', selectedfile);
        fetch(
			'http://localhost:5000/upload', {
			method:'POST',
            body:formData
          
            
              }
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);	});
            };
            
     
    
  return (
    <div className='upload_container'>
<section>
<h2> Upload video for your Orthosis</h2>
<div className='form_container'>
{isFilepicked? <Rendering file= {selectedfile}/>: <form>
    <input type="file" name='file' onChange={handleChange}  />
    <button onClick={handleClick}>Upload Video</button>
</form>}
</div>
</section>



    </div>
  )
}

export default Upload