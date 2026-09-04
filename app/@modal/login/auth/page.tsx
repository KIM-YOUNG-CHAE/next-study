"use client"
import { useRouter } from "next/navigation";

// 페러렐 라우트
export default function page() {
    const router = useRouter()
    return (
       
        <>  
            {/* <div className="fixed left-0 top-0 w-full h-full bg-black/50 z-10"></div> */}
            <div className="fixed inset-0 bg-black/50 z-10"></div>
            <div className="
                w-[100px] h-[100px] bg-white
                fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20
            ">
                <button onClick={() => router.back()}>X</button>
                모달 페이지
            </div>
        </>
    );
}