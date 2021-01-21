import React, { useState } from 'react';
import { AddCategorias } from './Components/AddCategorias';
import { GiftGrid } from './Components/GiftGrid';
const GiftExpertApp = () => {

    const [categorias, setCategorias] = useState(['goku']);

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategorias setCategorias = {setCategorias}/>
            <hr/>

            <ol>
                {
                    categorias.map( category =>
                        <GiftGrid 
                        key={category}
                        category={category}/>
                    )
                }
            </ol>
        </>
    );
}

export default GiftExpertApp;