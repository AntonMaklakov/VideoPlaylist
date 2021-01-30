let videos = ['video/1.mp4', 'video/2.mp4', 'video/3.mp4'];//Ссылки на видеоролики
videosDiv = document.querySelector('.videos');//Div видеороликов
playlistDiv = document.querySelector('.playlists');//Div плейлистов
playlistMassive = [{ name: 'Плейлист1', videos: [] }];//Массив с плейлистаими
videos.forEach((element, number) => {// Цикл с массивом videos
    videosDiv.innerHTML += '<div class="video"><video controls class="video" src="'
        + element
        + '"></video><button id="'
        + number
        + '" class="button">Добавить в плейлист1</button></div>';
});
let buttons = document.querySelectorAll('.button');//Кнопки
buttons.forEach(element => {//Нажатие на кнопку и обновление массива с видео
    element.addEventListener('click', () => {
        playlistMassive[0].videos.push({
            video: videos[element.getAttribute('id')]
        });
        htmlPlaylist();
    });
});
const htmlPlaylist = () => {//Отрисовка HTML плейлиста.
    playlistMassive.forEach(element => {
        let videosPlaylist = '';
        element.videos.forEach(element => {
            videosPlaylist += '<div class="video"><video controls class="video" src="'
                + element
                + '"></video></div>';
        });
        playlistDiv.innerHTML =
            '<div class="playlist">'
            + element.name
            + videosPlaylist
            + '</div>';
    });
}
htmlPlaylist();

