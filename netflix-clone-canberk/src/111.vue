<template>
  <div class="fixed w-full h-screen bg-black">
    <div id="sideNav" class="flex z-40 items-center w-[120px] h-screen bg-black relative]">

   <img class="absolute top-0 -x-150 w-[50px] mt-10 ml-10" src="netflix-logo.png">   
    </div>
    <div class="py-2 mx-10 my-6">
      <Magnify fillColor = "#FFFFFF" size="40" class="cursor-pointer"/>
    </div>
    <div class="py-2 mx-10 my-6 border-b-4 border-b-red-500">
      <HomeOutLine fillColor = "#FFFFFF" size="40" class="cursor-pointer"/>
    </div>
    <div class="py-2 mx-10 my-6">
      <TrendingUp fillColor = "#FFFFFF" size="40" class="cursor-pointer"/>
    </div>
    <div class="py-2 mx-10 my-6">
      <Television fillColor = "#FFFFFF" size="40" class="cursor-pointer"/>
    </div>
    <div class="py-2 mx-10 my-6">
      <MovieOutLine fillColor = "#FFFFFF" size="40" class="cursor-pointer"/>
    </div>
    <div class="py-2 mx-10 my-6">
      <Plus fillColor = "#FFFFFF" size="40" class="cursor-pointer"/>
    </div>
    
    <div class="film-info">
      <h2>{{ selectedFilm.title }}</h2>
      <p>{{ selectedFilm.genre }}</p>
      <p>{{ selectedFilm.description }}</p>
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
          genre: "Aksiyon",
          description: "Marvel superkahraman evreni.",
          videoUrl: "Avengers.mp4",
          url : "Avengers.jpg"
        },
        {
          title: "The Lord of the Rings",
          genre: "Fantastic",
          description: "Orta dunyada gecen fantastik film.",
          videoUrl: "The Lord of the Rings.mp4",
          url : "The Lord of the Rings.jpg"
        },
        {
          title: "Thor Love and Thunder",
          genre: "Fantastic",
          description: "Marvel kahramani thorun basindan gecenler.",
          videoUrl: "Thor Love and Thunder.mp4",
          url : "Thor Love and Thunder.jpg"
        },
        {
          title: "The Nun",
          genre: "Horror",
          description: "Korku filmi.",
          videoUrl: "TheNun.mp4",
          url : "TheNun.jpg"
        },
        {
          title: "Pirates of the Caribbean",
          genre: "Fantastic",
          description: "Korsanlar.",
          videoUrl: "Pirates of the Caribbean.mp4",
          url : "Pirates of the Caribbean.jpg"
        },
        {
          title: "Dexter",
          genre: "Drama",
          description: "Bir katilin hayati.",
          videoUrl: "Dexter.mp4",
          url : "Dexter.jpg"
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
 display:flex;
 background-color: black;
 font-size: 20pt;
 font-family: sans-serif;
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



</style>