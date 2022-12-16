import axios from 'axios';

export const Api_Url = 'http://testing-env.eba-dubpwp2s.ap-northeast-1.elasticbeanstalk.com';

export default function callApi(endPoint,method='GET',body){
    return axios({
        method:method,
        url: `${Api_Url}/${endPoint}`,
        data:body
    })
}
//sas