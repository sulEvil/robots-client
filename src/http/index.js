import axios from 'axios'


// baseURL: 'http://gals-centos.soft-servis.local:8080/'
// baseURL: 'http://gals-centos.soft-servis.local:8080/'

// baseURL: 'http://localhost:9090/'
// baseURL: 'http://localhost:9090/'

axios.defaults.headers.common['Accept'] = 'application/json'
const $host = axios.create({
    baseURL: 'https://robominds.soft-servis.ru/'
})

const $authHost = axios.create({
    baseURL: 'https://robominds.soft-servis.ru/'
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}