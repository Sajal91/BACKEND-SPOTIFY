let showMoreBtn = document.querySelector('#show-more-cards-btn');
let cardContainer = document.querySelector('.cards-container');
let cardContainerNew = document.createElement('div');
let menu = document.querySelector('.left-container');
console.log(menu);

let a = 0;
let b = 0;
console.dir(showMoreBtn);

showMoreBtn.addEventListener('click',()=>{
    a++;
    if(a == 1) {
        let Card6 = document.createElement('div');
        let Card7 = document.createElement('div');
        let Card8 = document.createElement('div');
        let Card9 = document.createElement('div');
        let Card10 = document.createElement('div');
    
        let Card6h3 = document.createElement('h3');
        let Card7h3 = document.createElement('h3');
        let Card8h3 = document.createElement('h3');
        let Card9h3 = document.createElement('h3');
        let Card10h3 = document.createElement('h3');
    
        let Card6h5 = document.createElement('h5');
        let Card7h5 = document.createElement('h5');
        let Card8h5 = document.createElement('h5');
        let Card9h5 = document.createElement('h5');
        let Card10h5 = document.createElement('h5');

        let CardImg6 = document.createElement('img');
        let CardImg7 = document.createElement('img');
        let CardImg8 = document.createElement('img');
        let CardImg9 = document.createElement('img');
        let CardImg10 = document.createElement('img');
    
        Card6.insertAdjacentElement('afterbegin',CardImg6);
        Card7.insertAdjacentElement('afterbegin',CardImg7);
        Card8.insertAdjacentElement('afterbegin',CardImg8);
        Card9.insertAdjacentElement('afterbegin',CardImg9);
        Card10.insertAdjacentElement('afterbegin',CardImg10);

        cardContainerNew.setAttribute('class','cards-container');
    
        CardImg6.setAttribute('src','https://i.scdn.co/image/ab67706f00000002403f8ff596413f3d280026df');
        CardImg7.setAttribute('src','https://i.scdn.co/image/ab67706f00000002dec17246891b5b4eb97bdb0d');
        CardImg8.setAttribute('src','https://i.scdn.co/image/ab67706f0000000219301c82bfe1e946237f55e2');
        CardImg9.setAttribute('src','https://i.scdn.co/image/ab67706f0000000223728194acce68a135b2941b');
        CardImg10.setAttribute('src','https://i.scdn.co/image/ab67706f000000024c4ae64d4ed1fa93a1b886ca');

        Card6h3.innerHTML='Top 50-Global';
        Card7h3.innerHTML='Top 50-Global';
        Card8h3.innerHTML='Top 50-Global';
        Card9h3.innerHTML='Top 50-Global';
        Card10h3.innerHTML='Top 50-Global';
        
        Card6h5.innerHTML='Your daily update of the most played tracks';
        Card7h5.innerHTML='Your daily update of the most played tracks';
        Card8h5.innerHTML='Your daily update of the most played tracks';
        Card9h5.innerHTML='Your daily update of the most played tracks';
        Card10h5.innerHTML='Your daily update of the most played tracks';
    
        Card6.insertAdjacentElement('beforeend',Card6h3);
        Card7.insertAdjacentElement('beforeend',Card7h3);
        Card8.insertAdjacentElement('beforeend',Card8h3);
        Card9.insertAdjacentElement('beforeend',Card9h3);
        Card10.insertAdjacentElement('beforeend',Card10h3);
    
        Card6.insertAdjacentElement('beforeend',Card6h5);
        Card7.insertAdjacentElement('beforeend',Card7h5);
        Card8.insertAdjacentElement('beforeend',Card8h5);
        Card9.insertAdjacentElement('beforeend',Card9h5);
        Card10.insertAdjacentElement('beforeend',Card10h5);

        cardContainerNew.insertAdjacentElement('beforeend',Card6);
        cardContainerNew.insertAdjacentElement('beforeend',Card7);
        cardContainerNew.insertAdjacentElement('beforeend',Card8);
        cardContainerNew.insertAdjacentElement('beforeend',Card9);
        cardContainerNew.insertAdjacentElement('beforeend',Card10);

        cardContainer.insertAdjacentElement('afterend',cardContainerNew);
    }
});

let hamBurgerBtn = document.querySelector('.ham-burger-btn');

hamBurgerBtn.addEventListener('click',()=>{
    if(b%2 == 0) {
        menu.setAttribute('id','left-container-display');
    } else {
        menu.setAttribute('id','left-container-display-none');
    }
    b++;
});

let allSongs = document.querySelectorAll('audio');
function pauseSongs () {
    for(let oneSong of allSongs) {
        // let oneSongAudio = new Audio(`${oneSong.src}`);
        // oneSongAudio.pause();
        console.log(oneSong)
    }
}

let cardPlayBtns = document.querySelectorAll('.play-btn');
for(let btn of cardPlayBtns) {
    btn.addEventListener('click',()=>{
        pauseSongs();
        let pauseBtn = document.querySelector('.play-bar-play-btn');
        let songCard = btn.parentElement;
        console.log(songCard.children[0]);
        let song = new Audio(`${songCard.children[0].src}`);
        song.play();
        pauseBtn.addEventListener('click',()=>{
            song.pause();
        });
        let songCardImage = songCard.children[2].src;
        console.log(songCardImage);
        let playBarSongInfoContainer = document.querySelector('.song-info-container');
        let playBarSongInfoContainerImage = playBarSongInfoContainer.children[0];
        console.dir(playBarSongInfoContainerImage);
        playBarSongInfoContainerImage.setAttribute('src',songCardImage);
        playBarSongInfoContainerImage.style.height = '4rem';
        playBarSongInfoContainerImage.style.width = '5rem';
    });
}