import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CardMars from './CardMars';

function ContainerMars() {
    const [marsPhotoData, setMarsPhotoData] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=51aeSquTD287pPb4wRI3lrSZmK3uW50H4gDCxEeg')
            .then(response => {
                console.log(response)
                // const earthPhotos = response.data;
                // console.log('response', earthPhotos);
                // setEarthPhotoData(earthPhotos);
            })
            .catch(err => 
                console.log('Error 404:', err)
            );
    }, []);

    return (
        <div>
            <h1>Photos of Mars</h1>
            <CardMars marsPhotoData={marsPhotoData} />

        </div>
    )
}
export default ContainerMars;