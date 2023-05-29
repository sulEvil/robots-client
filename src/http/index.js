import axios from 'axios'

const $host = axios.create({
    baseURL: 'http://gals-centos.soft-servis.local:8080/'
})

const $authHost = axios.create({
    baseURL: 'http://gals-centos.soft-servis.local:8080/'
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