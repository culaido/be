export default {
    title : {
        show : '個人資料',
        edit : '編輯個人資料',

        security : '帳戶安全',
            password : '變更密碼',

        passwordConfirm : '密碼驗證',

        mobile : '手機綁定',
    },

    name : '名稱',
    password  : '密碼',

    password : {
        label : 'Password',
        placeholder : 'Email',
    },
    
    email : {
        label : 'Email',
        placeholder : 'Email',
    },

    gender : {
        label : 'Gender',
        placeholder : '性別',
        
        val : {
            male: 'Male',
            female: 'Female',
            unknown: 'Rather Not Say',           
        }
    },

    passwordForget : 'Forget password?',
    oldPassword : 'Original Password',
    newPassword : 'New Password',
    newPassword1Placeholder : 'Password must be at least 8 characters.',
    newPassword2Placeholder : 'Password Confirm',

    passwordNotMatch: 'Password doesn\'t Match',
    passwordChanged: '密碼已變更，下次登入請使用新密碼',
    oldPasswordNotMatch: 'Please make sure your password match',

    passwordForgetError: 'The password reset e-mail has been sent successfully ({email}). If you can not find the mail, please wait for a second.',
    passwordForgetHint : 'The password reset e-mail has been sent successfully ({email}). If you can not find the mail, please check \"spam\" or search for \"OwlTing\".',

    countryCode : 'Country Code',

    mobile : 'Mobile Number',
    mobileNull : 'No binded mobile',
    mobileValidate : 'Validated',
    mobileValidateSuccess : 'Validation Success',
    mobileValidateSuccessHint : 'Mobile Validation Success',
    mobileValidateFail : 'Validation Fail',
    mobileValidateFailHint : 'Try Again',
    mobileBindHint : 'You have to enter the password before binding.',


    verificationCode : 'Verification Code',
    verificationCodeGet : 'Get Validation Code',

    verificationCountDown: 'Get Validation Code ({time})',

    providerConnect : 'Connect with {item}',
    providerHint : 'We will not collect the profile info without your permission.',
    providerUnbind : 'Unlink',
    providerUnbindHint : 'Social Media Unlink Successfully',
    providerBindFailTitle : '操作失敗',
    providerBindHint : 'Connect Successfully',
    providerCFUnbindHint : '確定是否要解除綁定?',

    twoFactor: 'Two Factor Validation',
    twoFactorWarning: 'Warning',
    twoFactorWarningHint: '關閉將降低您帳戶的安全，確定關閉兩階段驗證？',
    twoFactorStatus: '兩階段驗證狀態',
    twoFactorStatusNote: '開啟兩階段驗證以保護您帳號的安全',

    twoFactorStatusHint: {
        enable : 'Enable',
        disable : 'Disable',
    },
    twoFactorBindHint : '設定兩階段驗證功能前需先驗證用戶密碼',

    twoFactorChange : 'Change Validation Method',
    twoFactorHint: {
        EMAIL : {
            title: 'E-mail',
            hint: 'E-mail'
        },

        GOOGLE : {
            title: 'Google Authenticator',
            hint: 'Google Authenticator'
        }
    },
    
    address : {
        address : 'My Wallet Address',
        note    : 'Remark'
    },
    
    premium : {

        title : 'Premium Diamond Membership - {type}',
        info : "<div style='font-size:1.3rem; color:#25819e; font-weight:bold'>Upgrade to Premium Diamond Membership</div>\
        <div style='margin-top:12px; font-size:1.3rem'>Travel Bookings, Safe Ingredients at 10% Off, Plus Unlimited Free Shipping</div>\
        <div style='margin-top:12px; font-size:0.9rem; color:#666'>Cancel Anytime, No Worries! $249 per Month, Even Better with Annual Payment!</div>",

        period : 'Promotional Period',
        redirect : 'Click Here to Get More Premium Information',

        type : {
            OPY : 'Annual Payment',
            OPM : 'Monthly Payment',
            OPV : 'Expired',

            OPFY : 'Free',
            OPFM : 'Free',
        }


    }
}