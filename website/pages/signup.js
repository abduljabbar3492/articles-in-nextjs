import Link from 'next/link'
import { React, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { userService } from '../services/user.service';
import SignupForm from '../components/User/SignupForm'

// const initialValue = {
//     first_name: "",
//     last_name: "",
//     full_name: "",
//     username: "",
//     email: "",
//     password: "",
//     mobile_number: "",
//     country: "",
//     city: "",
//     district: "",
//     building_number: 0,
//     street: ""
// };
const SignupPage = () => {
    const router = useRouter();
    // const [user, setUser] = useState(initialValue);
    // const onValueChange = (e) => {
    //     setUser({ ...user, [e.target.name]: e.target.value })
    // };
    const signupHandler = async user => {
        try {
            let res = await userService.register(user);
            if (res.status)
                router.push('/');
        } catch (error) {
            console.log("error", error)
            router.push('/signup');
        }
    }
    return <SignupForm onSignup={signupHandler} />
}

export default SignupPage;