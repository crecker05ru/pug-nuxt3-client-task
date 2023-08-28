<template lang="pug">
footer(class="footer")
  div(class="footer__inner app__wrapper")
    div(class="footer__row")
      div(class="footer__info")
        NuxtLink(to='/')
          img(class="footer__logo" alt="Test Blog" src="../assets/images/logo.svg")
        p(class="footer__text") Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности
      div(class="footer__contacts")
        div(class="footer__email")
          div(class="footer__email-label") email
          a(class="footer__email-address" href="mailto:testblogsupport@gmail.com") testblogsupport@gmail.com
        ul(class="footer__socials")
          li(class="footer__socials-item")
            a(class="footer__socials-link")
              img(class="footer__socials-image" src="../assets/images/facebook.svg" alt="facebook")
          li(class="footer__socials-item")
            a(class="footer__socials-link")
              img(class="footer__socials-image" src="../assets/images/vk.svg" alt="vk")
          li(class="footer__socials-item")
            a(class="footer__socials-link")
              img(class="footer__socials-image" src="../assets/images/instagram.svg" alt="instagram")
          li(class="footer__socials-item")
            a(class="footer__socials-link")
              img(class="footer__socials-image" src="../assets/images/telegram.svg" alt="telegram")
  div(class="footer__subscribe")
      div(class="footer__subscribe-left")
        p(class="footer__subscribe-title") Подпишись на рассылку
      div(class="footer__subscribe-right")
        input(class="footer__subscribe-input" placeholder="Email" type="email")
        button(class="footer__subscribe-button") Подписаться
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.footer {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    border-top: 1px solid #8d959c;
    width: 100%;
  }
  &__inner {
    padding-top: 50px;
  }
  &__row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      row-gap: 30px;
      align-items: center;
    }
  }
  &__logo {
    display: block;
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
      margin-left: auto;
      margin-right: auto;
    }
  }
  &__text {
    max-width: 426px;
    color: #8d959c;
    font-size: 14px;
    line-height: 20px;
    @media screen and (max-width: 768px) {
      max-width: 100%;
      text-align: center;
    }
  }
  &__socials {
    display: flex;
    column-gap: 20px;
    @media screen and (max-width: 768px) {
      justify-content: center;
    }
  }
  &__email {
    margin-bottom: 20px;
    &-label {
      font-size: 14px;
      line-height: 24px;
      color: #8d959c;
      @media screen and (max-width: 768px) {
        text-align: center;
      }
    }
    &-address {
      font-size: 18px;
      line-height: 22px;
      color: #1b1b1b;
    }
  }
  &__subscribe {
    display: flex;
    align-items: center;
    max-width: 1340px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 30px;
    padding-right: 30px;
    min-height: 100px;
    background-color: #1b1b1b;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
    &-title {
      color: #fff;
      font-weight: 800;
      font-size: 22px;
      line-height: 30px;
    }
    &-input {
      margin-right: 37px;
      width: 100%;
      max-width: 353px;
      font-size: 18px;
      line-height: 26px;
      color: #fff;
      background-color: transparent;
      border: none;
      outline: none;
      border-bottom: 1px solid #8d959c;
      transition: border-bottom linear 0.25s;
      &:focus {
        border-bottom: 1px solid #3657d3;
      }
      &::placeholder {
        color: #8d959c;
      }
    }
    &-left {
      flex: 1 1 auto;
      @media screen and (max-width: 768px) {
        margin-top: 24px;
        margin-bottom: 48px;
      }
    }
    &-right {
      display: flex;
      flex: 1 1 auto;
      justify-content: flex-end;
      @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        row-gap: 48px;
      }
    }
  }
}
</style>
