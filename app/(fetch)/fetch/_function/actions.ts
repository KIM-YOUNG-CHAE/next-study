"use server"
import { revalidateTag } from "next/cache";

export async function refreshPosts(){
    // fetch 했을 때 tags가 달려있는 캐시를 무효화
    revalidateTag("posts", "max")
}

export async function refreshPostsDetail(id:string){
    // fetch 했을 때 tags가 달려있는 캐시를 무효화
    revalidateTag(`posts-${id}`, "max")
}