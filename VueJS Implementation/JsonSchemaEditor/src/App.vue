<script setup>
import { ref } from "vue";
import AppInformation from "./components/AppInformation.vue";
import NavBar from "./components/NavBar.vue";
import CreateSchema from "./components/CreateSchema.vue";
import UseSchema from "./components/UseSchema.vue";

const greeting = ref("Hello World");
</script>

<template>
		<NavBar />
		<div class="container-fluid gx-5">
			<CreateSchema />
		</div>
		
</template>

<style></style>
