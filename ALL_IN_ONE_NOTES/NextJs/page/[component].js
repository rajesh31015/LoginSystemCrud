import {
    useRouter
} from "next/router";

const Component = ()=>{
    const router = useRouter();
    const { component } = router.query;

    return (
        <>
            <h1>{component}</h1>
        </>
    );
}

export default Component;

export const getStaticPaths = async ()=>{
    const response = await axios({
      method: "get",
      url: "http://localhost:3434/course-name"
    });
    const {courseName} = response.data;
    let paths = [];
    for(let data of courseName)
    {
      paths.push(
        {
          params: {courseName: data}
        }
      );
    }
  
    return {
      paths: paths,
    //   path: [
    //     {
    //         params: "node-js"
    //     }
    //   ],
      fallback: false
    }
}
  
export const getStaticProps = async (pathData)=>{
    const { courseName } = pathData.params;
    const response = await axios({
        method: "get",
        url: "http://localhost:3434/"+courseName
    });
    return {
        props: {
        data: response.data
        },
        revalidate: 5  //(in sec) run getStaticProps() once after given time
        // incremental static generation
    }
}

export const getServerSideProps = async (pathData)=>{
    const { courseName } = pathData.params;
    const response = await axios({
        method: "get",
        url: "http://localhost:3434/"+courseName
    });
    return {
        props: {
        data: response.data
        },
        revalidate: 5  //(in sec) run getStaticProps() once after given time
        // incremental static generation
    }
}
  