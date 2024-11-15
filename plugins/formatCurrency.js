// plugins/formatCurrency.js

export default defineNuxtPlugin(nuxtApp => {
  // 提供全域的 formatCurrency 方法
  nuxtApp.provide('formatCurrency', (amount, currency) => {
    // 如果金額是 null 或 undefined，直接返回 null
    if (amount == null || amount == '') {
        return null;
    }

    // 檢查金額是否包含小數位
    const hasDecimal = amount % 1 !== 0; // 如果有小數部分，則設置為 true

    // 設置格式化選項
    const options = {
      style: 'currency',
      currency: currency,
      currencyDisplay: 'code', // 使用貨幣代碼避免顯示符號
      minimumFractionDigits: hasDecimal ? 2 : (currency === 'TWD' || currency === 'JPY' ? 0 : 2), // 有小數位時顯示小數，否則根據貨幣決定
      maximumFractionDigits: hasDecimal ? 2 : (currency === 'TWD' || currency === 'JPY' ? 0 : 2), // 同上
    };

    const formattedAmount = new Intl.NumberFormat('en-US', options).format(amount);

    // 移除貨幣符號，僅保留數字部分
    return formattedAmount.replace(/[^0-9.,]/g, ''); // 移除所有非數字和千分位符號
  });
});
