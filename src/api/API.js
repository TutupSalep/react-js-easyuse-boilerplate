import axios from 'axios'

const fetch = async (url, options = {
    method: 'GET',
    body: {}
}) => {
    const request = {
        baseURL: 'http://159.89.207.30/api/v1_0_0/',
        method: options.method,
        timeout: 500000,
        url,
        headers: options.head
    };
    if (request.method === 'POST') request.data = options.body;
    const res = await axios(request);
    if (res.status === 200) {
        return res.data
    } else {
        throw res
    }
};

export default {
    //  SEARCH
    searchEmployeeAchievement: (body) => {
        console.log("ini di API", body);
        return fetch("get-achivements-by-year-and-user", {
            method: 'POST',
            head: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin' : "http://localhost:3000",
                // 'Access-Control-Allow-Credentials' : "true",
                // 'Access-Control-Allow-Headers': "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
                // 'Access-Control-Allow-Methods': "GET, POST, PUT, DELETE, OPTIONS"
            },
            body: {
                "body" : body
            }
        })
    },
}
