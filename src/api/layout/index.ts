import DB from '@/utils/indexedDB'
import { ElLoading } from 'element-plus'

export interface IResultOr { // 定义interface规范返回结果的类型
    code: string,
    success: boolean,
    message: string,
    result: any
  }

const airbnbDB = new DB('aribnb');

// mock接口 保存当前语言包
export async function saveLanguageApi(lang: any) {

    // 使用Eloading组件模拟加载特效
    const loading = ElLoading.service({
        lock: true,
        background: 'rgba(0, 0, 0, 0.7)',
    })
      

    // 打开数据库
    await airbnbDB.openStore('language', 'id', ['name'])
    // 先检查 id=1 的用户是否在数据库中
    const resultOr : IResultOr = await airbnbDB.getItem('language', 1).then(res=> {
        return {
            code : '000000',
            success: true,
            message: '操作成功',
            result: res || null
        }
    })
    // 如果数据在，则更新，如果不在则插入
    const { success } =  resultOr;
    let obj = {}
    if (success) {
        // 数据存在，直接更新
        obj = {name: lang, id: 1}
    }else {
        // 数据不存在，选择插入
        obj = {name:lang}
    }

    const result : IResultOr = await airbnbDB.updateItem('language', obj).then(res => {
        return {
            code: '000000',
            message: '操作成功',
            result: null,
            success: true
        }
    }) 


     // 定时关闭
    setTimeout(() => {
        loading.close()
      }, 200)

    return result
}

// mock接口， 获取语言包
export async function fetchLanguageApi() {
    // 使用Eloading组件模拟加载特效
    const loading = ElLoading.service({
        lock: true,
        background: 'rgba(0, 0, 0, 0.7)',
    })

    // 打开仓库
    await airbnbDB.openStore('language', 'id', ['name'])
    const result : IResultOr = await airbnbDB.getItem('language', 1).then(res => {
        return {
            code: '000000',
            message: '操作系统',
            success: true,
            result: res || null
        }
    })


     // 定时关闭
     setTimeout(() => {
        loading.close()
      }, 200)

    return result
}