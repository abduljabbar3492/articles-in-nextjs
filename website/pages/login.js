import { React, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { userService } from '../services/user.service';
import LoginForm from '../components/User/LoginForm';
// const initialValue = {
//     email: "",
//     password: "",
// };
const Login = () => {
    const router = useRouter();
    const loginHandler = async data => {
        try {
            let res = await userService.login(data);
            if (res.status) {
                router.push('/');
            } else {
                router.push('/login');
            }
        } catch (error) {
            router.push('/login');
        }
    }
    return (
        <LoginForm onLogin={loginHandler}/>
    )
}

export default Login