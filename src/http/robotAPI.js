import { $authHost, $host } from ".";

export const createRobot = async (question) => {
    const {data} = await $authHost.post('api/robot', question)
    return data
}
export const fetchRobots = async (userId) => {
    const {data} = await $authHost.get(`api/robot?userId=${userId}`)
    return data
}
export const getAllRobots = async () => {
    const {data} = await $authHost.get('api/robot/all')
    return data
}