import {Link,Outlet} from "react-router-dom"
const Layout=()=>{
    return(
        <>
        <Link to="home">Home</Link>||||
        <Link to="insert">Insert</Link>||||
        <Link to="display">Display</Link>
        <hr size="5" color="blue"/>
        <Outlet/>
        <hr size="5" color="blue"/>
        </>
    )
}
export default Layout;