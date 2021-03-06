import { storage } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const fileUpload = async (fileName) => {

    const myPreFile = await fetch(fileName)
    const myFile = await myPreFile.blob()


    const metadata = {
        contentType: myFile.type
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, myFile, metadata);

    const uploadPromise = new Promise(res => {
        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
               
                switch (error.code) {
                    case 'storage/unauthorized':
                        
                        break;
                    case 'storage/canceled':
                       
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    res(downloadURL)
                });
            }
        );
    })

    return await uploadPromise

}