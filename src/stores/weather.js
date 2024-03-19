import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useWeatherStore = 
defineStore('weather', {
    state: () => ({
        api_key : 'e7d50393bfdb0b5110064360a922c58b',
        location_query : '',
        weather:{}
    }),
    getters:{},
    actions:{
    async fetchWeather(e){
      if(e.key == 'Enter'){
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.location_query}&units=metric&appid=${this.api_key}`);
        this.weather = data
      }
      }
    }
})
