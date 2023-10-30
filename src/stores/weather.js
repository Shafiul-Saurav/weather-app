import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    api_key: '3516dacaca06c02ed41cde56830bf10a',
    location_query: '',
    weather: {}
  }),

  getters: {

  },

  actions: {
    async fetchWeather(e){
      if(e.key == 'Enter') {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.location_query}&units=metric&appid=${this.api_key}`);
        console.log(data);
        this.weather = data;
      }
    },
  },
})
