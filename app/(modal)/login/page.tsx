import Link from "next/link";

export default function page() {
    return (
        <div className="
            m-auto w-[300px] border-2
            flex flex-col
        ">
            <h1>로그인 페이지</h1>
            <div className="flex flex-col">
                <span>이메일</span><input className="border-2 border-solid border-black" type="text" />
            </div>
            <div className="flex flex-col">
                <span>비밀번호</span><input type="text" className="border-2 border-solid border-black" />
            </div>
            <Link href={"/login/auth"} className="bg-blue-400">로그인</Link>
        </div>
    );
}