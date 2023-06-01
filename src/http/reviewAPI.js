import { $authHost, $host } from ".";

export const createReview = async (review) => {
    const {data} = await $authHost.post('api/review', review)
    return data
}
export const fetchReview = async (userId) => {
    const {data} = await $authHost.get(`api/review?userId=${userId}`)
    return data
}
export const getAllReview = async () => {
    const {data} = await $authHost.get('api/review/all')
    return data
}
