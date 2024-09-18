<template>
  <div class="flex flex-center" style="min-width: 100vw; min-height: 100vh;">
    <q-card style="width: 20vw;">
      <q-card-section>
        <q-form class="q-gutter-md" @submit="onSubmit">
          <q-input
            v-model="formData.username"
            label="Логин"
            type="text"
            placeholder="Имя пользователя"
            lazy-rules
            :rules="[val => val && val.length > 0 || 'Введите логин']"
          />

          <q-input
            v-model="formData.password"
            label="Пароль"
            type="password"
            lazy-rules
            :rules="[val => val && val.length > 0 || 'Введите пароль']"
          />

          <div class="row justify-center">
            <q-btn label="Войти" type="submit" color="primary" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
defineOptions({
  name: 'SigninPage'
});

import { reactive } from 'vue'
import { signin } from '../common/auth.service.mjs';
import { useRouter } from 'vue-router';
const router = useRouter();

const formData = reactive({
  username: '',
  password: ''
})

const onSubmit = async () => { const { c, msg } = await signin(formData.username, formData.password); c !== 200 ? console.log(`${c}: ${msg}`) : router.replace('/') }

</script>

