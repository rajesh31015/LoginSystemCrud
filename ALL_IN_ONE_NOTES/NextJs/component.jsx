import Link from "next/Link";
import Head from "next/Head";
import Image from "next/Image";
import {
    useRouter
} from "next/router";
import {
    useEffect
} from "react";

const Component = ({children,title})=>{
    const router = useRouter();

    return (
        <>
            <Head>
                <title>component page</title>
            </Head> 
            <Link href="/component">
                <Button variant="contained" color="secondary">Syllabus</Button>
            </Link>
            <Link href="/courses" className={router.pathname === "/courses" ? "bg-danger" : null}><a target="_blank">Courses</a></Link>
            <Image src="/demo.jpg" width={720} height={480} />
            <button onClick={()=>router.reload()}>reload</button>
        </>
    )
}

export default Component;