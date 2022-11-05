import React from 'react'
import { TextField, Button, Card, Typography} from '@mui/material'
import { useForm } from 'react-hook-form'
import { auth } from '../../Helpers/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { LoginFormData } from '../../Helpers/interfaces'


const LoginForm = () => {
    const { register, handleSubmit } = useForm<LoginFormData>();

    const submitHandler = ({email, password}: LoginFormData) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Successfully Login!"))
        .catch((err) => console.error(err.message));
    };

    return (
        <Card sx={{ mt: "1rem", display: "block", mx: "auto", p: "5px", width: "95%" }}>
            <form style={{display:"flex", flexDirection:"column"}}
            onSubmit={handleSubmit(submitHandler)}>
                <Typography variant="h5" align= "center" sx={{fontSize:"2rem"}}>Log in</Typography>
                <TextField variant="outlined" type="email" placeholder="email" sx={{display:"block", my:".5rem", mx:"auto",}}
                {...register("email", {required: true})} />
                <TextField variant="outlined" type="password" placeholder="password" sx={{display:"block", my:".8rem", mx:"auto",}}
                {...register("password", {required: true})} />
                <Button type="submit" variant="contained" sx={{display:"block", mx:"auto", mb:"1rem"}}>Log in</Button>
            </form>
        </Card>
    )
}
export default LoginForm;