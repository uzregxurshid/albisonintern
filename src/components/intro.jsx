import './comp.css';
import Hero from '../assets/images/intro/bg.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Intro = () => {
  const styles = {
    intro: "intro bg-mainbgblack bg-no-repeat",
    container: "container max-w-[1308px] mx-auto",
    intro__container: "intro__container flex flex-row pt-[104px] pb-[137px] w1320:px-4  w930:flex-col w930:items-center md:pt-[80px] md:pb-[100px]",
    intro__left: "intro__left flex flex-col w930:items-center w640:w-[520px]",
    intro__feature: " intro__left--text w-[150px] text-maintextwhite text-base leading-[21px] border-b-mainbggreen border-b-[2px] pb-[7px] overflow-hidden uppercase text-justify tracking-[1px]",
    intro__header: "intro__left--header w425:w-[350px] w425:text-[45px] w520:w-[400px] w930:text-center text-maintextwhite text-[55px] leading-[60px] font-bold w-[509px] mt-[59px] lg:text-[50px] lg:mt-12 w375:w-[320px]",
    intro__right: "intro__right relative ml-56",
    intro__define: "intro__left--define w520:w-[300px] w930:text-center mt-[22px] text-maintextwhite text-[22px] leading-[33px] font-normal w-[548px] lg:text-[20px] lg:mt-4 w640:w-[520px]",
    intro__author: "intro__left--author text-maingtextgray font-normal text-[17px] leading-[27px] mt-[22px] lg:mt-4",
    intro__button: "intro__left--button text-maintext px-6 py-4 bg-mainbggreen w-max mt-12 rounded lg:mt-10 uppercase tracking-[1px] transition-all duration-500 hover:bg-maintextwhite hover:text-mainbggreen",
    intro__img: "intro__left--img mt-5 hidden  w930:block w520:w-[320px]",

  }
  
  useEffect(() => {
    Aos.init({once: true, duration:1000});
    Aos.refresh();
  });

  return (
    <div className={styles.intro}>
      <div className={styles.container}>
        <div className={styles.intro__container}>
          <div className={styles.intro__left} data-aos="fade-right">
            <p className={styles.intro__feature}>Featured Course</p>
            <h1 className={styles.intro__header}>Run your own online learning platform</h1>
            <img src={Hero} alt="hero" className={styles.intro__img} width={400} height={400} />
            <p className={styles.intro__define}>A deep-dive on the Instagram algorythm, hashtags, content strategy, and branding.</p>
            <p className={styles.intro__author}>Kathryn Murphy</p>
            <button className={styles.intro__button}>Learn More</button>
          </div>
          <div className='intro__right w930:hidden' data-aos="fade-left">
            <img src={Hero} alt="hero" className="w-[614px] h-[614px] ml-[98px] w1280:w-[500px] w1280:h-[500px]  w1160:h-[450px]  w1160:w-[450px] w1160:ml-0" width={400} height={400} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro