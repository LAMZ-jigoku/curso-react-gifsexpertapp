import { useState, useEffect } from 'react'
import {GetGifs} from '../helpers/GetGifs'

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    useEffect(() => {
        GetGifs(category)
            .then(imgs => {
                setTimeout(() => {
                    setState({
                        data: imgs,
                        loading: false
                    });
                }, 0);
            });
    }, [category]);



    return state;
}
