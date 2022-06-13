import TeachingHero from '../assets/images/teaching/hero.png';

const Teaching = () => {
  const styles= {
    teaching: "teaching bg-mainbgblack",
    container: "container max-w-[1440px] mx-auto",
    teaching__container: "flex  w-full w930:pb-10 w930:justify-center pt-[109px] pb-[88px]",
    teaching__right: 'teaching__right flex flex-col pl-12 items-left justify-center w1100:pl-10 w1100:pr-4 w930:items-center w930:pl-2 w930:pr-2',
    teaching__header: 'text-maintextwhite w930:text-center text-[44px] leading-[53px] font-bold not-italic  w-[618px] w1280:w-[550px] w1160:text-[40px] w1100:text-[38px] w1100:w-[420px] w930:w-[450px] w520:w-auto',
    teaching__text: 'text-maintextwhite w930:text-center text-[22px] leading-[33px] font-normal not-italic w-[618px] mt-[50px] w1280:w-[550px] w1160:text-[18px] w1160:w-[520px] w1100:w-[420px] lg:mt-[30px]  w520:w-auto',
    teaching__btn: 'intro__left--button text-maintext px-6 py-4 bg-mainbggreen w-max mt-12 rounded  uppercase tracking-[1px] lg:mt-8  transition-all duration-500 hover:bg-maintextwhite hover:text-mainbggreen',
    teaching__line: 'w-[150px] h-0.5 bg-mainbggreen mt-4',
  }

  return (
    <div className={styles.teaching}>
      <div className={styles.container}>
        <div className={styles.teaching__container}>
          <div className="teaching__left w930:hidden" data-aos="fade-right">
            <img src={TeachingHero} alt="hero" />
          </div>
          <div className={styles.teaching__right} data-aos="fade-left">
            <h2 className={styles.teaching__header}>
            A Passion for Teaching
            </h2>
            <span className={styles.teaching__line}></span>
            <img className='hidden w930:block mt-10 w520:w-auto' src={TeachingHero} alt="hero" width={400} height={400} />
            <p className={styles.teaching__text}>A deep-dive on the Instagram algorythm, hashtags, content strategy, and branding.</p>
            <button className={styles.teaching__btn} type="button">About skillz</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teaching