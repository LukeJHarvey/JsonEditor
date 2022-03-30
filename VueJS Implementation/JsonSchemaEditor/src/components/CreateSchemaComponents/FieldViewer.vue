<script setup>
import { ref } from 'vue';
import ArrayComponent from "./ArrayComponent.vue";

const fieldTypeOptions = [
    {"value": "object", "name": "Object"},
    {"value": "int", "name": "Integer"},
    {"value": "string", "name": "String"},
    {"value": "real", "name": "Real"},
    {"value": "boolean", "name": "Boolean"},
    {"value": "enum", "name": "Enum"},
]
const fieldType = ref("");
const isArray = ref(0);
const allowEmpty = ref(0);
const isEnum = ref(0);
const fieldName = ref("");

function resetValues() {
    isArray.value = 0;
    allowEmpty.value = 0;
    isEnum.value = 0;
}
</script>

<template>
    <div class="container-fluid" style="padding-top: 5px; padding-bottom: 10px;">
        <div class="row justify-content-center">
            <div class="col-5" align="center">
                <h3>Field Info</h3>
            </div>
        </div>
        <form>
            <div class="row">
                <label class="col col-form-label" for="inputName" >Name: </label>
                <input class="col col-10" id="inputName" type="text" v-model="fieldName">
            </div>
            <select v-model="fieldType" @change="resetValues()" class="row form-select" aria-label="Type of Field">
                <option disabled value="">Select a Field Type</option>
                <option v-for="option in fieldTypeOptions" :value="option.value">{{ option.name }}</option>
            </select>
            <div v-if="['object','int','real','string'].includes(fieldType)" class="form-check">
                <label class="form-check-label" for="flexCheckDefault">
                    Array
                </label>
                <input v-model="isArray" class="form-check-input" type="checkbox" value="1" id="flexCheckDefault">
            </div>
            <div v-if="['int','real','string'].includes(fieldType)" class="form-check">
                <label class="form-check-label" for="flexCheckDefault">
                    Allow Empty
                </label>
                <input v-model="allowEmpty" class="form-check-input" type="checkbox" value="1" id="flexCheckDefault">
            </div>
            <div v-if="['int','real','string'].includes(fieldType)" class="form-check">
                <label class="form-check-label" for="flexCheckDefault">
                    isEnum
                </label>
                <input v-model="isEnum" class="form-check-input" type="checkbox" value="1" id="flexCheckDefault">
            </div>
            <div v-if="isEnum && ['int','real','string'].includes(fieldType)">
                <ArrayComponent arrayName="Enum Values" :type="fieldType"  />
            </div>
            <div class="row">
                <button class="col btn btn-sm btn-primary">Add Field</button>
            </div>
        </form>

    </div>
</template>