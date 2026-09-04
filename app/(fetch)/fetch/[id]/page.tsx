import { Suspense } from "react";
import Loading from "../_component/Loading";
import Link from "next/link";
import { getPostDetail } from "../_function/fetcher";
import PostDetail from "../_component/PostDetail";

interface pageProps{
    params:Promise<{
        id: string
    }>
}


export default async function page({params}: pageProps) {
    const {id} = await params
    const promisePostDetail = getPostDetail(id)
    return (
        <div>
            <Link href={"/fetch"}>목록으로</Link>
            <Suspense fallback={<Loading/>}>
                <PostDetail id={id} promisePostDetail={promisePostDetail}/>
            </Suspense>
        </div>
    );
}