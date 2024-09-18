<template>
  <q-page class="fullscreen flex flex-center animated fadeIn slower">

    <div class="flex flex-center justify-evenly" style="width: 60%; height: 5vh; background-color: grey;">
      <q-btn class="shadow-3" color="grey-4" text-color="black" unelevated rounded icon="fas fa-user" @click="logout" />
      <q-btn class="shadow-3" color="grey-4" text-color="black" unelevated rounded icon="fas fa-user" @click="logout" />
      <q-btn class="shadow-3" color="grey-4" text-color="black" unelevated rounded icon="fas fa-sign-out" @click="logout" />
    </div>

    <q-scroll-area style="width: 100%; height: 93vh;">

      <div style="width: 100%; height: 5vh;"></div>

      <div class="flex flex-center" style="width: 100%;">
        <q-card class="my-card" style="width: 60%;">
          <q-parallax
            src="https://cdn.quasar.dev/img/parallax1.jpg"
            style="height: 30vh;"
          ></q-parallax>
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
        </q-card>
      </div>

      <div style="width: 100%; height: 5vh;"></div>

      <div class="flex flex-center" style="width: 100%;">
        <q-card class="my-card" style="width: 60%;">
          <q-parallax
            src="https://cdn.quasar.dev/img/parallax1.jpg"
            style="height: 30vh;"
          ></q-parallax>
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
        </q-card>
      </div>

      <div style="width: 100%; height: 5vh;"></div>

      <div class="flex flex-center" style="width: 100%;">
        <q-card class="my-card" style="width: 60%;">
          <q-parallax
            src="https://cdn.quasar.dev/img/parallax1.jpg"
            style="height: 30vh;"
          ></q-parallax>
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
        </q-card>
      </div>

      <div style="width: 100%; height: 5vh;"></div>

      <div class="flex flex-center" style="width: 100%;">
        <q-card class="my-card" style="width: 60%;">
          <q-parallax
            src="https://cdn.quasar.dev/img/parallax1.jpg"
            style="height: 30vh;"
          ></q-parallax>
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
        </q-card>
      </div>

      <div style="width: 100%; height: 5vh;"></div>

      <div class="flex flex-center" style="width: 100%;">
        <q-card class="my-card" style="width: 60%;">
          <q-parallax
            src="https://cdn.quasar.dev/img/parallax1.jpg"
            style="height: 30vh;"
          ></q-parallax>
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
        </q-card>
      </div>

      <div style="width: 100%; height: 5vh;"></div>

      <div class="flex flex-center" style="width: 100%;">
        <q-card class="my-card" style="width: 60%;">
          <q-parallax
            src="https://cdn.quasar.dev/img/parallax1.jpg"
            style="height: 30vh;"
          ></q-parallax>
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
        </q-card>
      </div>

      <div style="width: 100%; height: 5vh;"></div>

    </q-scroll-area>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'HomePage'
});

import { IconSet } from 'quasar'
</script>
