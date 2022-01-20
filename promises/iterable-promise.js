const baseUrl = 'https://reqres.in/api';
const api = ['/users', '/users/2'];
const promises = [];
for (let i = 0; i < api.length; i++) {
    promises[i] = fetch(baseUrl + api[i]);
}

Promise.all(promises).then(responses => {
    console.log(responses)
    return Promise.all(responses.map(r => r.json()))
}).then(res => console.log(res));