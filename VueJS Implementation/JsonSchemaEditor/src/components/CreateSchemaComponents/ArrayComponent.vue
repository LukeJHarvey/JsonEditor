<script setup>
import { ref } from 'vue';
const props = defineProps({
    type: String,
    arrayName: String
});
const elements = ref([]);
const inp = ref("");
function addElement(input) {
    if(!elements.value.includes(input)) {
        if(props.type == "int" && (input%1)) 
            return;
        elements.value.push(input);
    }
}
function removeElement(element) {
    var index = elements.value.indexOf(element);
    if(index > -1) {
        elements.value.splice(index, 1);
    }
}
</script>
<template>
    <div class="row">Add {{type}}s to {{arrayName}}</div>
    <form class="row">
        <input v-if="type=='string'" v-model="inp" class="col col-8">
        <input v-if="type=='int'" type="number" step="1" v-model="inp" class="col col-8">
        <input v-if="type=='real'" type="number" step="any" v-model="inp" class="col col-8">
        <button v-on:click="addElement(inp)" class="btn btn-primary btn-sm col">Add</button>
    </form>
    <div class="row align-items-start row-cols-auto overflow-scroll border" style="height:80px;">
        <div class="col border" v-for="element in elements">
            <div class="">{{element}}<a v-on:click="removeElement(element)" class=""><i class="bi bi-trash"></i></a></div>
            
        </div>
    </div>
</template>