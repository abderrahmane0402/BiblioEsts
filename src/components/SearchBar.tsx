import { FC } from "react"
import { BiSearch } from "react-icons/bi"

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = () => {
  return (
    <div className='w-64 px-2 flex gap-1 items-center border-2 border-cyan-400 rounded-lg shadow-md hover:border-cyan-600'>
      <BiSearch className='text-2xl' />
      <input className='px-2 py-2 focus:outline-none' placeholder='SearchBar' />
    </div>
  )
}

export default SearchBar
