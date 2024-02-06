import Navbar from "@/components/Navbar/Navbar"
// import { Content } from "next/font/google"
import Content from "@/components/Content/Content"
import Footer from "@/components/Footer/Footer"

const page = () => {
  return (
    <div>
      <Navbar/>
      <Content/>
      {/* <Footer/> */}
    </div>
  )
}

export default page