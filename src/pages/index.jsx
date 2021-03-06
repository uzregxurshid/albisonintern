import Artic from "../components/articles"
import Comments from "../components/comments"
import Contacts from "../components/contact"
import Courses from "../components/course"
import Footer from "../components/footer"
import Header from "../components/header"
import Intro from "../components/intro"
import Personal from "../components/personal"
import Suggest from "../components/suggest"
import Teaching from "../components/teaching"
import Workshops from "../components/workshops"
const Main = () => {
  return (
    <>
      <Suggest />
      <Header />
      <Intro />
      <Courses />
      <Personal />
      <Workshops />
      <Comments />
      <Teaching />
      <Artic />
      <Contacts />
      <Footer />
    </>
  )
}

export default Main
