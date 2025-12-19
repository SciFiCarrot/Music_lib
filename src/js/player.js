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




  const button = document.getElementById('playpause_track');
  const iframe = document.getElementById('spotify_player');

  button.addEventListener('click', () => {
    const link = localStorage.getItem('LinkPath');
    if (link != null) {
      const embedLink = link.replace(
      'https://open.spotify.com/',
      'https://open.spotify.com/embed/'
    );
    iframe.src = embedLink;
    iframe.style.display ='block';

        alert("link found")
  }
  });

