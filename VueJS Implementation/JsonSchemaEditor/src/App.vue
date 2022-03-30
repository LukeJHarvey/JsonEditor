<script setup>
import { ref } from "vue";
import AppInformation from "./components/AppInformation.vue";
import CreateSchema from "./components/CreateSchema.vue";
import UseSchema from "./components/UseSchema.vue";

const greeting = ref("Hello World");
</script>

<template>
	<CreateSchema />
</template>

<style></style>
