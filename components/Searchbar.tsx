"use client"


const Searchbar = () => {
    const handleSubmit = () => {
        
    }
  return (
    <form className='flex flex-wrap gap-4 mt-12' onSubmit={handleSubmit}>
        <input className="searchbar-input"type="text" placeholder='Enter Product Link' />
    </form>
  )
}

export default Searchbar
