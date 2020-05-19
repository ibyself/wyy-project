import { extend, localize } from "vee-validate"
import { required, email} from "vee-validate/dist/rules"
import zh_CN from "vee-validate/dist/locale/zh_CN.json"
localize("zh_CN", zh_CN)
extend('required',required)
extend('email',{
    ...email,
    message:'这不是一个正确的邮箱'
})