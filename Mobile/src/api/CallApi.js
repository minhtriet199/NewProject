import axios from 'axios';

export const Api_Url = 'http://192.168.1.240:8000';

export default function callApi(endPoint,method='GET',body){
    return axios({
        method:method,
        url: `${Api_Url}/${endPoint}`,
        data:body
    })
}