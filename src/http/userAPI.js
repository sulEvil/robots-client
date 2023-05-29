import { $authHost, $host } from ".";
import jwtDecode from "jwt-decode";
export const registration = async (number, password, name='default') => {
    const {data} = await $host.post('api/user/registration', {number, name, password})
    localStorage.setItem('token', data)
    return jwtDecode(data)
}
export const login = async (number, password) => {
    const {data} = await $host.post('api/user/login', {number, password})
    localStorage.setItem('token', data)
    return jwtDecode(data)
}
export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data)
    return jwtDecode(data)
}