<template>
    <div>asd</div>
</template>


<script setup lang="ts">

	import api from '~/api/api.js';

	definePageMeta({
		layout: 'main'
	})
    
    
    
    
    let ret = await api.roomType.index();
    
    
    
    
</script>