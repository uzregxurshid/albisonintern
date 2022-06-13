import Comments from "../components/comments"
import Courses from "../components/course"
import Header from "../components/header"
import Intro from "../components/intro"
import Personal from "../components/personal"
import Suggest from "../components/suggest"
import Workshops from "../components/workshops"
const Main = () => {
  return (
   <>
    <Suggest/>
    <Header/>
    <Intro/>
    <Courses/>
    <Personal/>
    <Workshops/>
    <Comments/>
    </>
  )
}

export default Main