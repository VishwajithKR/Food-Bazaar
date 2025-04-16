import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
const navigate = useNavigate();

  return (
    <section className="flex items-center justify-center min-h-screen bg-white font-serif p-10">
    <div className="text-center max-w-lg">
      <div className="relative h-[350px] flex items-center justify-center">
        <h1 className="text-9xl font-bold absolute top-0">404</h1>
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="404 Not Found"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-[10px]">
        <h3 className="text-2xl font-semibold">Looks like you're lost</h3>
        <p className="text-gray-600 mt-2">The page you are looking for is not available!</p>
        <button onClick={() => navigate("/")}
          className="inline-block mt-5 px-6 py-2 cursor-pointer text-white bg-green-600 rounded-lg hover:bg-green-700"
        >
          Go to Home
        </button>
      </div>
    </div>
  </section>
  )
}

export default NotFoundPage