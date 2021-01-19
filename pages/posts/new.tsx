import {useDispatch} from "react-redux";
import {postNewPost} from "../../../Downloads/545408A7/pages/test-blog-next/store/actions";

const New = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postNewPost(e.target[0], e.target[1]))
        e.target[0] = null
        e.target[1] = null
    }
    return <form onSubmit={handleSubmit}>
        <textarea />
        <textarea/>
        <button type="submit">Добавить</button>
    </form>
}
export default New
