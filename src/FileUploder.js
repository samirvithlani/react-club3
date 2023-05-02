import axios from 'axios';
import React from 'react'
import {useForm} from 'react-hook-form'

export const FileUploder = () => {
    const {register, handleSubmit} = useForm();
    const submit = async (data)=>{

        const formData = new FormData();
        formData.append('file',data.file[0])
        formData.append('name','raj')
        const res = await axios.post('http://localhost:3000/excel/upload',formData)
        console.log(res);

    }
  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <input type="file" {...register('file')}/>
            <input type="submit" value="submit"/>
        </form>
    </div>
  )
}
