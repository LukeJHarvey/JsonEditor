<script setup>
    import { ref } from 'vue';
    import SchemaField from "./SchemaField.vue";
    const Schema = ref([{ 
        type:"object", name:"RootObject", uid: 0, subfields: 
        [
            {type:"field", name:"ExampleField", uid: 1, subfields:[]},
            {type:"field", name:"ExampleField2", uid: 2, subfields:[]},
            {type:"object", name:"SubObject", uid: 3, subfields:[
                {type:"field", name:"SubExampleField", uid: 4, subfields:[]},
                {type:"field", name:"SubExampleField2", uid: 6, subfields:[]},
            ]},
            {type:"field", name:"ExampleField3", uid: 7, subfields:[]},
        ]
    }])
</script>
<template>
    <div class="container-fluid mx-1">
        <div v-for="field in Schema">
            <SchemaField :type="field.type" :name="field.name" :uid="field.uid" :subfields="field.subfields"/>
        </div>
    </div>
</template>