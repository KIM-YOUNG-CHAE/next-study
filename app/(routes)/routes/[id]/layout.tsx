import Link from "next/link"

// 중첩 라우팅(레이아웃)
// 레이아웃은 페이지를 설계 할 때 보여주는 고정된 상위 영역
// 부모 자식관계가 아니라서 props를 넘길 수 없다
export default function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>
            <Link href={""}>페이지 이동</Link>
            {children}
        </section>
}