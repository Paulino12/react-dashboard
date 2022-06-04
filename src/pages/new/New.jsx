import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './new.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';


const New = ({ title, inputs }) => {

  const [file, setFile] = useState('')

  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) :
            "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
            alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadIcon className='icon' />
                </label>
                <input onChange={(e) => setFile(e.target.files[0])}
                type="file" id="file" style={{ display: 'none' }} />
              </div>
                {
                  inputs.map((input, index) => {
                    return <div className="formInput" key={input.id}>
                      <label>{input.label}</label>
                      <input type={input.type} placeholder={input.placeholder} />
                    </div>
                  })
                }
              <button type='button'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New