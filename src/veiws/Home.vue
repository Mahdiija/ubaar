<template>
  <div class="home">
    <!-- STEP ONE: Form -->
    <div dir="rtl" v-if="currentStep === 1">
      <p>ثبت آدرس</p>
      <form @submit.prevent="handleStepOneSubmit">
        <div class="form-page">
          <div><p>لطفا مشخصات و آدرس خود را وارد کنید</p></div>
          <div class="all-form">
            <div class="form">
              <div class="form-group">
                <label for="firstName">نام</label>
                <div class="input-container">
                  <input
                    type="text"
                    id="firstName"
                    v-model="form.firstName"
                    :class="{
                      'input-error': errors.firstName,
                      'input-focused': focusedField === 'firstName',
                    }"
                    @input="clearError('firstName')"
                    placeholder="مثال محمدرضا"
                  />
                  <span
                    v-if="form.firstName"
                    class="clear-icon"
                    @click="clearField('firstName')"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_7723_275)">
                        <circle cx="8" cy="8" r="8" fill="#B6B6B6" />
                        <path
                          d="M4.53552 11.2993L11.6066 4.43321"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.6066 11.2992L4.53552 4.43311"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_7723_275">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div v-if="errors.firstName" class="error-message">
                  {{ errors.firstName }}
                </div>
              </div>

              <div class="form-group">
                <label for="lastName">نام خانوادگی</label>
                <div class="input-container">
                  <input
                    type="text"
                    id="lastName"
                    v-model="form.lastName"
                    :class="{
                      'input-error': errors.lastName,
                    }"
                    @input="clearError('lastName')"
                    placeholder="مثال: رضایی"
                  />
                  <span
                    v-if="form.lastName"
                    class="clear-icon"
                    @click="clearField('lastName')"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_7723_275)">
                        <circle cx="8" cy="8" r="8" fill="#B6B6B6" />
                        <path
                          d="M4.53552 11.2993L11.6066 4.43321"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.6066 11.2992L4.53552 4.43311"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_7723_275">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div v-if="errors.lastName" class="error-message">
                  {{ errors.lastName }}
                </div>
              </div>

              <div class="form-group">
                <label for="mobileNumber">شماره تلفن همراه</label>
                <div class="input-container">
                  <input
                    type="text"
                    id="mobileNumber"
                    v-model="form.mobileNumber"
                    :class="{
                      'input-error': errors.mobileNumber,
                    }"
                    @input="clearError('mobileNumber')"
                    placeholder="مثال: 09121231234"
                  />
                  <span
                    v-if="form.mobileNumber"
                    class="clear-icon"
                    @click="clearField('mobileNumber')"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_7723_275)">
                        <circle cx="8" cy="8" r="8" fill="#B6B6B6" />
                        <path
                          d="M4.53552 11.2993L11.6066 4.43321"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.6066 11.2992L4.53552 4.43311"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_7723_275">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div v-if="errors.mobileNumber" class="error-message">
                  {{ errors.mobileNumber }}
                </div>
              </div>
            </div>
            <div class="form">
              <div class="form-group-number">
                <label for="phoneNumber">
                  <div class="label-phone-number">
                    <div>
                      شماره تلفن ثابت <span class="notnec">(اختیاری)</span>
                    </div>
                    <p class="pish">*با پیش شماره</p>
                  </div>
                </label>
                <div class="input-container">
                  <input
                    type="text"
                    id="phoneNumber"
                    v-model="form.phoneNumber"
                    :class="{
                      'input-error': errors.phoneNumber,
                    }"
                    @input="clearError('phoneNumber')"
                    placeholder="مثال: 03121231234"
                  />
                  <span
                    v-if="form.phoneNumber"
                    class="clear-icon"
                    @click="clearField('phoneNumber')"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_7723_275)">
                        <circle cx="8" cy="8" r="8" fill="#B6B6B6" />
                        <path
                          d="M4.53552 11.2993L11.6066 4.43321"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.6066 11.2992L4.53552 4.43311"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_7723_275">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div v-if="errors.phoneNumber" class="error-message">
                  {{ errors.phoneNumber }}
                </div>
              </div>

              <div class="form-group-address">
                <label for="address">آدرس</label>
                <div class="input-container">
                  <input
                    id="address"
                    v-model="form.address"
                    :class="{
                      'input-error': errors.address,
                    }"
                    @input="clearError('address')"
                  />
                  <span
                    v-if="form.address"
                    class="clear-icon"
                    @click="clearField('address')"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_7723_275)">
                        <circle cx="8" cy="8" r="8" fill="#B6B6B6" />
                        <path
                          d="M4.53552 11.2993L11.6066 4.43321"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.6066 11.2992L4.53552 4.43311"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_7723_275">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
                <div v-if="errors.address" class="error-message">
                  {{ errors.address }}
                </div>
              </div>
            </div>
            <div class="formCheck">
              <span>جنسیت</span>
              <div class="gender-options">
                <label class="custom-radio">
                  <input type="radio" value="female" v-model="form.gender" />
                  خانم
                </label>
                <label class="custom-radio">
                  <input type="radio" value="male" v-model="form.gender" />
                  آقا
                </label>
              </div>
              <div v-if="errors.gender" class="error-message">
                {{ errors.gender }}
              </div>
            </div>
          </div>

        </div>
        <div class="btn">
          <button type="submit">ثبت و ادامه</button>
        </div>
      </form>
    </div>

    <div dir="rtl" class="step2" v-if="currentStep === 2">
      <div class="back">
        <button @click="handleBack" class="back-btn">
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 7H16.5"
              stroke="#323232"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.5 1L16.5 7L10.5 13"
              stroke="#323232"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <p>انتخاب آدرس</p>
      </div>

      <div class="Choose"><p>موقعیت مورد نظر خود را روی نقشه مشخص کنید</p></div>

      <div id="map" class="map-container"></div>

      <button @click="goToUserLocation" class="location-btn">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.9999 23.9168C19.4767 23.9168 23.9166 19.477 23.9166 14.0002C23.9166 8.52334 19.4767 4.0835 13.9999 4.0835C8.5231 4.0835 4.08325 8.52334 4.08325 14.0002C4.08325 19.477 8.5231 23.9168 13.9999 23.9168Z"
            stroke="#37474F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.0001 16.8332C15.5649 16.8332 16.8334 15.5646 16.8334 13.9998C16.8334 12.435 15.5649 11.1665 14.0001 11.1665C12.4353 11.1665 11.1667 12.435 11.1667 13.9998C11.1667 15.5646 12.4353 16.8332 14.0001 16.8332Z"
            fill="#37474F"
            stroke="#37474F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 26.7502V21.0835"
            stroke="#37474F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 1.25V6.91667"
            stroke="#37474F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.91667 14H1.25"
            stroke="#37474F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26.7499 14H21.0833"
            stroke="#37474F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div class="btn">
        <button :disabled="isSubmitting" @click="handleFinalSubmit">
          <span v-if="isSubmitting">درحال ثبت...</span>
          <span v-else>ثبت و ادامه</span>
        </button>
      </div>
    </div>
    <div v-if="currentStep === 3">
      <div class="step3">
        <svg
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.375 22.5C39.375 13.1802 31.8198 5.625 22.5 5.625C13.1802 5.625 5.625 13.1802 5.625 22.5C5.625 31.8198 13.1802 39.375 22.5 39.375C31.8198 39.375 39.375 31.8198 39.375 22.5Z"
            stroke="#323232"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M30.0005 18.7505L20.6255 28.1255L15.0005 22.5005"
            stroke="#323232"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p>اطلاعات شما با موفقیت ثبت شد</p>
        <button @click="goToAboutPage">مشاهده اطلاعات</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { z } from "zod";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useRouter } from "vue-router";

