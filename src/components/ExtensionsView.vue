<script setup lang="ts">
import GameView from "./GameView.vue";
import { ootextras } from "../speedruncom/model";

const gameId = ootextras;

</script>

<template>
  <GameView :game-id="gameId" />
</template>
