import React from 'react'
import { useForm } from 'react-hook-form';
import { Card, Typography, Button } from '@mui/material';
import { ProfilePhotoFormData } from '../../Helpers/interfaces';
import { auth, storage } from '../../Helpers/firebaseConfig';
import { ref, uploadBytes } from 'firebase/storage';

const ProfilePhotoForm = () => {
    const { register, handleSubmit } = useForm<ProfilePhotoFormData>();

    const submitHandler = (data:ProfilePhotoFormData) => {
        const photo = data.profilePhoto[0];
        if (auth.currentUser) {
            const storageRef = ref(storage, `/users/${auth.currentUser.uid}/profilePhoto`);
            uploadBytes(storageRef, photo).then(() => console.log("Successfully uploaded the photo!")).catch((err) => console.error(err.message));
        }
    };
    
    return(
        <form onSubmit={handleSubmit(submitHandler)}>
            <Card sx={{p:"1rem"}}>
                <Typography variant="h6" align="center" sx={{fontSize:"1rem"}}>Upload your profile picture</Typography>
                <Button variant="contained" component="label" sx={{display:"block", mx:"6rem", my:"1rem", alignContent:"center"}}>
                    <Typography variant="h6" align="center" sx={{fontSize:"1rem" }}>Select a file</Typography>
                    <input type="file" hidden {...register('profilePhoto', {required:true})} />
                </Button>
                <Button variant="contained" type="submit" sx={{display:"block", mx:"auto"}}>Upload</Button>
            </Card>
        </form>
    )
}

export default ProfilePhotoForm;