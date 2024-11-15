export default {

    title	: '房價方案',
    hint	: '新增與查看房價方案。',
    create	: '加入新的房價方案',
	
    name	: '房價方案名稱',
    
    restriction: '限制',
    min_stay: '最短入住',
    max_stay: '最長入住',
    min_advance: '提前預訂',
    

    field: {
        name : {
			title : '此房價方案的名稱是？',
			hint  : '這只會出現在系統內，其他才會顯示在前台',
            label : '名字',
            placeholder : '名稱',
        },
		
        restriction : {
			title		: '此專案有沒有訂房限制？',
			
			min_stay	: '最短能入住幾天',
			max_stay	: '最長能入住幾天',
			min_advance	: '需提前幾天預訂',
        },
		
		
		roomType : {
			title : '此房價方案將套用至那些房型？',
			
			
		}
    },



    header : {

    },



}