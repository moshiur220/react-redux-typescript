import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { useAppSelector,useAppDispatch } from '../../hook'
import { fetchProducts } from '../../redux/features/movieSlic'
// import { RootState } from '../../redux/store'
function Movie() {
    const count = useAppSelector((state) => state)
    console.log(count);
    
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
  return (
    <div>Movie</div>
  )
}

export default Movie