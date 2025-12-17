trackID = "4DDyybdhC9su038YIG6JDj" // So Far Away --Dire Srtaits
albumID = "6Pz06FAaeym0JSqVqIkN56" // Brothers In Arms --Dire Straits

function getTrackEmbedLink(trackID) {
  const baseLink = "https://open.spotify.com/embed/track/"
  const embedLink = baseLink + trackID
  return embedLink
}


const onPlayClick = () => {
  if (spotifyEmbedControllerRef.current) {
    spotifyEmbedControllerRef.current.play();
  }
};




const playbutton = document.getElementById("playpause")

playbutton.addEventListener('click', () => {
    alert('clicked')
  }
);

