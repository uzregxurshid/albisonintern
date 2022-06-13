import PersonalHero from '../assets/images/personal/hero.png';
const Personal = () => {
  const styles= {
    personal: "personal bg-mainbgblack",
    container: "container max-w-[1440px] mx-auto",
    personal__container: "flex  w-full w930:pb-10 w930:justify-center",
    personal__right: 'personal__right flex flex-col pl-12 items-left justify-center w1100:pl-10 w1100:pr-4 w930:items-center w930:pl-2 w930:pr-2',
    personal__header: 'text-maintextwhite w930:text-center text-[44px] leading-[53px] font-bold not-italic  w-[618px] w1280:w-[550px] w1160:text-[40px] w1100:text-[38px] w1100:w-[420px] w930:w-[450px] w520:w-auto',
    personal__text: 'text-maintextwhite w930:text-center text-[22px] leading-[33px] font-normal not-italic w-[618px] mt-[50px] w1280:w-[550px] w1160:text-[18px] w1160:w-[520px] w1100:w-[420px] lg:mt-[30px]  w520:w-auto',
    personal__btn: 'intro__left--button text-maintext px-6 py-4 bg-mainbggreen w-max mt-12 rounded  uppercase tracking-[1px] lg:mt-8',
    personal__line: 'w-[150px] h-0.5 bg-mainbggreen mt-4',
    
  }
  return (
    <div className={styles.personal}>
      <div className={styles.container}>
        <div className={styles.personal__container}>
          <div className="personal__left w930:hidden">
            <img src={PersonalHero} alt="hero" />
          </div>
          <div className={styles.personal__right}>
            <h2 className={styles.personal__header}>
            Get personalized learning recommendations 
            </h2>
            <span className={styles.personal__line}></span>
            <img className='hidden w930:block mt-10 w520:w-auto' src={PersonalHero} alt="hero" width={400} height={400} />
            <p className={styles.personal__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urnaLorem ipsum dolor sit amet.</p>
            <button className={styles.personal__btn} type="button">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Personal