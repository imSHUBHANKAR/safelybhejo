import React,{useState} from 'react'
import { TbCloudUpload } from "react-icons/tb";
import AlertMsg from './AlertMsg';
import FilePreview from './FilePreview';
import ProgressBar from './ProgressBar';

function UploadForm({uploadBtnClick,progress}) {
  const [file,setFile]= useState();
  const [errorMsg,setErrorMsg]=useState();
  const onFileSelect=(file)=>{
    console.log(file)
    if(file && file.size>2000000){
      console.log("Size is greater than 2MB")
      setErrorMsg('Max File Size should be 2MB')
      return ;
    }
    setErrorMsg(null)
    setFile(file)
  }
  uploadBtnClick=(file)=>{console.log('file uploaded')}
  return (
    <div className='text-center'>
      <div className="flex items-center justify-center w-full">
        <label
          for="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <TbCloudUpload className="w-8 h-8 mb-4 text-blue-500 dark:text-primary-400"/>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">
                Click to upload</span> or <strong className='text-primary'>drag </strong> and
              <strong className='text-primary'> drop</strong>
            </p>
            <div className='py-6'>
              <input type="file" id='uploadFile1' class="hidden" />
            {/* <label for="uploadFile1" 
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Browse Files</label> */}
            </div>
            <br />
            <p className="text-xs text-gray-500 dark:text-gray-400">
              PDF, WEBP, SVG, PNG, JPG or GIF (Max Size : 10MB)
            </p>
          </div>
          <input id="dropzone-file"
           type="file" className="hidden" 
           onChange={(event)=>{onFileSelect(event.target.files[0])}}/>
        </label>
      </div>
      {errorMsg ? <AlertMsg msg={errorMsg}/> :null}
      {file ?<FilePreview file={file} removeFile={()=>setFile(null)}/> :null}
      {progress>0? <ProgressBar progress={progress} />:
        <button disabled={!file} className='p-2 bg-primary text-white
            w-[30%] rounded-full mt-5 disabled:bg-gray-400'
          onClick={() => uploadBtnClick(file)}>
          Upload</button>}
    </div>
  );
}

export default UploadForm