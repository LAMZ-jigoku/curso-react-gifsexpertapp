


 export const GetGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=i8r7IxCHW1Lu7xKRr9mQGY4Z2O1BKf8l`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const Gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    });
    return Gifs;
  }