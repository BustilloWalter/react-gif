import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

    const {data:images, loading}=useFetchGifs(category);
    
    return (
        <>
        <h3 className="animate__animated animate__bounce">{category}</h3>

        {loading && <p>Loading</p>}

        <div className="card-grid">
                {
                    images.map(img=>(
                        <GifGridItem {...img}
                        key={img.id}/>
                    ))     
                }           
            </div>
        </>      
    )
}
