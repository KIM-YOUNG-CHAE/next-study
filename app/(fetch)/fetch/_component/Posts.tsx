"use client"
import { use, useTransition } from "react";
import { getDatas } from "../_function/fetcher";
import { refreshPosts } from "../_function/actions";
import { Post } from "@/app/types/post/post";
import Link from "next/link";


// 외부 또는 props로 전달
const promiseDatas = getDatas('https://jsonplaceholder.typicode.com/posts')

export default function Posts() {
    // use: React 19버전 Hook,
    // 비동기 Promise데이터나 Context 값의 내부를 읽어올 수 있게끔 처리해주는 기능
    // useEffect, useState 없이 객첼르 전달받아서 바로 꺼내쓸 수 있도록 처리해주는 hook
    const posts = use(promiseDatas)
    const [isPending, startTransition] = useTransition()
    
    // 새로고침
    const handleRefresh = () => {
        startTransition(async() => {
            // revalidataTag 실행 -> 최신 캐시로 갱신
            await refreshPosts()
        })
    }
    return (
        <ul>
            <button onClick={handleRefresh}>{isPending ? "새로고침 중.." : "불러오기"}</button>
            {posts.map(({id,title}:Post, i:number) => (
                <Link href={`/fetch/${id}`} key={i}>{title}</Link>
                
            ))}
        </ul>
    );
}