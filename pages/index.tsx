import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {reqPosts} from "../store/actions";
import Link from 'next/link'
import Card from "react-bootstrap/Card";

export default function Home() {
    const posts = useSelector((state) => state.postStorage.posts)
    console.log(posts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(reqPosts())
    }, [dispatch])

    return <>{!posts ? <>loading...</> :
        posts.map((p) =><Card key={p.id}>
            <Link href={`posts/[id]`} as={`/posts/${p.id}`}>
                <a>
                    <Card.Body>
                        <Card.Title>
                            {p.title}
                        </Card.Title>
                        <Card.Text>
                            {p.body}
                        </Card.Text>
                    </Card.Body>
                </a>
            </Link>
        </Card>)}</>
}
