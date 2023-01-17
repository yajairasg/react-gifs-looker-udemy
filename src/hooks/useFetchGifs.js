import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
 
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    // realiza el consumo del api que obtiene los gifs
    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }
    
    // Hook que permite sincronizar un componente con un sistema externo.
    useEffect( () => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }

}
