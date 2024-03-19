<script setup>
  import { useWeatherStore } from './stores/weather';
  const weatherStore = useWeatherStore();
</script>

<template>
    <div class="container">
      <div class="wrap">
        <!-- search -->
        <div class="search_box">
          <input type="text" class="search_bar" placeholder="Search with city name..." v-model="weatherStore.location_query" @keypress="weatherStore.fetchWeather">
        </div>

        <!-- weather Information -->
        <div class="weather_info" v-if="weatherStore.weather.main!=undefined">
          <div class="location_box">
            <div class="location">{{ weatherStore.weather.name }}, {{ weatherStore.weather.sys.country }}</div>
            <div class="date">{{ new Date().toDateString() }}</div>
          </div>
        </div>

        <!-- weather box -->
        <div class="weather_box" v-if="weatherStore.weather.main!=undefined">
          <div class="temp">{{ weatherStore.weather.main.temp }} °C</div>
          <div class="weather">{{ weatherStore.weather.weather[0].main }}</div>
          <div class="icon">
            <img :src="`https://openweathermap.org/img/wn/${weatherStore.weather.weather[0].icon}@2x.png`" alt="">
          </div>
          <div class="other_info">
            <span class="pressure">Pressure: {{ weatherStore.weather.main.pressure }} mb</span>
            <span class="pressure">Humidity: {{ weatherStore.weather.main.humidity }} %</span>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }
  .container {
    background-image: url('./assets/def.jpg');
    background-size: cover;
    background-position: center;
    transition: 0.4s;
    width: 375px;
    margin: 0 auto;
    margin-top: 2rem;
    border-radius: 25px;
    box-shadow: 0px 0px 30px #000065;
  }
  .wrap{
    height: 700px;
    padding: 25px;
    border-radius: 25px;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.15));
  }
  .search_box .search_bar{
    display: block;
    width: 100%;
    padding: 15px;
    color: #313131;
    font-size: 20px;
    appearance: none;
    border: none;
    outline: none;
    background: none;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    transition: 0.4s;
  }

  .search_box .search_bar:focus{
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.75);
  }

  .location_box .location{
    color: white;
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    margin-top: 20px;
    font-style: italic;
  }

  .location_box .date{
    color: white;
    text-align: center;
    font-size: 20px;
    font-weight: 300;
  }

  .weather_box{
    text-align: center;
  }

  .weather_box .temp{
    display: inline-block;
    padding:10px 15px ;
    color: white;
    font-size: 100px;
    font-weight: 900;
    text-shadow: 3px 6px rgba(0,0,0, 0.25);
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 16px;
    margin: 30px 0;
    box-shadow: 3px 6px rgba(0,0,0, 0.25);
    font-style: italic;
  }

  .weather_box .weather{
    color: white;
    font-size: 48px;
    font-weight: 700;
    font-style: italic;
    text-shadow: 3px 6px rgba(0,0,0, 0.25);
  }
  .other_info{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pressure{
    color: white;
    font-size: 18px;
  }
</style>
