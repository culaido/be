<template>
    <div class="container">
        <div class="row">
            <div class="col-8">
                <ul class="list-unstyled">
                    <li class="box" v-for="(v, k) in data.roomType.filter(item => !item.unsellable)" :key="k">
                        <div class="mb-2" style="font-size:24px; font-weight:bold">{{ v.name }}</div>

                        <div class="row">
                            <div class="col-6">
                                <div>
                                    <img class="cover" :src="v.cover" style="max-width:100%" />
                                </div>
                            </div>
                            <div class="col-6">
                                <div>最大入住人數: {{ v.max }}</div>
                                <div style="font-size:14px; overflow:auto; max-height:200px; padding:5px"><CMarkdown>{{ v['description_zh-TW'] }}</CMarkdown></div>
                                <div class="mt-3 text-end">
                                    <div>1000$</div>
                                    <button class="btn btn-primary">立即預定</button>
                                </div>
                            </div>
                        </div>
                    </li>                
                
                </ul>

            </div>
            <div class="col-4">
                <div class="bg-white p-4">
                    asd
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">

	import api from '~/api/api.js';

	definePageMeta({
		layout: 'main'
	})
    
    
    const data = reactive({
    
        roomType : {}
    
    });
    
    let ret = await api.roomType.index();
    
    data.roomType = ret.data.roomType;
    
    
</script>


<style scoped>
    .box {
        background:#fff; box-shadow:0 0 8px #ccc; padding:20px; border-radius:10px; border-left:10px solid #00f;
        
        .cover {padding:1px; border:1px solid #ccc}
    }
    .box + .box {margin-top:30px;}
</style>