




export const increment= ()=>{
    return(dispatch)=>{
       dispatch({
          type:"increment"
       })
    }
}




export const decrement= ()=>{
    return(dispatch)=>{
       dispatch({
          type:"decrement"
       })
    }
}