const formSchema = z.object({
  firstName: z
    .string()
    .nonempty("نام ضروری است.")
    .min(3, "نام باید دارای ۳ کاراکتر باشد"),
  lastName: z
    .string()
    .nonempty("نام خانوادگی ضروری است.")
    .min(3, "نام خانوادگی باید دارای ۳ کاراکتر باشد"),
  mobileNumber: z
    .string()
    .nonempty("شماره موبایل ضروری است.")
    .regex(/^09\d{9}$/, "شماره وارد شده صحیح نمیباشد."),
  phoneNumber: z.string().regex(/^0\d{10}$/, "شماره وارد شده صحیح نمیباشد."),
  address: z
    .string()
    .nonempty("آدرس ضروری است.")
    .min(10, "ادرس باید دارای 10 کاراکتر باشد"),
  gender: z.string().nonempty("جنسیت خود را وارد کنید"),
});

export default {
  name: "Home",
  data() {
    return {
      currentStep: 1, 
      form: {
        firstName: "",
        lastName: "",
        mobileNumber: "",
        phoneNumber: "",
        address: "",
        gender: "",
      },
      errors: {},
      location: {
        lat: null,
        lng: null,
      },
      map: null,
      marker: null,
    };
  },
  methods: {
    
    clearError(field) {
      if (this.errors[field]) {
        this.$set(this.errors, field, "");
      }
    },
   
    clearField(field) {
      this.form[field] = "";
      this.clearError(field);
    },
    handleStepOneSubmit() {
      const result = formSchema.safeParse(this.form);
      if (result.success) {
        this.errors = {};
        this.currentStep = 2;
      } else {
        const fieldErrors = {};
        result.error.errors.forEach((err) => {
          const field = err.path[0];
          fieldErrors[field] = err.message;
        });
        this.errors = fieldErrors;
      }
    },

    initMap() {
      this.map = L.map("map").setView([35.6892, 51.389], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(this.map);

      this.map.on("click", (e) => {
        this.location.lat = e.latlng.lat;
        this.location.lng = e.latlng.lng;
        if (this.marker) {
          this.map.removeLayer(this.marker);
        }
        this.marker = L.marker([this.location.lat, this.location.lng]).addTo(
          this.map
        );
      });
    },
    goToUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            this.map.setView([latitude, longitude], 15);
            if (this.marker) {
              this.map.removeLayer(this.marker);
            }
            this.marker = L.marker([latitude, longitude]).addTo(this.map);
            this.location.lat = latitude;
            this.location.lng = longitude;
          },
          (error) => {
            console.error("Geolocation error:", error);
            alert("Unable to retrieve your location.");
          }
        );
      } else {
        alert("Geolocation is not supported by your browser.");
      }
    },
    handleBack() {
      this.currentStep = 1;
      if (this.map) {
        this.map.off();
        this.map.remove();
        this.map = null;
        this.marker = null;
      }
    },
    handleFinalSubmit() {
      if (!this.location.lat || !this.location.lng) {
        alert("Please select a location on the map.");
        return;
      }
      const payload = {
        first_name: this.form.firstName,
        last_name: this.form.lastName,
        coordinate_mobile: this.form.mobileNumber,
        coordinate_phone_number: this.form.phoneNumber,
        address: this.form.address,
        region: 1, 
        lat: this.location.lat,
        lng: this.location.lng,
        gender: this.form.gender,
      };

      axios
        .post("https://stage.achareh.ir/api/karfarmas/address", payload, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4",
          },
        })
        .then((response) => {
          this.currentStep = 3;
        })
        .catch((error) => {
          console.error("Error submitting data:", error);
          alert("There was an error submitting the data.");
        });
    },
    resetForm() {
      this.form = {
        firstName: "",
        lastName: "",
        mobileNumber: "",
        phoneNumber: "",
        address: "",
        gender: "",
      };
      this.errors = {};
      this.location = { lat: null, lng: null };
      this.currentStep = 1;
      if (this.map) {
        this.map.off();
        this.map.remove();
        this.map = null;
        this.marker = null;
      }
    },
    goToAboutPage() {
      this.$router.push("/about"); 
    },
  },
  watch: {
    
    currentStep(newVal) {
      if (newVal === 2) {
        this.$nextTick(() => {
          this.initMap();
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  max-width: 808px;
  margin: auto;
  height: 78vh;
  padding-top: 50px;

  p {
    color: #37474f;
    font-weight: 400;
    line-height: 12px;
  }
  .form-page {
    padding: 12px 40px 40px 40px;
    background-color: #fff;
    border-radius: 4px;
    p {
      color: #37474f;
      font-weight: 700;
    }
    .all-form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      .form {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        .form-group {
          margin-bottom: 1.5rem;
          width: 100%;
          label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: #37474f;
            font-size: 14px;
          }

          .input-container {
            position: relative;
            input {
              width: 100%;
              padding: 12px 12px 12px 12px;
              border: 1px solid #ccc;
              border-radius: 4px;
              box-sizing: border-box;
              color: #37474f;
              font-size: 14px;
              font-weight: 700;
            }
            input::placeholder {
              color: #b6b6b6;
              font-size: 14px;
              font-size: 400 !important;
            }
            input:focus {
              outline-color: #369870;
            }
            .clear-icon {
              position: absolute;
              left: 12px;
              top: 60%;
              transform: translateY(-50%);
              cursor: pointer;
            }
          }
          .input-error {
            border-color: #e61236 !important;
          }
          .error-message {
            color: #e61236 !important;
            font-size: 10px;
            margin-top: 0.25rem;
          }
        }
        .form-group-address {
          margin-bottom: 1.5rem;
          width: 100%;
          label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: #37474f;
            font-size: 14px;
          }

          .input-container {
            position: relative;
            input {
              width: 100%;
              padding: 12px 12px 12px 12px;
              border: 1px solid #ccc;
              border-radius: 4px;
              box-sizing: border-box;
              color: #37474f;
              font-size: 14px;
              font-weight: 700;
            }
            input::placeholder {
              color: #b6b6b6;
              font-size: 14px;
              font-size: 400 !important;
            }

            input:focus {
              outline-color: #00bfa5;
            }
            .clear-icon {
              position: absolute;
              left: 12px;
              top: 60%;
              transform: translateY(-50%);
              cursor: pointer;
            }
          }
          .input-error {
            border-color: #e61236 !important;
          }
          .error-message {
            color: #e61236 !important;
            font-size: 10px;
            margin-top: 0.25rem;
          }
        }
        .form-group-number {
          margin-bottom: 1.5rem;
          width: 47%;
          .label-phone-number {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .pish {
              font-size: 10px;
              color: #757575;
              font-size: 10px;
              margin: 0;
            }
            .notnec {
              font-size: 10px;
              font-weight: 500;
              color: #37474f;
            }
          }

          label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: #37474f;
            font-size: 14px;
          }

          .input-container {
            position: relative;
            input {
              width: 100%;
              padding: 12px 12px 12px 12px;
              border: 1px solid #ccc;
              border-radius: 4px;
              box-sizing: border-box;
              color: #37474f;
              font-size: 14px;
              font-weight: 700;
            }
            input::placeholder {
              color: #b6b6b6;
              font-size: 14px;
              font-size: 400 !important;
            }
            input:focus {
              outline-color: #369870;
            }
            .clear-icon {
              position: absolute;
              left: 12px;
              top: 60%;
              transform: translateY(-50%);
              cursor: pointer;
            }
          }
          .input-error {
            border-color: #e61236 !important;
          }
          .error-message {
            color: #e61236 !important;
            font-size: 10px;
            margin-top: 0.25rem;
          }
        }
        .gender-options {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;

          label {
            font-weight: 500;
            color: #37474f;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 6px;
          }
        }
        .error-message {
          color: #e61236 !important;
          font-size: 10px;
          margin-top: 0.25rem;
        }
      }
      .formCheck {
        display: flex;
        align-items: center;
        gap: 90px;
        span {
          font-weight: 500;
          color: #37474f;
          font-size: 14px;
        }
        .gender-options {
          display: flex;
          gap: 1rem;

          label {
            font-weight: 500;
            color: #37474f;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 6px;
          }
        }
        .error-message {
          color: #e61236 !important;
          font-size: 10px;
          margin-top: 0.25rem;
        }
      }
    }
  }

  .map-container {
    height: 369px;
    margin-bottom: 1rem;
    width: 808px;
  }

  .location-btn {
    width: 58px;
    height: 58px;

    background-color: #fff;
    color: #fff;
    border: none;
    border-radius: 100%;
    cursor: pointer;
    position: absolute;
    right: 16px;
    bottom: -16px;
    z-index: 9999;
    transition: background-color 0.3s;

    svg {
      padding: 4px;
      margin-top: 8px;
      margin-left: 1px;
    }
  }
  .back {
    display: flex;
    align-items: center;
    gap: 4px;
    .back-btn {
      margin-top: 4px;

      border: none;
      cursor: pointer;
    }
  }

  .btn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    box-shadow: #333;
    background-color: #fff;
    padding: 24px;
    button {
      width: 224px;
      display: flex;
      justify-content: center;
      margin: auto;
      padding: 0.75rem;
      background-color: #00bfa5;
      color: #fff;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
      &:hover {
        background-color: #369870;
      }
    }
  }
  .step2 {
    max-width: 808px;
    margin: auto;
    height: 369px;
    border-radius: 4px;
    position: relative;
    .Choose {
      position: absolute;
      z-index: 9999;
      background-color: #fff;
      width: 768px;

      border-radius: 4px;
      padding: 4px 20px;
      p {
        font-size: 12px;
        color: #37474f;
        font-weight: 700;
      }
    }

    .btn {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      box-shadow: #333;
      background-color: #fff;
      padding: 24px;
      button {
        width: 224px;
        display: flex;
        justify-content: center;
        margin: auto;
        padding: 0.75rem;
        background-color: #00bfa5;
        color: #fff;
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s;
        &:hover {
          background-color: #369870;
        }
      }
    }
  }
  .step3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 gap: 8px;
 padding-top: 80px;
p{
  font-size: 14px;
  color: #37474F;
  font-weight: 700;
}
    button{
      border: 1px solid #00BFA5;
      color: #00BFA5;
      font-weight: 700;
      min-width: 341px;
      padding: 8px;
      border-radius: 4px;
      cursor: pointer;
      
    }
    button:hover{
        background-color: #5caa9f;
        color: #fff;
        transition: background-color 0.3s;
      }
  }
}
</style>
