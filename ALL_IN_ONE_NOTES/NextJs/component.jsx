import Link from "next/Link";
import Head from "next/Head";
import Image from "next/Image";
import {
    useRouter
} from "next/router";
import {
    useEffect
} from "react";
import useSWR from 'swr';
import axios from "axios";
import moment from "moment";
import {
    signIn
} from "next-auth/react";

const onSubmit = async (values)=>{
    const {ok} = await signIn("credentials",{...values,redirect: false});
    if(ok)
    {
      router.push("/");
    }
    else {
      setError(true);
      setTimeout(()=>setError(false),3000);
    }
}

const getData = async (url)=>{
    try {
      const response = await axios({
        method: "get",
        url: url
      });
      return response.data;
    }
    catch(err)
    {
      return err.response.data;
    }
}

const Component = ({children,title})=>{
    const router = useRouter();
    const {data,error} = useSWR("/api/media-convert?token="+token,getData,{refreshInterval: 5000});
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
            <Button theme="warning" className="flex gap-3 items-center" onClick={()=>signIn('google')}>
                  <i className="fa fa-google" style={{fontSize:'30px'}}></i>
                  Signin with Google
            </Button>
            <Button theme="secondary" className="flex gap-3 items-center" onClick={()=>signIn('facebook')}>
                <i className="fa fa-facebook" style={{fontSize:'30px'}}></i>
                Signin with Facebook
            </Button>
            <Button theme="info" className="flex gap-3 items-center" onClick={()=>signIn('github')}>
                <i className="fa fa-github" style={{fontSize:'30px'}}></i>
                Signin with Github
            </Button>
        </>
    )
}

export default Component;