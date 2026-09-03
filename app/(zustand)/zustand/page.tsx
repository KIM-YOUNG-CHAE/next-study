import Image from "next/image";
import ZustandCounter from "./_component/ZustandCounter";

const catPath = "/assets/images/zustand/cat.jpg"

export default function page() {
    return (
        <div>
            <h1>Zustand😊</h1>
            <ZustandCounter/>
            <Image 
                src={catPath}
                alt="고양이"
                width={200}
                height={200}
            />
        </div>
    );
}