export const addCount= (num) =>{
    return {
        type:'ADD_COUNT',
        data:num
    }
}

export const setCount =() =>{
    return (dispatch,getState) =>{
        setTimeout(() =>{
            dispatch(addCount(100))
        },1000)
    }
}