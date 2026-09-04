export async function getDatas(url: string){
    const response = await fetch(url, {
        next: { 
            revalidate: 60 * 30, // 30분마다 refetch
            tags: ["posts"], // 강제 refetch
            
        } 
    })
    if(!response.ok) throw new Error("failed to fetch")
    const datas = response.json()
    return datas
}

export async function getPostDetail(id:string){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: { 
            tags: [`posts-${id}`], // 강제 refetch
        } 
    })
    if(!response.ok) throw new Error("failed to fetch")
    const datas = response.json()
    return datas
}

