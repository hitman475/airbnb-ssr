// 真实线上接口
// https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/api/room/room/getRoomList?pageNo=1&pageSize=3
// http://110.42.184.111/api/room/room/getRoomList?pageNo=2&pageSize=6&cityCode=hz
import { http } from '@/utils/http'

export function fetchRoomList() {
    const url = 'https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/api/room/room/getRoomList?pageNo=1&pageSize=3'
    return http.httpRequestGet(url, {})
}