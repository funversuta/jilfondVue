<template>
  <div class="card" @click="onResultClick">
    <div class="card__image">
      <img v-if="imgUrl.length" :src="imgUrl" :alt="name + '-image'" />
      <img v-else src="/images/no-image.png" alt="no-image" />
    </div>
    <div class="card__info">
      <h3 class="card__info-title">{{ name }}</h3>
      <span class="card__info-email" :title="email">{{ email }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex"
import type { State } from "@/store"

interface ResultscardProps {
  imgUrl?: string
  name: string
  email: string
  id: number
}

const store = useStore<State>()

const props = defineProps<ResultscardProps>()
const { email, imgUrl = "", name, id } = props

const onResultClick = () => {
  store.dispatch("fetchUserForEmployee", id)
}
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  display: grid;
  width: 100%;
  grid-template-columns: 70px 170px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  transition: background 0.2s ease-in-out;
  &:hover {
    background: #e0e0e0;
  }
  &__image {
    background: #fff;
    width: 100%;
    height: 100%;
    border-right: 1px solid #e0e0e0;
    img {
      object-fit: cover;
    }
  }
  &__info {
    padding: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;

    &-title {
      color: #333;
      font-size: 14px;
      font-weight: 600;
    }
    &-email {
      display: block;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #76787d;
      font-size: 14px;
      font-weight: 400;
      text-transform: capitalize;
    }
  }
}
</style>
