<template>
  <div class="lg:flex">
    <div class="lg:bg-black lg:h-auto lg:w-1/2 py-6">
      <!-- Logo -->
      <div class="hidden lg:flex lg:items-center">
        <img class="w-12" src="../assets/img/logo.png" alt="logo" />
        <h1 class="text-white text-2xl font-bold py-2 ml-2">
          anime<span style="color: #ca38ed">yabu.</span>
        </h1>
      </div>

      <!-- Welcome -->
      <div class="flex justify-center items-center text-left pb-6">
        <div class="">
          <img src="../assets/img/pack2818.png" alt="picture" />
        </div>
        <div class="text-white">
          <h3 class="font-bold text-4xl pb-4">ようこそ!</h3>
          <p class="italic tracking-wider ml-1">¡Bienvenido(a)!</p>
        </div>
      </div>

      <!-- Fomr Login -->
      <div class="pb-6 lg:px-24">
        <form @submit.prevent="doRegister()" class="flex flex-col">
          <div class="flex justify-between p-2 text-white">
            <label for="">Tipo de persona</label>
            <div>
              <input
                class="bg-white"
                type="radio"
                value="1"
                v-model="userData.type_user_id"
              />
              <label for="">Juridica</label>
            </div>
            <div>
              <input type="radio" value="2" v-model="userData.type_user_id" />
              <label for="">Natural</label>
            </div>
          </div>
          <div
            class="flex flex-col w-full p-2"
            v-if="userData.type_user_id == 1"
          >
            <label class="text-white text-sm pb-1">Nombre</label>
            <input
              v-model="userData.name"
              class="
                p-2
                placeholder-gray-300
                rounded-md
                border-2 border-gray-300
                text-white
              "
              style="background: rgba(255, 255, 255, 0.47)"
              type="text"
              placeholder=""
              required
            />
          </div>
          <div
            class="flex flex-col w-full p-2"
            v-if="userData.type_user_id == 1"
          >
            <label class="text-white text-sm pb-1">Apellido</label>
            <input
              v-model="userData.lastname"
              class="
                p-2
                placeholder-gray-300
                rounded-md
                border-2 border-gray-300
                text-white
              "
              style="background: rgba(255, 255, 255, 0.47)"
              type="text"
              placeholder=""
              required
            />
          </div>
          <div
            class="flex flex-col w-full p-2"
            v-if="userData.type_user_id == 2"
          >
            <label class="text-white text-sm pb-1">Razón social</label>
            <input
              v-model="userData.razon_social"
              class="
                p-2
                placeholder-gray-300
                rounded-md
                border-2 border-gray-300
                text-white
              "
              style="background: rgba(255, 255, 255, 0.47)"
              type="text"
              placeholder=""
              required
            />
          </div>
          <div
            class="flex flex-col w-full p-2"
            v-if="userData.type_user_id == 2"
          >
            <label class="text-white text-sm pb-1">NIT</label>
            <input
              v-model="userData.NIT"
              class="
                p-2
                placeholder-gray-300
                rounded-md
                border-2 border-gray-300
                text-white
              "
              style="background: rgba(255, 255, 255, 0.47)"
              type="number"
              placeholder=""
              required
            />
          </div>
          <div class="flex flex-col w-full p-2">
            <label class="text-white text-sm pb-1">Teléfono</label>
            <input
              v-model="userData.telephone"
              class="
                p-2
                placeholder-gray-300
                rounded-md
                border-2 border-gray-300
                text-white
              "
              style="background: rgba(255, 255, 255, 0.47)"
              type="number"
              placeholder=""
              required
            />
          </div>
          <div
            class="flex flex-col w-full p-2"
            v-if="userData.type_user_id == 1"
          >
            <label class="text-white text-sm pb-1"
              >Número de identificación</label
            >
            <input
              v-model="userData.identy_document"
              class="
                p-2
                placeholder-gray-300
                rounded-md
                border-2 border-gray-300
                text-white
              "
              style="background: rgba(255, 255, 255, 0.47)"
              type="number"
              placeholder=""
              required
            />
          </div>
          <div class="flex flex-col w-full p-2">
            <label class="text-white text-sm pb-1">Email</label>
            <input
              v-model="userData.email"
              class="
                p-2
                placeholder-gray-300
                rounded-md
                border-2 border-gray-300
                text-white
              "
              style="background: rgba(255, 255, 255, 0.47)"
              type="email"
              placeholder="usuario@yabu.com"
              required
            />
          </div>
          <div class="flex flex-col w-full p-2">
            <label class="text-white text-sm pb-1">Contraseña</label>
            <input
              v-model="userData.password"
              class="
                p-2
                placeholder-gray-300
                rounded-md
                border-2 border-gray-300
                text-white
              "
              style="background: rgba(255, 255, 255, 0.47)"
              type="password"
              placeholder="Contraseña"
              required
            />
          </div>
          <div class="flex flex-col w-full px-2 pt-2 pb-6">
            <label class="text-white text-sm pb-1">Confirmar contraseña</label>
            <input
              v-model="userData.password_confirmation"
              class="
                p-2
                placeholder-gray-300
                rounded-md
                border-2 border-gray-300
                text-white
              "
              style="background: rgba(255, 255, 255, 0.47)"
              type="password"
              placeholder="Contraseña"
              required
            />
          </div>
          <div class="flex flex-col w-full p-2">
            <button
              class="text-sm font-semibold p-3 rounded-md"
              style="background: #e487fb"
              type="submit"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>

      <!-- Login with RRSS -->
      <div class="lg:px-24">
        <div class="flex justify-center items-center text-white pb-6">
          <hr />
          <div class="tracking-wider">Registrate también con</div>
          <div><hr /></div>
        </div>
        <div class="flex justify-around text-white text-2xl pb-6">
          <div
            class="text-center w-10 h-10 border-2 border-gray-300 rounded-md"
            style="background: rgba(255, 255, 255, 0.47)"
          >
            <i class="fab fa-instagram"></i>
          </div>
          <div
            class="text-center w-10 h-10 border-2 border-gray-300 rounded-md"
            style="background: rgba(255, 255, 255, 0.47)"
          >
            <i class="fab fa-twitter"></i>
          </div>
          <div
            class="text-center w-10 h-10 border-2 border-gray-300 rounded-md"
            style="background: rgba(255, 255, 255, 0.47)"
          >
            <i class="fab fa-facebook-f"></i>
          </div>
        </div>
      </div>
      <div class="text-center pb-4">
        <span class="text-white tracking-wide text-sm"
          >¿Ya estás registrado?</span
        >
        <router-link to="/">
          <span class="ml-2 text-sm cursor-pointer" style="color: #e487fb"
            >Acceder</span
          >
        </router-link>
      </div>
    </div>

    <!-- Carrusel -->
    <div
      class="hidden lg:flex lg:w-1/2 lg:justify-center lg:items-center lg:py-6"
      style="background: #3e1149"
    >
      <div class="carousel relative">
        <div class="carousel-inner relative overflow-hidden w-full h-full">
          <!--Slide 1-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden=""
            checked="checked"
          />
          <div
            class="carousel-item absolute opacity-0 py-4"
            style="height: 100vh"
          >
            <div class="block h-full w-full justify-center items-center">
              <div
                class="
                  w-1/2
                  h-1/2
                  lg:w-72 lg:h-72
                  xl:w-96 xl:h-96
                  absolute
                  m-auto
                  rounded-full
                  top-0
                  left-0
                  right-0
                "
                style="background: #e487fb"
              ></div>
              <div>
                <img
                  class="w-2/3 m-auto relative"
                  src="../assets/img/slider1.png"
                  alt=""
                />
              </div>
              <div class="text-center">
                <h1 class="text-white text-6xl font-bold py-2">
                  anime<span style="color: #ca38ed">yabu.</span>
                </h1>
                <div class="w-2/3 m-auto pt-2">
                  <p class="text-white text-center">
                    Ver anime en línea en HD, subtitulado o doblado, en tu
                    celular o computadora. ¡Animeyabu, tu portal de anime en
                    línea!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!--Slide 2-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div
            class="carousel-item absolute opacity-0 py-4"
            style="height: 100vh"
          >
            <div class="block h-full w-full justify-center items-center">
              <div
                class="
                  w-1/2
                  h-1/2
                  lg:w-72 lg:h-72
                  xl:w-96 xl:h-96
                  absolute
                  m-auto
                  rounded-full
                  left-0
                  right-0
                "
                style="background: #e487fb"
              ></div>
              <div>
                <img
                  class="w-1/2 m-auto relative"
                  src="../assets/img/slider2.png"
                  alt=""
                />
              </div>
              <div class="text-center">
                <h1 class="text-white text-6xl font-bold py-2">
                  anime<span style="color: #ca38ed">Kyojuro.</span>
                </h1>
                <div class="w-2/3 m-auto pt-2">
                  <p class="text-white text-center">
                    Ver anime en línea en HD, subtitulado o doblado, en tu
                    celular o computadora. ¡Animeyabu, tu portal de anime en
                    línea!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!--Slide 3-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div
            class="carousel-item absolute opacity-0 py-4"
            style="height: 100vh"
          >
            <div class="block h-full w-full justify-center items-center">
              <div
                class="
                  w-1/2
                  h-1/2
                  lg:w-72 lg:h-72
                  xl:w-96 xl:h-96
                  absolute
                  m-auto
                  rounded-full
                  left-0
                  right-0
                "
                style="background: #e487fb"
              ></div>
              <div>
                <img
                  class="w-1/2 m-auto relative"
                  src="../assets/img/slider3.png"
                  alt=""
                />
              </div>
              <div class="text-center">
                <h1 class="text-white text-6xl font-bold py-2">
                  anime<span style="color: #ca38ed">Inosuke.</span>
                </h1>
                <div class="w-2/3 m-auto pt-2">
                  <p class="text-white text-center">
                    Ver anime en línea en HD, subtitulado o doblado, en tu
                    celular o computadora. ¡Animeyabu, tu portal de anime en
                    línea!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ol class="carousel-indicators">
            <li class="inline-block mr-3">
              <label
                for="carousel-1"
                class="
                  carousel-bullet
                  cursor-pointer
                  block
                  text-4xl text-white
                  hover:text-blue-700
                "
                >•</label
              >
            </li>
            <li class="inline-block mr-3">
              <label
                for="carousel-2"
                class="
                  carousel-bullet
                  cursor-pointer
                  block
                  text-4xl text-white
                  hover:text-blue-700
                "
                >•</label
              >
            </li>
            <li class="inline-block mr-3">
              <label
                for="carousel-3"
                class="
                  carousel-bullet
                  cursor-pointer
                  block
                  text-4xl text-white
                  hover:text-blue-700
                "
                >•</label
              >
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      userData: {
        name: "",
        lastname: "",
        identy_document: "",
        telephone: "",
        NIT: "",
        razon_social: "",
        type_user_id: 1,
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    redirect() {
      this.$router.push({ name: "home" });
    },
    resetData() {
      this.userData.name = "";
      this.userData.lastname = "";
      this.userData.identy_document = "";
      this.userData.telephone = "";
      this.userData.NIT = "";
      this.userData.razon_social = "";
      this.userData.type_user_id = "";
      this.userData.email = "";
      this.userData.password = "";
      this.userData.password_confirmation = "";
    },
    async doRegister() {
      try {
        const SHA256 = require("crypto-js/sha256");
        let PUBLIC_KEY = "VBNfgfTYrt5666FGHFG6FGH65GHFGHF656g";
        let PRIVATE_KEY = "DGDFGDbnbnTRTEfg67hgyTYRTY56gfhdR6";
        let HORA_ACTUAL = new Date().toISOString();
        let signature = PRIVATE_KEY + "," + PUBLIC_KEY + "," + HORA_ACTUAL;
        if (this.userData.type_user_id == 1) {
          await this.$store.dispatch("doRegister", {
            telephone: this.userData.telephone,
            NIT: this.userData.NIT,
            razon_social: this.userData.razon_social,
            type_user_id: this.userData.type_user_id,
            verify_tc: "1",
            password: this.userData.password,
            password_confirmation: this.userData.password_confirmation,
            email: this.userData.email,
            apiKey: PUBLIC_KEY,
            utcTimeStamp: HORA_ACTUAL,
            signature: SHA256(signature),
          });
        } else {
          await this.$store.dispatch("doRegister", {
            name: this.userData.name,
            lastname: this.userData.lastname,
            telephone: this.userData.telephone,
            identy_document: this.userData.identy_document,
            type_user_id: this.userData.type_user_id,
            verify_tc: "1",
            password: this.userData.password,
            password_confirmation: this.userData.password_confirmation,
            email: this.userData.email,
            apiKey: PUBLIC_KEY,
            utcTimeStamp: HORA_ACTUAL,
            signature: SHA256(signature),
          });
        }
        Swal.fire({
          title: "¡Yeah!",
          text: "Registrado Correctamente",
          icon: "success",
          timer: 1500,
        });
        setTimeout(() => {
          this.redirect();
          this.resetData();
        }, 1500);
      } catch (error) {
        Swal.fire("Error", "Ha ocurrido un error", "error");
      }
    },
  },
};
</script>
<style scoped>
.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}
.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}
#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}
.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}
#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #2b6cb0;
}
</style>
