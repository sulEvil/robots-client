import { $authHost, $host } from ".";

export const createRobot = async (question) => {
    const {data} = await $authHost.post('api/robot', question)
    return data
}
export const fetchRobots = async (userId) => {
    const {data} = await $authHost.get(`api/robot?userId=${userId}`)
    return data
}
export const fetchRobot = async (id) => {
    const {data} = await $authHost.get(`api/robot?id=${id}`)
    return data
}
export const getAllRobots = async () => {
    const {data} = await $authHost.get('api/robot/all')
    return data
}
export const editRobot = async (info) => {
    const {data} = await $authHost.post(`api/robot/edit`, info)
    return data
}