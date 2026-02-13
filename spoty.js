//Initialize the variable
let sondIndex = 0;
let masterplay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let audioElement = new Audio('songs/1.mp3');
let gif= document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
 let mastersongname=document.querySelector('#songl');
 //let songtime= document.querySelector('#time');



let song =[
    {songName: "Oh Shive mere", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "KAUN TUJHE ", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Tum she Mahabot Ha haa", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "kabi chhup chhup rehe", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Tumi ki jano keu arale bo...", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Kesariya Tera", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Ki kore Bol", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Shabore", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tum she mile ki durthi", filePath: "songs/9.mp3", coverPath: "bg.jpg"},
    {songName: "Warriyo-Mortals", filePath: "songs/10.mp3", coverPath: "bg.jpg"},


]
songItem.forEach((element, i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = song[i].coverPath; 
    element.getElementsByClassName("songname")[0].innerText = song[i].songName; 
    

    let audio = new Audio(song[i].filePath);
    audio.addEventListener('loadedmetadata', () => {
        const minutes = Math.floor(audio.duration / 60);
        const seconds = Math.floor(audio.duration % 60);
        element.querySelector('#time').innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    });


})


// audioElement.play():

//handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity=0;
    
    }





})



//listen to Events
audioElement.addEventListener('timeupdate', ()=>
{
//update seekbar
 let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myprogressbar.value = progress;

})

myprogressbar.addEventListener('click', ()=>{
    audioElement.currentTime= myprogressbar.value * audioElement.duration/100;
})
/////////////



 const makeAllplay=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.classList.remove('fa-pause');
    element.classList.add('fa-play');
    })
 }
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (el)=>{
        console.log(el.target);
        makeAllplay();
        sondIndex =parseInt(el.target.id);
        el.target.classList.remove('fa-play');
        el.target.classList.add('fa-pause');
        audioElement.src=`songs/${sondIndex+1}.mp3`;
        mastersongname.innerText =song[sondIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity=1;
    })

})

/////
document.getElementById('next').addEventListener('click',()=>{
    if(sondIndex>=9){
        sondIndex=0;
    }
    else{
        sondIndex += 1;
    }
    audioElement.src=`songs/${sondIndex+1}.mp3`;
    mastersongname.innerText =song[sondIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    gif.style.opacity=1;
})
document.getElementById('previous').addEventListener('click',()=>{
    if(sondIndex<=0){
        sondIndex=0;
    }
    else{
        sondIndex -= 1;
    }
    audioElement.src=`songs/${sondIndex+1}.mp3`;
    mastersongname.innerText =song[sondIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    gif.style.opacity=1;
})


///time duration
// Display the duration of the current song in minutes and seconds
// //audioElement.addEventListener('loadedmetadata', () => {
//     const minutes = Math.floor(audioElement.duration / 60);
//     const seconds = Math.floor(audioElement.duration % 60);
//     songtime.innerText=`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//     console.log(`Duration: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
// });

