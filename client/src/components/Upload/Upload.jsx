import React from 'react'
import {useState} from 'react'
import './upload.css'
import Rendering from '../Rendering/Rendering'

const Upload = () => {
    const[selectedfile,setSelectedFile]=useState({})
    const[isFilepicked,setIsFilePicked]=useState(false)
    const[data,setData]=useState()

    const handleChange=(e)=>{
        setSelectedFile(e.target.files[0])
       
      
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
              })
              .then((response) => response.json()
                )
        .then(dat => {
            setData(dat)
          
         
         }
			).catch((error)=>{
                console.log('this is bad')
                }
            

            )
			
            }; 

 
        
     
    
  return (
    <div className='upload_container'>
<section>
<h2> Upload video for your Orthosis</h2>
<div className='form_container'>
{isFilepicked? <Rendering file= {selectedfile}/>: <form>
    <input type="file" accept='.png, jpeg' name='file' onChange={handleChange}  />
    <button onClick={handleClick}>Upload Video</button>
</form>}
</div>
</section>
{data? <div className="image_container">

<img src={data.filePath} alt="" />

</div>:''}

    </div>
  )
}

export default Upload