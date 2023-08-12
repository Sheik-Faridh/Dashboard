import { ChangeEvent, useState } from 'react'
import { SearchIcon } from 'lucide-react'
import Skeleton from '@/atoms/skeleton'
import { TextField } from '@/atoms/form'
import { useTypedSelector } from '@/redux/store'

const Search = () => {
  const user = useTypedSelector((state) => state.user.user)

  const [value, setValue] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target?.value)
  }

  if (!user) return <Skeleton className='w-[200px] h-[30px]' />

  return (
    <TextField
      className='w-[200px] focus-within:w-[250px] duration-500'
      startIcon={<SearchIcon />}
      value={value}
      placeholder='Search'
      onChange={handleChange}
      clear={true}
    />
  )
}

export default Search
