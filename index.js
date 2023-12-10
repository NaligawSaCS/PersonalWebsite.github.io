let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');
let wave = document.getElementById('wave');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : 'images/w2e.jpg',
        name : 'Seasons',
        artist : 'Wave To Earth',
        music : 'music/Wave To Earth - Seasons (Lyrics).mp3'
    },
    {
        img : 'images/bad.jpg',
        name : 'Bad',
        artist : 'Wave To Earth',
        music : 'music/wave to earth - bad (Official Lyric Video).mp3'
    },
    {
        img : 'images/fts.jpg',
        name : 'From The Start',
        artist : 'Laufey',
        music : 'music/@laufey - From The Start (Lyrics).mp3'
    },  
    {
        img : 'images/Drawer.jpg',
        name : 'Drawer',
        artist : '10CM',
        music : 'music/10CM (십센치) - Drawer (서랍) Our Beloved Summer OST Part 1 (그 해 우리는 OST) Lyrics_가사 [Han_Rom_Eng].mp3'
    },
    {
        img : 'images/arbitrary.jpg',
        name : 'Arbitrary',
        artist : 'Over October',
        music : 'music/Over October - Arbitrary (Lyric Video).mp3'
    },
    {
        img : 'images/maybe.jpg',
        name : 'Maybe We Could Be A Thing',
        artist : 'Jesse Barrera',
        music : 'music/Jesse Barrera, Michael Carreon, Albert Posis - _Maybe We Could Be a Thing_ (Lyric Video).mp3'
    }
    
];

var photographyModal = document.getElementById("photographyModal");
var openModalBtn1 = document.getElementById("openModalBtn1");
var MusicModal = document.getElementById("MusicModal");
var openModalBtn2 = document.getElementById("openModalBtn2");
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var moreBtn = document.querySelector('.btn');

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal 
moreBtn.onclick = function() {
    modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

function openPhotographyModal() {
var photographyModal = document.getElementById('photographyModal');
photographyModal.style.display = 'flex';
}

function closePhotographyModal() {
    var photographyModal = document.getElementById('photographyModal');
    photographyModal.style.display = 'none';
}

function openMusicModal() {
    var musicModal = document.getElementById('musicModal');
    musicModal.style.display = 'flex';
}

function closeMusicModal() {
    var musicModal = document.getElementById('musicModal');
    musicModal.style.display = 'none';
}

function closeHobbiesModal() {
    var hobbiesModal = document.getElementById('hobbiesModal');
    hobbiesModal.style.display = 'none';
}

function closevideosModal() {
    var videosModal = document.getElementById('videosModal');
    videosModalModal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

var autobiographyModal = document.getElementById('autobiographyModal');

function openAutobiographyModal() {
    autobiographyModal.style.display = 'flex';
}

function closeAutobiographyModal() {
    autobiographyModal.style.display = 'none';
}

var hobbiesModal = document.getElementById('hobbiesModal');

function openHobbiesModal() {
    hobbiesModal.style.display = 'flex';
}

function closeHobbiesModal() {
    hobbiesModal.style.display = 'none';
}

var videosModal = document.getElementById('videosModal');

function openvideosModal() {
    videosModal.style.display = 'flex';
}

function closevideosModal() {
    videosModalModal.style.display = 'none';
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
}

function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-2x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-2x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}

function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}