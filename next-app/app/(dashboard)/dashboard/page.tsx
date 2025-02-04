import React from 'react'

const dashboard =async () => {
  const response  = await fetch('https://jsonplaceholder.typicode.com/albums')
  if(!response.ok){
    throw new Error('Failed to fetch data')
  }
  const albums = await response.json()
  return (
    <div className='grid md:grid-cols-4 gap-4 sm:grid-cols-1'>
      {albums.map((album : {id : number, title : string}) => (
        <div key={album.id}
        className='bg-white shadow-md p-4 rounded-lg transition t...'>
          <h3 className='text-lg text-purple-200 mb-2 font-bold'>{album.title}</h3>
          <p className='text-gray-600'>Album ID : {album.id}</p>
        </div>
      ))}
    </div>
  )
}

export default dashboard