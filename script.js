

// NASA API
const count = 10;
const apiKey = 'PKJPjD3imeWzobbQHFULfdAlhe7K7chBCOBWWXLK';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];

// Get 10 images from nasa api
async function getNasaPicture(){
    try{
        const response = await fetch(apiUrl);
        resultsArray = await response.json();
        console.log
    }catch (error){

    }
}
getNasaPicture();