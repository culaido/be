import user     from './zh-TW/user.js';
import property from './zh-TW/property.js';
import tenant   from './zh-TW/tenant.js';
import roomType from './zh-TW/roomType.js';
import ratePlan from './zh-TW/ratePlan.js';
import calendar from './zh-TW/calendar.js';

let lang = {
    m: {
        app     : 'APP',
        id      : 'ID',
        loading	: '讀取中，請稍後...',
        show    : '顯示',

        edit    : '編輯',
        
        signin  : '登入',
        signup  : '註冊',
        signout : '登出',

        tool    : '工具',
        noData  : '無資料',

        status  : '狀態',
        ok      : '確定',
        save    : '儲存',
        reset   : '重設',
        waiting : '請稍後',
        clear   : '清除',
        cancel  : '取消',
        close   : '關閉',
        preview : '預覽',
        search  : '搜尋',
        create  : '新增',
        submit  : '送出',
        info    : '資訊',
        
        name    : '名稱',
        creator     : '建立者',
        created_at  : '建立於',
        updated_at  : '更新於',
        
        format: {
            day : "{day} 天",
            
        },
        

        input: {
            required : '缺少必要資訊'
        }
        
     
        
    },
    
    locale: {
        'zh-TW' : '繁中',
        'ja-JP' : '日文',
        'en-US' : '英語',
    },

    user        : {...user},
    property    : {...property},
    tenant      : {...tenant},
    roomType    : {...roomType},
    ratePlan    : {...ratePlan},
    calendar    : {...calendar},
}


export default lang;