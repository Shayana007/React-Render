import React,{useState} from 'react'
import { MemoizedChildFour } from './ChildFour'

export const ParentThree = () => {
    const [count,setCount] = useState(0)
    const [name,setname] = useState('shayana')


    console.log('ParentThree Render')
    return (
        <div>
           <button onClick={()=> setCount(c => c+1)}>Count - {count}</button> 
           <button onClick={()=> setname('code')}>Change Name</button>
           <MemoizedChildFour name ={name}/>
          {/* <MemoizedChildThree name={name}>
              <strong>Hello</strong>
          </MemoizedChildThree> */}
        </div>
    )
}