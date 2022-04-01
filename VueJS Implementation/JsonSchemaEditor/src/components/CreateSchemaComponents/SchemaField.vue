<script setup>
    import { ref } from 'vue';
    import draggable from 'vuedraggable';
    const props = defineProps({
        type: String,
        name: String,
        uid: Number,
        subfields: Object
    });
    const clsp = ref(true);


    /*const subfieldList = ref(
        props.subfields.map((name, index) => {
            return { name, order: index + 1};
        })
    );
    const drag = ref(false);
    function sort() {
        this.subfieldList = this.subfieldList.sort((a, b) => a.order - b.order);
    }
    const dragOptions = ref({
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
    })
    */


/*
    <draggable
        class="drag-this"
        tag="transition-group"
        :component-data="{
        tag: 'ul',
        type: 'transition-group',
        name: !drag ? 'flip-list' : null
        }"
        v-model="subfieldList"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
        item-key="id"
        handle=".handle">
        <template #item="{element}">

            </template>
    </draggable>
*/
</script>
<template>
    <div class="row">
        <div class="card card-body bg-secondary p-0 border-dark border-1">
            <div class="row">
                <div v-if="props.type=='object'" class="col col-auto field">
                    <div class="card card-body bg-secondary border-dark">
                        <a data-bs-toggle="collapse" :href="'#clsp_'+props.uid" role="button" @click="clsp = !clsp">
                            <i v-if="clsp" class="bi bi-caret-right-fill"></i>
                            <i v-if="!clsp" class="bi bi-caret-down-fill"></i>
                        </a>
                    </div>
                </div>
                <div class="col col-auto" :class="{ field: props.type=='field', object: props.type=='object'}">
                    <div class="card card-body bg-primary" style="padding: .3rem 1rem">
                        <h2>{{name}}</h2>
                    </div>
                </div>
                <div class="col col-auto px-0">
                    <div class="card card-body bg-secondary border-dark">
                        <i class="bi bi-gear-fill"></i>
                    </div>
                </div>
                <div class="col col-auto px-0">
                    <div class="card card-body bg-secondary border-dark">
                        <i class="bi bi-trash-fill"></i>
                    </div>
                </div>
                <div class="col col-auto ms-auto">
                    <div class="card card-body bg-secondary border-dark">
                        <i class="bi bi-arrow-down-up" ></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="props.type=='object'" class="row collapse" :id="'clsp_'+props.uid">
        <div class="card card-body border-dark border-1" style="background-color:#cccccc">
            <div v-for="field in props.subfields" class="ms-2 row">
                <SchemaField :type="field.type" :name="field.name" :subfields="field.subfields" />
            </div>
        </div>
    </div>
</template>

<style>
    a i {
        color: black !important;
    }
    .field {
        padding-right: 0;
    }
    .object {
        padding-right: 0;
        padding-left: 0;
    }
    
</style>


