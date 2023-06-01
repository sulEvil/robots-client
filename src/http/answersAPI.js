import { $authHost, $host } from ".";

export const createAnswer = async (answer) => {
    const {data} = await $authHost.post('api/answer', answer)
    return data
}
export const fetchAnswers = async (questionId) => {
    const {data} = await $authHost.get(`api/answer?questionId=${questionId}`)
    return data
}
export const getAllAnswers = async () => {
    const {data} = await $authHost.get('api/question/all')
    return data
}
export const deleteAnswer = async(id) => {
    const {data} = await $authHost.post('api/answer/delete', id)
    return data
}