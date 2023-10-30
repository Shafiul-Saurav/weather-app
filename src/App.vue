<script setup>
//All Libraries
// import { onMounted } from "vue";
import { useWeatherStore } from "./stores/weather";

//Instance or Object
const weatherStore = useWeatherStore();
//Method or Function

//Computed, Watches and Hooks
// onMounted(() => {});
</script>

<template>
  <div class="container">
    <div class="row mt-3 d-flex justify-content-center">
      <div class="col-md-5">
        <div class="row">
          <div class="col-md-12">
            <div class="wrapper">
              <div class="wrap">
                <div class="search_box">
                  <input
                    v-model="weatherStore.location_query"
                    @keypress="weatherStore.fetchWeather"
                    class="form-control search_bar"
                    type="search"
                    placeholder="Search"
                  />
                </div>
                <div class="mt-5" v-if="weatherStore.weather.main != undefined">
                  <div class="card bg_transparent">
                    <div class="card-body text-white text-center">
                      <h3>
                        {{ weatherStore.weather.name }},
                        {{ weatherStore.weather.sys.country }}
                      </h3>
                      <p>{{ new Date().toDateString() }}</p>
                      <p class="temp">{{ weatherStore.weather.main.temp }} °C</p>
                      <p class="weather">{{ weatherStore.weather.weather[0].main }}</p>
                      <div class="weather_icon">
                        <img
                          :src="`https://openweathermap.org/img/wn/${weatherStore.weather.weather[0].icon}@2x.png`"
                          alt=""
                        />
                      </div>
                      <div class="d-flex justify-content-between">
                        <p class="presure">
                          Pressure: {{ weatherStore.weather.main.pressure }} hPa
                        </p>
                        <p class="humidity">
                          Humidity: {{ weatherStore.weather.main.humidity }} %
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@300;500;700;900&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}
.wrapper {
  background-image: url("./assets/sass/default_weather.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.4s;
  border-radius: 25px;
  box-shadow: 0 0 0 #00000065;
}

.wrap {
  height: 630px;
  padding: 25px;
  border-radius: 25px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.4));
}

.search_box .search_bar {
  display: block;
  color: #313131;
  font-size: 20px;
  padding: 10px 15px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transition: 0.4s;
}

.search_box .search_bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
}

.bg_transparent {
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 25px;
}

.temp {
  display: inline-block;
  padding: 10px 25px;
  color: #fff;
  font-size: 70px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  font-style: italic;
}
</style>
