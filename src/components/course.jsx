import CourseImg1 from '../assets/images/courses/coursef.png';
import CourseImg2 from '../assets/images/courses/courset.png';
import CourseImg3 from '../assets/images/courses/courseth.png';
const Courses = () => {
  const styles =  {
    courses: "courses bg-mainbgblack",
    container: "container max-w-[1404px] px-4 mx-auto",
    courses__container: "courses__container flex flex-col items-center py-[144px]",
    courses__header: " courses__header text-[44px] leading-[53px] font-bold text-maintextwhite text-center",
    courses__line: "courses__line w-[150px] h-0.5 bg-mainbggreen mt-[17px] ",
    courses__text: "courses__text w-[644px] text-[22px] leading-[33px] text-center text-maintextwhite mt-[50px]",
    courses__button: "courses__btn text-maintext px-6 py-4 bg-mainbggreen w-max mt-12 rounded lg:mt-10 uppercase tracking-[1px] text-center",
    courses__main: "courses__main flex",
    courses__list: "courses__list flex first:ml-0 mt-20",
    courses__itemf: "courses__card card w-[393px]", 
    courses__cardbg: "card__img w-full h-[197px]",
    courses__author: 'text-[17px] leading-[27px] font-normal not-italic mt-2',
    course__price: 'text-[22px] leading-[27px] text-maingtextgray font-normal not-italic',
    courses__newprice: "text-[22px] leading-[27px] text-maintext font-normal not-italic ml-2",
    courses__link: 'text-[16px] leading-[21px] text-mainbggreen tracking-[1px] uppercase not-italic font-normal',
    courses__theme: 'card__body--text text-[24px] leading-[29px] text-maintext font-normal w-[313px]',
    courses__cardbody: 'card__body bg-white pl-6 pt-[22px] pb-[30px]',
    cours__fprice: 'text-[22px] leading-[27px] text-maintext font-normal not-italic mt-[15px]',
    courses__nextitems: "courses__card card w-[393px] ml-12",
    course__pricewrap: 'flex mt-[15px] ',
  } 
  return (
    <div className={styles.courses}>
      <div className={styles.container}>
        <div className={styles.courses__container}>
          <h2 className={styles.courses__header}>Featured Courses</h2>
          <div className={styles.courses__line}></div>
          <p className={styles.courses__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
          <button className={styles.courses__button} type="button">
            View All Courses
          </button>

          <div className={styles.courses__main}>
            <ul className={styles.courses__list}>
              <li className={styles.courses__itemf}>
                <div className={styles.courses__cardbg} style={
                  {
                    backgroundImage: `url(${CourseImg1})`
                  }
                }>
                </div>
                <div className={styles.courses__cardbody}>
                  <div className={styles.courses__theme}>
                    How to Increase Your Engagement on Instagram
                  </div>
                  <div className={styles.courses__author}>Katie Murphy</div>
                  <div className={styles.cours__fprice}>$ 59.99 USD</div>
                  <div className='mt-4'>
                    <a className={styles.courses__link} href="/">Learn More</a>
                  </div>
                </div>

              </li>
              <li className={styles.courses__nextitems}>
                <div className={styles.courses__cardbg} style={
                  {
                    backgroundImage: `url(${CourseImg2})`
                  }
                }>
                </div>
                <div className={styles.courses__cardbody}>
                  <div className={styles.courses__theme}>
                   Business 101: Setting up Your Taxes
                  </div>
                  <div className={styles.courses__author}>Bessie Cooper</div>
                 <div className={styles.course__pricewrap}>
                 <div className={styles.courses__price}>$ 69.99 USD</div>
                 <div className={styles.courses__newprice}>$ 59.99 USD</div>
                 </div>
                  <div className='mt-4'>
                    <a className={styles.courses__link} href="/">Learn More</a>
                  </div>
                </div>

              </li>
              <li className={styles.courses__nextitems}>
                <div className={styles.courses__cardbg} style={
                  {
                    backgroundImage: `url(${CourseImg3})`
                  }
                }>
                </div>
                <div className={styles.courses__cardbody}>
                  <div className={styles.courses__theme}>
                   iPhone Photography: Tips, Tricks and Best Practices
                  </div>
                  <div className={styles.courses__author}>Dianne Russell</div>
                  <div className={styles.course__pricewrap}>
                 <div className={styles.courses__price}>$ 69.99 USD</div>
                 <div className={styles.courses__newprice}>$ 59.99 USD</div>
                 </div>
                  <div className='mt-4'>
                    <a className={styles.courses__link} href="/">Learn More</a>
                  </div>
                </div>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses