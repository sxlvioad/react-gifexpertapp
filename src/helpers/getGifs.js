

export const getGifs = async( category ) =>{

        
        const url = `https://api.giphy.com/v1/gifs/search?q=${ category }&limit=10&api_key=eCQuL3DLdarcwPIdBMnRb16v4H3bFDKN`
        const resp = await fetch (url)
        const {data} = await resp.json()

        const gif = data.map(img =>{
            return{
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        return gif
        
}