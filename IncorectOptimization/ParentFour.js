import React,{useState, useMemo, useCallback} from 'react'
import { MemoizedChildFive } from './ChildFive'

export const ParentFour = () => {
    const [count,setCount] = useState(0)
    const [name,setname] = useState('shayana')

    const person = {
        fname: 'shayana',
        lname: 'gowda'
    }
      
     const memoizedPerson = useMemo(() => person,[])
      const handleClick = () =>{}
      const memoizedHandleClick = useCallback(handleClick, [])

    console.log('ParentFour Render')
    return (
        <div>
           <button onClick={()=> setCount(c => c+1)}>Count - {count}</button> 
           <button onClick={()=> setname('code')}>Change Name</button>
           {/* <MemoizedChildFive name ={name} person={memoizedPerson}/> */}
           <MemoizedChildFive name ={name} handleClick={memoizedHandleClick}/>
          {/* <MemoizedChildThree name={name}>
              <strong>Hello</strong>
          </MemoizedChildThree> */}
        </div>
    )
}