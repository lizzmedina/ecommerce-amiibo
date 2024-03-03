export const getSeries = async () => {
    const response = await fetch('http://amiiboapi.com/api/amiiboseries/');
    const {amiibo} = await response.json();
    return amiibo;
}