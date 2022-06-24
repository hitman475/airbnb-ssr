<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import { useI18n } from 'vue-i18n';
import useFormProperties from './useFormProperties';
import useFormOperations from './useFormOperations'

const { t } = useI18n()
const { proxy } : any = getCurrentInstance()

const { ruleForm, activePane, ruleFormRef, loginText, rules } = useFormProperties(t)
const { userSign, userLogin } = useFormOperations(proxy)

function submitForm() {
    ruleFormRef.value.validate((valid:any) => {
        if (valid) {
            if (activePane.value === 'sign') {
                userSign(ruleForm)
            } else if (activePane.value === 'login') {
                userLogin(ruleForm)
            }
        }else {
            return false
        }
    })
}

// 判断登录还是注册
function handClick(e:any) {
    const {label, name} = e.props
    loginText.value = t(`login.${name}Btn`)
}
</script>

<template>
    <div class="login-page">
        <!-- 左半边：放图片 -->
        <div class="left-part"></div>
        <!-- 右半边：放收集登录信息的表单 -->
        <div class="right-part">
            <div class="login-panel">
                 <!-- tabs 用来切换登录和注册 -->
                <el-tabs v-model="activePane" @tab-click="handClick">
                    <el-tab-pane :label="t('login.loginTab')"  name="login"></el-tab-pane>
                    <el-tab-pane :label="t('login.signTab')" name="sign"></el-tab-pane>
                </el-tabs>
                <!-- 表单部分 -->
                <el-form
                    ref="ruleFormRef"
                    :model="ruleForm"
                    :rules="rules"
                >
                    <el-form-item prop="mobile">
                    <el-input v-model="ruleForm.mobile" :placeholder="t('login.placeMobile')" />
                    </el-form-item>
                    <el-form-item prop="password">
                    <el-input v-model="ruleForm.password" :placeholder="t('login.placePass')" />
                    </el-form-item>
                    <el-form-item>
                        <el-button class="login-btn" type="primary" @click="submitForm">{{loginText}}</el-button>
                    </el-form-item>
                </el-form>    

            </div>
        </div>
    </div>


</template>

<style lang="scss">
@import "@/assets/scss/login/index.scss"
</style>