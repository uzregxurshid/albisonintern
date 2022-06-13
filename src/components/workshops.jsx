const Workshops = () => {
  const styles = {
    workshops: "workshops bg-mainbgworkshop",
    container: "container max-w-[1404px] px-4 mx-auto",
    workshops__container: "workshops__container flex flex-col items-center pt-[142px] pb-[145px] md:py-[100px]",
    workshops__header: " workshops__header text-[44px] leading-[53px] font-bold text-maintext text-center md:text-[38px]",
    workshops__line: "workshops__line w-[150px] h-0.5 bg-mainbggreen mt-[17px] ",
    workshops__text: "workshops__text w-[644px] text-[22px] leading-[33px] text-center text-maintext mt-[50px] md:w-[520px] w520:text-[20px] w520:w-[425px] w425:w-[330px] w425:text-[16px] w375:w-[320px]",
    workshops__button: "workshops__btn text-maintext px-6 py-4 bg-mainbggreen w-max mt-12 rounded lg:mt-10 uppercase tracking-[1px] text-center  transition-all duration-500 hover:bg-maintext hover:text-mainbggreen",
    workshops__main: "workshops__main flex",
    workshops__list: "workshops__list flex first:ml-0 mt-20 w1050:flex-wrap w1050:justify-center w850px:grid grid-cols-2 grid-rows-1 gap-0 w850:w-[400px] w520:w-[320px]",
    workshops__cardbg: "card__img w-full h-[197px]",
    workshops__info: 'text-[17px] leading-[27px] font-normal not-italic mt-[11px]',
    workshops__link: 'text-[16px] leading-[21px] text-mainbggreen tracking-[1px] uppercase not-italic font-normal',
    workshops__theme: 'card__body--text text-[24px] leading-[29px] text-maintext font-normal w-[313px]',
    workshops__cardbody: 'card__body bg-white pl-6 pr-[35px] pt-[22px] pb-[30px] w1160:pl-5 w1050:pl-6 overflow-hidden',
    workshops__itemf: "workshops__card card w-[391px] w1280:w-[350px] w1160:w-[320px] w1050:w-[391px] w425:w-[360px] w375:w-[320px]",
    workshops__nextitems: "workshops__card card w-[391px] ml-12 w1320:ml-8 w1280:w-[350px] w1160:w-[320px] w1050:w-[391px] w850:mt-20 w850:ml-0 w425:w-[360px] w375:w-[320px]",
    workshops__nextitems3: "workshops__card card w-[391px] ml-12 w1320:ml-8 w1280:w-[350px] w1160:w-[320px] w1050:mt-20 w1050:w-[391px] w1050:ml-0 w425:w-[360px] w375:w-[320px]",
  } 
  return (
    <div className={styles.workshops}>
      <div className={styles.container}>
        <div className={styles.workshops__container}  data-aos="fade-up">
          <h2 className={styles.workshops__header}>Upcoming Free Workshops</h2>
          <div className={styles.workshops__line}></div>
          <p className={styles.workshops__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
          <button className={styles.workshops__button} type="button">
            View All Workshops
          </button>

          <div className={styles.workshops__main}>
            <ul className={styles.workshops__list}>
              <li className={styles.workshops__itemf}>
                <div className={styles.workshops__cardbody}>
                  <div className={styles.workshops__theme}>
                    Photography Basics
                  </div>
                  <div className={styles.workshops__info}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.
                  </div>
                  <div className='mt-4'>
                    <a className={styles.workshops__link} href="/">Learn More</a>
                  </div>
                </div>

              </li>
              <li className={styles.workshops__nextitems}>
                <div className={styles.workshops__cardbody}>
                  <div className={styles.workshops__theme}>
                    Business 101
                  </div>
                  <div className={styles.workshops__info}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.
                  </div>
                  <div className='mt-4'>
                    <a className={styles.workshops__link} href="/">Learn More</a>
                  </div>
                </div>

              </li>
              <li className={styles.workshops__nextitems3}>
                <div className={styles.workshops__cardbody}>
                  <div className={styles.workshops__theme}>
                    Social Networking Camp
                  </div>
                  <div className={styles.workshops__info}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.
                  </div>
                  <div className='mt-4'>
                    <a className={styles.workshops__link} href="/">Learn More</a>
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

export default Workshops