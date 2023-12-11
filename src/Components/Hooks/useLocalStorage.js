import {useEffect, useState } from "react"

export const useLocalStorage=(key,initValue)=>{
const[value,setValue]=useState(()=>{
     const temp=window.localStorage.getItem(key);
    return temp? JSON.parse(temp):initValue;
});
useEffect(()=>{
    window.localStorage.setItem(key,JSON.stringify(value))
});
return [value,setValue]
}; 