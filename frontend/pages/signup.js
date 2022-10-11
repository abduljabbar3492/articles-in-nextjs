import Link from 'next/link'
import { React, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { userService } from '../services/user.service';

const initialValue = {
    first_name: "",
    last_name: "",
    full_name: "",
    username: "",
    email: "",
    password: "",
    mobile_number: "",
    country: "",
    city: "",
    district: "",
    building_number: 0,
    street: ""
};
const Signup = () => {
    const router = useRouter();
    const [user, setUser] = useState(initialValue);
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            let res = await userService.register(user);
            if (res.status)
                router.push('/');
        } catch (error) {
            router.push('/signup');
        }
    }
    return (
        <div>
            <section className="h-screen">
                <div className="px-6 h-full text-gray-800">
                    <div
                        className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                    >
                        <div
                            className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                        >
                            <Image
                                src="/login-img.webp"
                                width={700}
                                height={500}
                                alt="image"
                            />
                        </div>
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <form onSubmit={handleSubmit}>
                                <div className="flex items-center my-4 before:flex-1 before:border-t
                                 before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                    <p className="text-center font-semibold mx-4 mb-0">Register</p>
                                </div>

                                <div className="mb-6">
                                    <input onChange={(e) => onValueChange(e)}
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        name="first_name"
                                        placeholder="First Name" required />
                                </div>
                                <div className="mb-6">
                                    <input onChange={(e) => onValueChange(e)}
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        name="last_name"
                                        placeholder="Last Name" required />
                                </div>
                                <div className="mb-6">
                                    <input onChange={(e) => onValueChange(e)}
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        name="full_name"
                                        placeholder="Full Name" required />
                                </div>
                                <div className="mb-6">
                                    <input onChange={(e) => onValueChange(e)}
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        name="username"
                                        placeholder="Username" required />
                                </div>
                                <div className="mb-6">
                                    <input onChange={(e) => onValueChange(e)}
                                        type="email"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        name="email"
                                        placeholder="Email address" required />
                                </div>
                                <div className="mb-6">
                                    <input onChange={(e) => onValueChange(e)}
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        name="password"
                                        placeholder="Password" required />
                                </div>
                                <div className="mb-6">
                                    <input onChange={(e) => onValueChange(e)}
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        name="mobile_number"
                                        placeholder="Mobile Number" />
                                </div>
                                <div className="mb-6">
                                    <input onChange={(e) => onValueChange(e)}
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        name="country"
                                        placeholder="Country Name" />
                                </div>
                                <div className="mb-6">
                                    <input onChange={(e) => onValueChange(e)}
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        name="city"
                                        placeholder="City Name" />
                                </div>
                                <div className="mb-6">
                                    <input onChange={(e) => onValueChange(e)}
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        name="district"
                                        placeholder="District" />
                                </div>

                                <div className="mb-6">
                                    <input onChange={(e) => onValueChange(e)}
                                        type="number"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        name="building_number"
                                        placeholder="Building Number" />
                                </div>
                                <div className="mb-6">
                                    <input onChange={(e) => onValueChange(e)}
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        name="street"
                                        placeholder="Street" />
                                </div>




                                <div className="text-center lg:text-left">
                                    <button
                                        type="submit"
                                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium
                                         text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg 
                                         focus:bg-blue-700 focus:shadow-lg 
                                         focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg 
                                         transition duration-150 ease-in-out">
                                        Register
                                    </button>
                                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                        Already have an account?
                                        <Link href={'login'}>
                                            <a href="#!"
                                                className="text-blue-600 hover:text-red-700 focus:text-red-700
                                             transition duration-200 ease-in-out"> Login</a>
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup