import { useEffect } from "react"

const UseTitle =(title)=>{
    useEffect(()=>{
        document.title = `${title} -Binmoy.Com`
    },[title])
}

export default UseTitle;