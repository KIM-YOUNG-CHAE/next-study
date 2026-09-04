"use client"
// 컴포넌트에서 받는 Props 타입은 컴포넌트 상단에 정의

import { Post } from "@/app/types/post/post";
import { use, useTransition } from "react";
import { refreshPostsDetail } from "../_function/actions";

// 네이밍 규칙: 컴포넌트명Props
interface postDetailProps{
    promisePostDetail: Promise<Post>,
    id:string
}

export default function PostDetail({promisePostDetail, id}:postDetailProps) {
    const {userId, title, body}:Post = use(promisePostDetail)
    const [pending, startTransition] = useTransition()
    
    const handleRefresh = () => {
        startTransition(async () => {
            await refreshPostsDetail(id)
        })
    }
    return (
        <div>
            <button onClick={handleRefresh}>{pending ? "불러오는 중..." : "새로고침" }</button>
            <p>게시글 번호: {id}</p>
            <h1>제목: {title}</h1>
            <p>내용: {body}</p>
            <p>작성자: {userId}</p>
        </div>
    );
}