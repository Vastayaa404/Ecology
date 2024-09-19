<template>
  <q-page class="fullscreen flex flex-center animated fadeIn slower">

    <div class="flex flex-center justify-evenly" style="width: 60%; height: 5vh;">
      <q-btn class="shadow-3" color="red" text-color="white" label="Главная" unelevated rounded icon="fas fa-sort-up" @click="goToHome" />
      <q-btn class="shadow-3" color="red" text-color="white" label="Личный кабинет" unelevated rounded icon="fas fa-user" @click="logout" />
      <q-btn class="shadow-3" color="red" text-color="white" :label="btnEntryLabel" unelevated rounded icon="fas fa-sign-out" @click=action />
    </div>

    <q-scroll-area ref="scrollAreaRef" style="width: 100%; height: 93vh;">

      <div style="width: 100%; height: 5vh;"></div>

      <div class="flex flex-center" style="width: 100%;">
        <q-card class="my-card" style="width: 60%;">
          <q-card-section horizontal>
            <q-parallax
              class="col-8"
              src="../assets/6.png"
            ></q-parallax>
            <q-card-section>
              <b>CleanExpo Moscow</b> — ежегодная и самая масштабная отраслевая площадка для взаимодействия производителей и поставщиков оборудования и средств для уборки, стирки и чистки с заинтересованными представителями клининговых компаний, химчисток и прачечных со всей России. 
Участие в выставке CleanExpo Moscow 2024 со стендом будет особенно эффективно для российских и иностранных производителей и поставщиков оборудования для профессиональной уборки, химической чистки и стирки.
            </q-card-section>
          </q-card-section>
          <q-separator></q-separator>
          <q-card-actions>
            <q-btn flat round icon="event"></q-btn>
            <q-btn flat>
              29 ноября
            </q-btn>
            <q-btn flat>
              9:00AM
            </q-btn>
            <q-btn flat color="primary">
              Место
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div style="width: 100%; height: 5vh;"></div>

      <div class="flex flex-center" style="width: 100%;">
        <q-card class="my-card" style="width: 60%;">
          <q-card-section horizontal>
            <q-parallax
              class="col-8"
              src="../assets/2.jpeg"
            ></q-parallax>
            <q-card-section>
              <b>ESG Forum и ESG Excellence Award 2024</b> Основные тематические направления: Экология, Управление технологиями, Экологический менеджмент.
            </q-card-section>
          </q-card-section>
          <q-separator></q-separator>
          <q-card-actions>
            <q-btn flat round icon="event"></q-btn>
            <q-btn flat>
              16 октября
            </q-btn>
            <q-btn flat>
              10:00AM
            </q-btn>
            <q-btn flat color="primary">
              Место
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div style="width: 100%; height: 5vh;"></div>

      <div class="flex flex-center" style="width: 100%;">
        <q-card class="my-card" style="width: 60%;">
          <q-card-section horizontal>
            <q-parallax
              class="col-8"
              src="../assets/7.png"
            ></q-parallax>
            <q-card-section>
              <b>Wasma</b> международная выставка оборудования и технологий для обращения с отходами и очистки сточных вод.
Ежегодно российские и зарубежные производители и поставщики демонстрируют на выставке Wasma сотни моделей оборудования и технологии для сбора, сортировки, транспортирования, переработки, утилизации отходов, а также для водоподготовки и очистки сточных вод.
Посетители выставки — это руководители региональных операторов, экологи промышленных предприятий, представители компаний-утилизаторов и переработчиков, водоканалов, проектных организаций и лизинговых компаний, а также дилеров оборудования для обращения с отходами и очистки сточных вод. В 2024 году выставку посетили более 2 300 специалистов из 65 регионов России. Из них 94% посетителей влияют на принятие решений о закупках продукции, а 56% — планируют заключить договор на поставку оборудования и техники по итогам выставки.
            </q-card-section>
          </q-card-section>
          <q-separator></q-separator>
          <q-card-actions>
            <q-btn flat round icon="event"></q-btn>
            <q-btn flat>
              25 марта
            </q-btn>
            <q-btn flat>
              11:00AM
            </q-btn>
            <q-btn flat color="primary">
              Место
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div style="width: 100%; height: 5vh;"></div>

      <div class="flex flex-center" style="width: 100%;">
        <q-card class="my-card" style="width: 60%;">
          <q-card-section horizontal>
            <q-parallax
              class="col-8"
              src="../assets/4.jpeg"
            ></q-parallax>
            <q-card-section>
              <b>ЭкоГородЭкспо</b> Основные тематические направления: Экология, Косметика и парфюмерия, Экологически чистые материалы, Органические продукты, Эко-продукты, Натуральная косметика.
            </q-card-section>
          </q-card-section>
          <q-separator></q-separator>
          <q-card-actions>
            <q-btn flat round icon="event"></q-btn>
            <q-btn flat>
              25 апреля 2025
            </q-btn>
            <q-btn flat>
              12:00AM
            </q-btn>
            <q-btn flat color="primary">
              Место
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div style="width: 100%; height: 5vh;"></div>

      <div class="flex flex-center" style="width: 100%;">
        <q-card class="my-card" style="width: 60%;">
          <q-card-section horizontal>
            <q-parallax
              class="col-8"
              src="../assets/5.jpeg"
            ></q-parallax>
            <q-card-section>
              <b>Российский экологический форум (РЭФ)</b> — это крупнейшее отраслевое событие, объединяющее главных игроков сферы обращения с ТКО. Впервые РЭФ прошел в 2021 году. Этой осенью форум откроет свои двери уже в четвертый раз.
