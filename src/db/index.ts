import DB from '../utils/indexedDB' // 引入indexedDB工具类
import userObjectStore from "./objectStores/user";
import languageObjectStore from "./objectStores/language";

const airbnbDB = new DB('airbnb')

export default {
    airbnbDB,
    userObjectStore,
    languageObjectStore,
}