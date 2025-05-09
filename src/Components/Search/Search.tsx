import { Console } from 'console';
import React,{ChangeEvent, JSX, SyntheticEvent} from 'react'

interface Props{
  onClick:(e:SyntheticEvent) => void;
  search: string | undefined;
  handleChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

const Search : React.FC<Props>= ({handleChange,search,onClick}:Props) : JSX.Element=> {
    return (
    <div>
      <input value={search} onChange={(e)=>handleChange(e)} />
      <button onClick={(e)=>onClick(e)}/>
    </div>
  )
}

export default Search
