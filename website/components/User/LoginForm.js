import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
function LoginForm(props){
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async e => {
        e.preventDefault()
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        props.onLogin(data);
    }
    return (
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
                                    <p className="text-center font-semibold mx-4 mb-0">Login</p>
                                </div>

                                <div className="mb-6">
                                    <input ref={emailRef}
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        name="email"
                                        placeholder="Email address" />
                                </div>

                                <div className="mb-6">
                                    <input ref={passwordRef}
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        name="password"
                                        placeholder="Password" />
                                </div>



                                <div className="text-center lg:text-left">
                                    <button
                                        type="submit"
                                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Login
                                    </button>
                                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                        Do not have an account?
                                        <Link href={"signup"}>
                                            <a href="#!"
                                                className="text-red-600 hover:text-red-700 focus:text-red-700
                                             transition duration-200 ease-in-out">Register</a>
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default LoginForm;