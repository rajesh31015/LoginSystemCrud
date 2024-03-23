import {
  useRouter
} from "next/router";
import Layout from "../../../cmp/Layout/Layout";
const Courses = ()=>{
  const router = useRouter();
  const path = router.query.courseName;
  if(path && path.length > 4)
  {
    router.push("/404");
    // router.replace("/404");
    return false;
  }
  const design = (
    <>
      <h1>Course</h1>
    </>
  );
  return design;
}

export default Courses;
