export const increase =(Count,setCount)=>{
    return setCount(Count + 1);
}
export const decrease =(Count,setCount)=>{
    {Count <= 1 ? Count : setCount(Count -1)};
}
