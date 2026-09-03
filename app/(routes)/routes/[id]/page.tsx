// 다이나믹 라우팅
// url parameter(동적 파라미터)

interface Props {
    params:Promise<{
        id: number
    }>
}

export default async function page({params}:Props) {
    const {id} = await params
    return (
        <div>
            다이나믹 라우팅
        </div>
    );
}