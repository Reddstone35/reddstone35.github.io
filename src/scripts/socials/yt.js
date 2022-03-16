const youtubeKey = config.SECRET_API_KEY;
const youtubeUser = 'UC0ouJNIXzJEvtOCW7K7WoOw';
const subCount = document.getElementById('socials-yt-subCount');

let getSubscribers = () => {

    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        //console.log(data);
        subCount.innerHTML = data["items"][0].statistics.subscriberCount;
    })

}

getSubscribers();