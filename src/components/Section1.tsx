import React from 'react'

export const Section1 = () => {
    return (
        <div>
            <div className="">
    <h3 className="text-purple-400 font-bold mb-4 text-sm">2. Card w/ image</h3>
    <div className="bg-white rounded-lg w-full md:w-1/2 shadow-lg">
      <img 
        src="https://images.unsplash.com/photo-1550757750-4ce187a65014?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" 
        alt="Sea" 
        className="rounded-t-lg" 
      />
      <div className="p-6">
        <h2 className="font-bold mb-2 text-2xl text-purple-700">Card with image</h2>
        <p className="mb-2 text-gray-700">This is better card</p>
        <a href="#" className="text-purple-600 hover:text-blue-400 underline text-sm">Read more ...</a>
      </div>
    </div>
  </div>
    
        </div>
    )
}
