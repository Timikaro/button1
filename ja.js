


const containerJam = document.getElementsByClassName('container')[0];
const Tbtn = document.getElementById('checkbox');
const box = document.getElementsByTagName('label')[0];
const tangkaph1 = document.getElementById('h1');
const Tjam = document.getElementById('jam');
Tbtn.addEventListener('change',function(){
box.classList.toggle('boxShadow');
document.body.classList.toggle('dark');
tangkaph1.classList.toggle('checkboxh1');
Tjam.classList.toggle('jamcheck');

});




const contain = setInterval(function(){
   const Tangkapjam = document.getElementById('jam');
   let menit = new Date().getMinutes();
   let detik = new Date().getSeconds();
 
let jam = new Date().getHours();

   if (jam == 0){
    jam = 12;
}
 if(jam > 12){
    jam = jam -12;
} 
   
   


   jam = (jam < 10) ? "0" + jam: jam;
   menit = (menit < 10) ? "0" + menit: menit;
   detik = (detik < 10) ? "0" + detik: detik;


   Tangkapjam.innerHTML = jam +':'+ menit +':'+ detik

    }, 1000);





const Tangkapsesi =document.getElementById('sesion');
const Ttext =document.getElementsByClassName('text')[0];
let jam = new Date().getHours();
const sesi = setInterval(function(){
    if( jam > 0 && jam < 10){
        Tangkapsesi.innerHTML= 'Pagi'
    };
     if( jam > 10 && jam < 15){
        Tangkapsesi.innerHTML = 'Siang'
    };
     if( jam > 15 && jam < 18) {
        Tangkapsesi.innerHTML ='Sore'
       
    };
     if( jam > 18 && jam < 24){
        Tangkapsesi.innerHTML ='Malam'
     };
    
     
   });








   const Ttutup = document.getElementsByClassName('tutup')[0];


   const Tnama = document.getElementById('nama');
   const namaBar = prompt('Masukan Nama');
   
   
   Tnama.innerHTML = namaBar;

