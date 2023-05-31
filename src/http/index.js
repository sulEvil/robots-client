import axios from 'axios'


// baseURL: 'http://gals-centos.soft-servis.local:8080/'
// baseURL: 'http://gals-centos.soft-servis.local:8080/'

// baseURL: 'http://localhost:9090/'
// baseURL: 'http://localhost:9090/'
const $host = axios.create({
    baseURL: 'http://localhost:9090/'
})

const $authHost = axios.create({
    baseURL: 'http://localhost:9090/'
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