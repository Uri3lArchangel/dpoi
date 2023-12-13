import Home from "./Home"
import TopNav from "./TopNav"

const page=()=> {
  return (
<>
<TopNav />
<Home clientID={process.env.CLIENTID!} />
</>
  )
}
export default page
