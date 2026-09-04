
// https://jsonplaceholder.typicode.com/

import { Suspense } from "react";
import Posts from "./_component/Posts";
import Loading from "./_component/Loading";


export default function page() {
    return (
        <div>
            <Suspense fallback={<Loading/>}>
                <Posts/>
            </Suspense>
        </div>
    );
}