export default {

    title     : '房型',
    availability    : '房況',

	create : {
		parent : '建立母房型',
		child : '建立子房型',
	},
	
	photo : {
		setting: '房型照片'
		
	},

    field: {
        name : {
            title : '這間房型的名稱以及房型說明。',
            label : '名字',
            placeholder : '名稱',
        },

        availability : {
            label : '房間的總量',
            placeholder: '房間數'
        },

        base : {
            title : '此房型的相關設定。',

            label : '基礎人數',
            placeholder: '房間基本的訂價'
        },

        max : {
            label : '最大人數',
            placeholder: '房間最多可以入住'
        },

        room_size : {
            label : '房間的大小',
            placeholder: '平方米'
        },

        unsellable : {
            label : '是否有開放販售',

        },
    },



}