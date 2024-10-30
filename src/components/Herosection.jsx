import React from 'react'

export default function Herosection() {
  return (
    <div className="flex justify-center gap-10 mt-20">
      <div>
        <h1 className="text-[38px] font-bold">
            Hi, I am Dolapo, <br /> Software Developer
        </h1>
        <p className="mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quod<br />ndis, et aliquam possimus minima dolorum quis culpa eaque debitis illo<br /> obcaecati adipisci quaerat dolor reprehenderit voluptate eligendi<br /> blanditiis delectus!</p>

        <button className="bg-blue-500 p-2 mt-6 text-sm text-white hover:bg-red-600">Download Resume</button>
        </div>
      <div>
        <img src="/public/images/bg/bg4.jpg" alt="photo" className="w-60 h-60 rounded-full" />
      </div>

      <div></div>
    </div>
  )
}
