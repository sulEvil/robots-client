import { $authHost, $host } from ".";

export const createQuestion = async (question) => {
    const {data} = await $authHost.post('api/question', question)
    return data
}
export const fetchQuestions = async (robotId) => {
    const {data} = await $authHost.get(`api/question?robotId=${robotId}`)
    return data
}
export const getAllQuestions = async () => {
    const {data} = await $authHost.get('api/question/all')
    return data
}