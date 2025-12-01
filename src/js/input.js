submitAlbum(); {
    if (Input == null) {
        alert('Input element not found');
        return;
    }
    else (Input != null);
    {
        const AlbumName = document.getElementById('album_name').value;
        const AlbumArtist = document.getElementById('album_artist').value;
        const AlbumImage = document.getElementById('album_image').files[0];
        const AlbumAudio = document.getElementById('album_audio').files[0];
        console.log('Album Submitted:', { AlbumName, AlbumArtist, AlbumImage, AlbumAudio });
    }
}