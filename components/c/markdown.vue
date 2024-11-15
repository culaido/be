<template>
  <div v-html="renderedMarkdown" class="markdown-body"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import MarkdownIt from 'markdown-it';
import { useSlots } from 'vue';

// 初始化 markdown-it
const md = new MarkdownIt();

// 使用 useSlots 獲取 slots
const slots = useSlots();

// 使用 computed 計算屬性將 Markdown slot 的內容轉換為 HTML
const renderedMarkdown = computed(() => {
  // 確保 slots.default 存在並轉為文字內容
  const slotContent = slots.default ? slots.default().map(vnode => vnode.children).join('') : '';
  return md.render(slotContent);
});
</script>

<style scoped>
.markdown-body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

/* Markdown 樣式 */
.markdown-body h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

.markdown-body h2 {
  font-size: 1.5em;
  margin: 0.75em 0;
}

.markdown-body p {
  margin: 1em 0;
}

.markdown-body a {
  color: #007acc;
  text-decoration: none;
}

.markdown-body a:hover {
  text-decoration: underline;
}

.markdown-body ul {
  list-style: disc inside;
  padding-left: 1em;
}
</style>
