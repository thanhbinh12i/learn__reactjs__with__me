import { Outlet } from "react-router-dom";

function Blog(){
      return (
            <>
               <h2>Page Blog</h2>
               <Outlet />
            </>
      )
}
export default Blog;