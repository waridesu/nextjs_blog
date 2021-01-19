import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {reqPost} from "../../../Downloads/545408A7/pages/test-blog-next/store/actions";
import {useRouter} from "next/router";


const Post = () => {
    const post = useSelector((state) => state.postStorage.post)
    const dispatch = useDispatch()
    const rout = useRouter()

    useEffect(() => {
        dispatch(reqPost(rout.query.id))
    }, [dispatch])
    return <>
    {!post ? <div>Loading...</div> : <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </>}

    </>
}
export default Post
