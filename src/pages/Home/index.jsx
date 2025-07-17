import React from 'react'

const HomePage = () => {
  return (
    <div className='bg-slate-200 p-6 '>
      <h1 className='text-2xl pb-6'>Create Product</h1>
      <form className='flex flex-col gap-2 w-100'>
        <label>Title:</label>
        <input className='mb-4 bg-sky-200 p-2 rounded text-stone-950 outline-none' type="text" placeholder='Type title' />
        <label>Phone:</label>
        <input className='mb-4 bg-sky-200 p-2 rounded text-stone-950 outline-none' type="text" placeholder='Type phone number' />
        <label>Email:</label>
        <input className='mb-4 bg-sky-200 p-2 rounded text-stone-950 outline-none' type="text" placeholder='Type email' />
        <label>Category:</label>
        <select name="" id="" className='mb-4 bg-sky-200 p-2 rounded text-stone-950 outline-none'>
            <option value="">Products</option>
            <option value="">Posts</option>
        </select>
        <label>Message:</label>
        <textarea name="" id="" placeholder='Type your message' className='mb-4 bg-sky-200 p-2 rounded text-stone-950 outline-none h-30'></textarea>
        <button className='p-2 text-xl bg-slate-900 rounded text-amber-50 cursor-pointer'>Submit</button>
      </form>
      
    </div>
  )
}

export default HomePage
