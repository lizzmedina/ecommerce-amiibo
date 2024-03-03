

export const getCharacter = async(id: string) => {
    try {
        const response = await fetch(`https://amiiboapi.com/api/amiibo/?tail=${id}`)
        const data = await response.json()
        const characterApi =  data.amiibo[0]
        return characterApi;
    } catch(error){
        console.log(error, "errror en el fetch de id");
    }
};