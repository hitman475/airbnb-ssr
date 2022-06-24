
import { ref, reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'


interface IRuleForm {
    mobile: string
    password: string
}

export default function useFormProperties(t:any) {

    const activePane = ref('login')
    // 登录按钮文本
    const loginText = ref(t('login.loginBtn'))

    // 表单提交与表单校验
    const ruleFormRef = ref()
    
    // 表单内容
    const ruleForm : IRuleForm= reactive({
        mobile: '',
        password: ''
    })
    // 校验规则
    const rules = reactive({
        mobile: {
            required: true,
            max: 11,
            min: 11,
            message: t('login.placeMobile'),
            trigger: 'blur'
        },
        password: {
            required: true,
            message: t('login.placePass'),
            trigger: 'blur'
        }
    })

    return {
        activePane,
        ruleFormRef,
        loginText,
        ruleForm,
        rules,
    }
}


