// frontend/src/pages/home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Blue Top Section */}
            <div className="bg-indigo-600 min-h-[50vh]">
                {/* Navigation Bar */}
                <nav className="bg-white shadow-md">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 flex items-center">
                                    <span className="text-2xl font-bold text-indigo-600">ReferALL</span>
                                </div>
                            </div>

                            <div className="hidden md:flex items-center space-x-4">
                                <button className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                                    Notifications
                                </button>
                                <button className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                                    Ask for Referral
                                </button>
                                <button className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                                    Profile
                                </button>
                                <button className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-4 py-2 rounded-md text-sm font-medium">
                                    Login
                                </button>
                                <button className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium">
                                    Sign Up
                                </button>
                            </div>

                            {/* Mobile menu button */}
                            <div className="md:hidden flex items-center">
                                <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 focus:outline-none">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                            Connect. Refer. Succeed.
                        </h1>
                        <p className="mt-5 max-w-xl mx-auto text-xl text-white">
                            ReferALL is a platform that connects job seekers with professionals who can refer them to their dream companies.
                        </p>

                        <div className="mt-10 flex justify-center">
                            <div className="inline-flex rounded-md shadow">
                                <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gradient-to-r from-indigo-50 to-blue-100">
                                    <Link to="/login" >
                                        Get Started
                                    </Link>


                                </button>
                            </div>
                            <div className="ml-3 inline-flex">
                                <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white  hover:bg-gradient-to-r from-indigo-50 to-blue-100">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* White Bottom Section */}
            <div className="bg-white flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Features Section */}
                    <div className="mt-10">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {/* Feature 1 */}
                            <div className="text-center">
                                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <h3 className="mt-4 text-lg font-medium text-gray-900">For Job Seekers</h3>
                                <p className="mt-2 text-base text-gray-600">
                                    Create a profile, showcase your skills, and get referred to top companies by professionals working there.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="text-center">
                                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h3 className="mt-4 text-lg font-medium text-gray-900">For Referrers</h3>
                                <p className="mt-2 text-base text-gray-600">
                                    Find qualified candidates, help them get into your company, and earn rewards for successful referrals.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="text-center">
                                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 极 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="mt-4 text-lg font-medium text-gray-900">Verified Profiles</h3>
                                <p className="mt-2 text-base text-gray-600">
                                    Our verification system ensures that both job seekers and referrers are authentic, creating a trusted community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;