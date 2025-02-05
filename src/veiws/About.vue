<template>
  <div dir="rtl" class="about">
    <div v-if="isLoading" class="dot-loader">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>

    <div v-if="!isLoading && addressData.length > 0">
     
      <div> <h2>آدرس ها و مشخصات</h2><div class="item-container">
        <div class="item" v-for="(item, index) in addressData" :key="index">
          <div class="first-col">
            <div class="div">
              <p class="label">نام</p>
              <p>{{ item.first_name || "نامعلوم" }}</p>
            </div>
            <div class="div">
              <p class="label">نام خانوادگی</p>
              <p>{{ item.last_name || "نامعلوم" }}</p>
            </div>
            <div class="div">
              <p class="label">شماره تلفن همراه</p>
              <p>
                {{ item.coordinate_mobile || "نامعلوم" }}
              </p>
            </div>
          </div>
          <div class="first-col">
            <div class="div">
              <p class="label">شماره تلفن ثابت</p>
              <p>{{ item.coordinate_phone_number || "نامعلوم" }}</p>
            </div>
            <div class="div">
              <p class="label">جنسیت:</p>
              <p>{{ item.gender || "نامعلوم" }}</p>
            </div>
            <div class="div">
              <p class="label">آدرس:</p>
              <p>{{ item.address || "نامعلوم" }}</p>
            </div>
          </div>
        </div>
      </div></div>
      
    </div>

    <div v-else-if="!isLoading && addressData.length === 0">
      <p>داده ای وجود ندارد</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "About",
  data() {
    return {
      addressData: [], 
      isLoading: true, 
    };
  },
  mounted() {
    this.fetchAddressData();
  },
  methods: {
    fetchAddressData() {
      axios
        .get("https://stage.achareh.ir/api/karfarmas/address", {
          headers: {
            Authorization: "Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4", 
          },
        })
        .then((response) => {
          this.addressData = response.data; 
          this.isLoading = false; 
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          alert("There was an error fetching the data.");
          this.isLoading = false; 
        });
    },
  },
};
</script>

<style scoped lang="scss">
.about {
  max-width: 806px;
  height: 100%;
  margin: 2rem auto;
  padding: 1rem;
  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 16px;
    color: #37474f;
    width: 100%;
  }

  p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  strong {
    font-weight: bold;
  }

  .dot-loader {
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: spin 1.5s linear infinite; 
  }

 
  .dot {
    width: 16px;
    height: 16px;
    background-color: #3498db;
    border-radius: 50%;
    animation: growShrink 1.5s infinite ease-in-out;
  }

 
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes growShrink {
    0%,
    100% {
      transform: scale(0.5);
    }
    50% {
      transform: scale(1.5);
    }
  }
  .item-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 100%;
    .item {
      background-color: #fff;
      padding: 28px 64px;
      width: 100%;
      border-radius: 4px;
      border: 1px solid #edf0f2;
      box-shadow: #00000014;
      display: flex;
      flex-direction: column;
      gap: 32px;
      .first-col {
        display: flex;
        gap: 32px;
        justify-content: space-around;
        align-items: flex-start;
        .div {
          width: 100%;
          .label {
            color: gray;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
