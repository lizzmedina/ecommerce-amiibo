

export const getCharacters = async() => {
    const response = await fetch('https://amiiboapi.com/api/amiibo/')
    const data = await response.json()
    return data.amiibo.slice(0,20)
};
