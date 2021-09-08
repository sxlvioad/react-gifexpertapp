import React, {useState}from 'react'
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['naruto'])

    // const handleAdd = () =>{
    //     setCategories([...categories, 'HunterXHunter'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories={setCategories}/>
            
            <ol>
                {
                    categories.map( category =>{
                        return <GifGrid 
                        category={category}
                        key={category}
                        />
                    })
                }
            </ol>
            
        </>
    )
}
