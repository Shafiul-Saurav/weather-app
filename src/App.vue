<script setup></script>

<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-5">
        <div class="row">
          <div class="col-md-12">
            <div class="wrapper">
              <div class="wrap">
                <div class="search_box">
                  <input
                    class="form-control search_bar"
                    type="search"
                    placeholder="Search"
                  />
                </div>
                <div class="mt-5">
                  <div class="card bg_transparent">
                    <div class="card-body text-white text-center">
                      <h3>Dhaka</h3>
                      <p>29/10/2023</p>
                      <p class="temp">32°C</p>
                      <p class=""></p>
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
  height: 600px;
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
  font-size: 100px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  font-style: italic;
}
</style>
