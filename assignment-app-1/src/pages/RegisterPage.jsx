import React from 'react';

const RegisterPage = () => {

    

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-300">
            <div className="flex bg-white shadow-lg shadow-slate-600 rounded-lg overflow-hidden w-full max-w-4xl border">
                <div className="w-1/2 hidden md:block">
                    <img
                        src="https://www.21kschool.com/in/wp-content/uploads/sites/4/2023/11/15-Facts-About-Coding-Every-Kid-Should-Know.png"
                        alt="Register"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Register</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor='name' className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="name"
                                autoComplete='off'
                                name='name'
                                id='name'
                                placeholder='Name'
                                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-700"
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                autoComplete='off'
                                name='email'
                                id='email'
                                placeholder='Email'
                                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-700"
                            />
                        </div>
                        <div>
                            <label htmlFor='password' className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                autoComplete='off'
                                name='password'
                                id='password'
                                placeholder='Password'
                                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-700"
                            />
                        </div>
                        <div>
                            <label htmlFor='confirm_password' className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input
                                type="password"
                                autoComplete='off'
                                name='confirm_password'
                                id='confirm_password'
                                placeholder='Confirm Password'
                                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-700"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-red-700 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-800 transition"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
