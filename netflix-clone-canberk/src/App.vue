<template>
  
    <div class="app">
      
      <div class="logolist">
  
     <img class="netflixlogo" src="netflix-logo.png"> 
     <img class="homeoutline" src = "homeoutline.png" >
     <img class="search" src = "search.png" >
     <img class="plus" src = "plus.png" >
      </div>
      
      <div class="film-info">
        <h2>{{ selectedFilm.title }}</h2>
        <p>{{ selectedFilm.genre }}</p>
        <p>{{ selectedFilm.description }}</p>
        <p>{{ selectedFilm.year }}</p>
      </div>
      <div class="film-player">
        <video
        ref="videoPlayer"
          controls  class="videomp4"
        autoplay
        loop
        
        >
          <source :src="selectedFilm.videoUrl"  type="video/mp4">
          
          
          
          
        </video>
      </div>
      
  
      
    </div>
    <div class="featured">
      <h5>FEATURED MOVIES</h5>
       </div>
    
    
    
    <div class="filmlist">
      
      
        <slot-comp v-for="x in films">
          
          
          
          
          <button class="film-button" @click="selectFilm(x)"
          
          
          
          >  
            
            <img class="resim" v-bind:src="x.url"> <br>
            <h4>{{ x.title }}</h4>
            
  
          </button>
         
          
  
  
        </slot-comp>
        
  
  
      </div>
  </template>
  
  <script>
  import Magnify from 'vue-material-design-icons/Magnify.vue';
  import HomeOutLine from 'vue-material-design-icons/HomeOutLine.vue';
  import TrendingUp from 'vue-material-design-icons/TrendingUp.vue';
  import Television from 'vue-material-design-icons/Television.vue';
  import MovieOutLine from 'vue-material-design-icons/MovieOutLine.vue';
  import Plus from 'vue-material-design-icons/Plus.vue';
  export default {
    
    data() {
      return {
        films: [
          {
            title: "Avengers",
            genre: "Aksiyon,Macera,Fantastik",
            description: "Marvel Studios tarafindan üretilen ve Marvel Comics'in süper kahraman ekibidir..",
            year: "2012",
            videoUrl: "Avengers.mp4",
            url : "Avengers.jpg"
          },
          {
            title: "The Lord of the Rings",
            genre: "Fantastik",
            description: "Yüzüklerin Efendisi: Yüzük Kardeşliği, dünyanin kaderini değişterecek olan yüzükten kurtulmak için verilen mücadeleyi konu ediyor..",
            year: "2001",
            videoUrl: "The Lord of the Rings.mp4",
            url : "The Lord of the Rings.jpg"
          },
          {
            title: "Thor Love and Thunder",
            genre: "Fantastik",
            description: "Thor: Aşk ve Gök Gürültüsü, tanrilari yok etmeye and içen Gorr the God Butcher'a karşi zorlu bir mücadeleye girişen Thor'un hikayesini konu ediyor.",
            videoUrl: "Thor Love and Thunder.mp4",
            url : "Thor Love and Thunder.jpg",
            year: "2022"
          },
          {
            title: "The Nun",
            genre: "Korku",
            description: "Geçmişinde karanlik olaylar yaşamiş Rahip Burke (Demián Bichir) ve rahibe olmak için son aşamalara gelmiş genç rahibe adayi Irene (Taissa Farmiga), kendini öldürmüş bir rahibeyle ilgili araştirma yapmak için Vatikan tarafindan Romanya'nin ücra bir köşesindeki bir manastira gönderilir. Manastirin sirrini öğrenen ikili, sadece hayatlarini değil, hayatlarini adadiklari inançlarini da ortaya koyarak bir rahibe formuna karşilarina çikan şeytani güçle savaşacaktir.",
            videoUrl: "TheNun.mp4",
            url : "TheNun.jpg",
            year:"2018"
            
          },
          {
            title: "Pirates of the Caribbean",
            genre: "Fantastic",
            description: "Jack, Salazar'in gazabindan ve intikamindan kurtulmak için Poseidon Asasinin peşine düşer. Bu efsanevi asayi bulmak içinse güzel ve zeki gökbilimci Carina Smyth ve Kraliyet Donanmasi'ndan  dik başli, genç bir denizci olan Henry ile zorlu bir anlaşma yapar.",
            videoUrl: "Pirates of the Caribbean.mp4",
            url : "Pirates of the Caribbean.jpg",
            year: "2017"
          },
          {
            title: "Dexter",
            genre: "Drama",
            description: "Gündüzleri adli tip polisi, geceleri ise seri katil, üstelik ikisinde de çok başarili. Bir katili bir başka katilden daha iyi kim anlayabilir! Öldürme arzusu disinda insani duygulardan yoksun doğan Dexter, ahlaki değerleri olan bir seri katil: Sadece yasalarin elinden kaçmayi başaran canileri öldürüyor..",
            videoUrl: "Dexter.mp4",
            url : "Dexter.jpg",
            year: "2006"

          },
          {
            title: "The Witcher",
            genre: "Fantastic",
            description: "Witcher Saga roman serisi sayisiz dile çevrilen, hakkinda film, dizi, oyun ve grafik roman yapilan The Witcher, Netflix ekranlarinda izleyiciyle buluşacak. Video oyunu tüm dünyada 33 milyonun üzerinde satarak çok büyük bir başari yakalayan The Witcher, genç yaşta doğaüstü yetenekleriyle canavarlarla savaşan cadilari anlatmakta.",
            videoUrl: "witcher.mp4",
            url : "witcher.jpg",
            year: "2019"

          },
          {
            title: "Game of Thrones",
            genre: "Drama",
            description: "Kis yaklasiyor, hanedan entrikalari, kapali kapilar ardinda dönen oyunlar, birilerinin kuyusunu kazmak icin dusmanina yaklasan kadinlar,kardesler arasi cekismeler hepsi tek bir amac icin demir bir taht.",
            videoUrl: "Game of Thrones.mp4",
            url : "Game of Thrones.jpg",
            year: "2011"
          },
          
          // Diğer filmler...
        ],
       
        selectedFilm: {}
      };
    },
    methods: {
      selectFilm(film) {
        this.selectedFilm = film;
        this.$refs.videoPlayer.load(); 
        this.$refs.videoPlayer.play();
        console.log(this.selectedFilm, 'film');
  
        
      }
    },
    mounted() {
      
      this.selectedFilm = this.films[0];
    }
  
  };
  </script>
  
  <style>
  .app {
    display: flex;
    background-color: black;
    
  }
  .film-info {
    color: white;
    font-size: 20pt;
    font-family: sans-serif;
    flex: 1;
    padding: 20px;
    background-color: black;
  }
  .film-player {
    display: flex;
    padding: 20px;
    margin: 20px;
    
    
  }
  .t1{
    color: white;
    font-size: 14pt;
    font-family: sans-serif;
    background-color: black;
  }
  
  .videomp4 {
    width: 800px;
    height: 500px
  }.filmlist{
   display:grid;
   background-color: black;
   font-size: 20pt;
   font-family: sans-serif;
   grid-template-columns: repeat(8, 170px);
   
  }
  
  .resim{
    width: 200px;
    height: 200px;
    background-color: black;
  }
  .film-button {
    position: relative;
    overflow: hidden;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: transform 0.5s ease;
    
  }
  
  .film-button:hover {
    transform: translateX(15px);
  }
  .netflixlogo{
    width: 100px;
    height: 100px;
    background-color: black;
    flex-direction: column;
    
  }
  .logo-list {
  display: grid;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  background-color: black;
}
.search {
  width: 50px;
  height: 50px;
  background-color: black;
  margin-bottom: 10px;
  flex-direction: column;
  display: grid;

}
.homeoutline {
  width: 50px;
  height: 50px;
  background-color: black;
  margin-bottom: 10px;
  flex-direction: column;
  display: grid;

}
.plus {
  width: 50px;
  height: 50px;
  background-color: black;
  margin-bottom: 10px;
  flex-direction: column;
  display: grid;

}
.featured{
  font-size: 20pt;
  font-family: sans-serif;
  color: white;
  background-color: black;
  display: flex;
  
  
}
  
  
  </style>
