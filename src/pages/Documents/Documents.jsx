import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import { useState } from 'react'

export default function Documents () {
  // there's nothing really going on here

  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null)

  const onFileUpload = () => {

  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div id="uploadFile">
        <form>  
          <input
            type="text"   
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            />
          <input
            type="file"
            value={selectedFile}
            onChange={(e) => setSelectedFile(e.target.files[0])}
            />
        </form>
      </div>
    </div>
  )
}
