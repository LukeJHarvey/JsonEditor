<script setup>
import FieldViewer from "./CreateSchemaComponents/FieldViewer.vue";
import SchemaViewer from "./CreateSchemaComponents/SchemaViewer.vue";
</script>

<template>
	<div class="container-fluid">
		<div class="row justify-content-center">
			<div class="col-lg-8" style="border-style:solid;">
				<SchemaViewer />
			</div>
			<div class="col-md-4" style="border-style:solid;">
				<FieldViewer />
			</div>
		</div>
	</div>
</template>