На одной площадке соберутся представители госаппарата, отраслевые специалисты и предприниматели. Среди топ-спикеров форума — вице-премьер Дмитрий Патрушев, глава Минприроды России Александр Козлов и генеральный директор ППК «Российский экологический оператор» Денис Буцаев.
Основные темы форума в 2023 году — расширенная ответственность производителей РОП и новые механизмы регулирования отрасли, инвестиционные проекты, зелёное финансирование, нормотворчество в сфере обращения ТКО, цифровизация отрасли и построение экономики замкнутого цикла.
Организатором РЭФ выступает Российский экологический оператор.
            </q-card-section>
          </q-card-section>
          <q-separator></q-separator>
          <q-card-actions>
            <q-btn flat round icon="event"></q-btn>
            <q-btn flat>
              7 октября
            </q-btn>
            <q-btn flat>
              11:00AM
            </q-btn>
            <q-btn flat color="primary">
              Место
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div style="width: 100%; height: 5vh;"></div>

      <div class="flex flex-center" style="width: 100%;">
        <q-card class="my-card" style="width: 60%;">
          <q-card-section horizontal>
            <q-parallax
              class="col-8"
              src="../assets/1.jpeg"
            ></q-parallax>
            <q-card-section>
              <b>Recycling Solutions 2025 - выставка по переработке и утилизации отходов</b> Основные тематические направления: Переработка и утилизация, Химическая промышленность, Переработка отходов, Химическая промышленность, Ресурсосбережение, Пластмассы и каучук.
            </q-card-section>
          </q-card-section>
          <q-separator></q-separator>
          <q-card-actions>
            <q-btn flat round icon="event"></q-btn>
            <q-btn flat>
              21 Января
            </q-btn>
            <q-btn flat>
              10:00AM
            </q-btn>
            <q-btn flat color="primary">
              Место
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div style="width: 100%; height: 5vh;"></div>

      <div class="flex flex-center" style="width: 100%;">
        <q-card class="my-card" style="width: 60%;">
          <q-card-section horizontal>
            <q-parallax
              class="col-8"
              src="../assets/8.jpg"
            ></q-parallax>
            <q-card-section>
              <b>Конференция «ПЫЛЕГАЗООЧИСТКА-2024»</b> посвященная основному и вспомогательному оборудованию систем аспирации, вентиляции и газоочистки на предприятиях металлургии, энергетики, нефтегазовой, химической, цементной, целлюлозно-бумажной, горнорудной и других отраслей промышленности.
              Ежегодно проводится ООО «ИНТЕХЭКО» с 2008 года и комплексно охватывает основные решения для очистки газов и воздуха от пыли, золы, диоксида серы, окислов азота, сероводорода, бензапирена, меркаптанов и других вредных веществ, примеры строительства новых и модернизации существующих установок газоочистки.
            </q-card-section>
          </q-card-section>
          <q-separator></q-separator>
          <q-card-actions>
            <q-btn flat round icon="event"></q-btn>
            <q-btn flat>
              25 сентября
            </q-btn>
            <q-btn flat>
              8:30AM
            </q-btn>
            <q-btn flat color="primary">
              Место
            </q-btn>
          </q-card-actions>
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

import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const scrollAreaRef = ref(null)
const position = ref(0)

const goToHome = () => {
  scrollAreaRef.value.setScrollPosition('vertical', position.value, 300);
  position.value = 0;
}

const user = JSON.parse(localStorage.getItem('user'));
let btnEntryLabel = user? 'Выйти' : 'Войти';

const action = () => {
  if(user) { localStorage.removeItem('user'); window.location.reload() }
  else { router.push('/signin') }
}
</script>
