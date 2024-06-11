'use client'
import axios from "axios"
export const uploadFile = (event : any) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    axios.post('https://api.escuelajs.co/api/v1/files/upload', formData, {
        onUploadProgress: (progressEvent) => {
        }
    })
    .then(response => {
        alert("Upload successful!");
        response.data;  
    })
    .catch(error => {
        alert("Upload failed!");
        console.log(error);
    });
};
