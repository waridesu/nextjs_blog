import * as types from '../types'
import axios from "axios";

export interface postType{
    body: string,
    id: number,
    title: string,
}

export const reqPosts = () => async (dispatch)=> {
    const res = await axios.get<Array<postType>>('https://simple-blog-api.crew.red/posts').then(res=> res.data)
    dispatch({
        type: types.POSTS, payload: res
    })
}
export const reqPost = (id) => async (dispatch) => {
    const res = await axios.get(`https://simple-blog-api.crew.red/posts/${id}`)
    dispatch({
        type: types.POST, payload: res.data
    })
}
export const postNewPost = (title, body) => async (dispatch) => {
    const res = await axios.post(`https://simple-blog-api.crew.red/posts`, {
        title, body
    }).then(res => res)

    dispatch({
        type: types.POST, payload: res
    })
}
