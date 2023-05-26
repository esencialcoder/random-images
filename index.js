import fetch from 'node-fetch';

 const getRandomImage=async ()=>{
    const url=await fetch('https://dog.ceo/api/breeds/image/random');
    const respuesta= await url.json()
    return respuesta
}

export default getRandomImage;