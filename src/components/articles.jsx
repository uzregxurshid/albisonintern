import Article1 from '../assets/images/article/articlef.png';
import Article2 from '../assets/images/article/articlet.png';
import Article3 from '../assets/images/article/articleth.png';
const Artic = () => {
  const styles =  {
    articles: "articles bg-mainbgworkshop pb-[266px]",
    container: "container max-w-[1404px] px-4 mx-auto",
    articles__container: "articles__container flex flex-col items-center pt-[142px] md:py-[100px]",
    articles__header: " articles__header text-[44px] leading-[53px] font-bold text-maintext text-center md:text-[38px]",
    articles__line: "articles__line w-[150px] h-0.5 bg-mainbggreen mt-[17px] ",
    articles__text: "articles__text w-[644px] text-[22px] leading-[33px] text-center text-cardtexta mt-[50px] md:w-[520px] w520:text-[20px] w520:w-[425px] w425:w-[330px] w425:text-[16px] w375:w-[320px]",
    articles__button: "articles__btn text-maintext px-6 py-4 bg-mainbggreen w-max mt-12 rounded lg:mt-10 uppercase tracking-[1px] text-center",
    articles__main: "articles__main flex",
    articles__list: "articles__list flex first:ml-0 mt-20 w1050:flex-wrap w1050:justify-center w850px:grid grid-cols-2 grid-rows-1 gap-0 w850:w-[400px] w520:w-[320px]",
    articles__cardbg: "card__img w-full h-[197px]",
    articles__author: 'text-[17px] leading-[27px] font-normal not-italic mt-2 text-cardtexta',
    articles__date: 'text-[17px] leading-[27px] font-normal not-italic mb-[22px] text-cardtexta',
    articles__link: 'text-[16px] leading-[21px] text-mainbggreen tracking-[1px] uppercase not-italic font-normal',
    articles__theme: 'card__body--text text-[24px] leading-[29px] text-maintext font-normal w-[313px]',
    articles__cardbody: 'card__body bg-white pl-6 pt-[22px] pb-[30px] w1160:pl-5 w1050:pl-6 overflow-hidden',
    articles__itemf: "articles__card card w-[393px] w1280:w-[350px] w1160:w-[320px] w1050:w-[393px] w425:w-[360px] w375:w-[320px]", 
    articles__nextitems: "articles__card card w-[393px] ml-12 w1320:ml-8 w1280:w-[350px] w1160:w-[320px] w1050:w-[393px] w850:mt-20 w850:ml-0 w425:w-[360px] w375:w-[320px]",
    articles__nextitems3: "articles__card card w-[393px] ml-12 w1320:ml-8 w1280:w-[350px] w1160:w-[320px] w1050:mt-20 w1050:w-[393px] w1050:ml-0 w425:w-[360px] w375:w-[320px]",
  } 
  return (
    <div className={styles.articles}>
      <div className={styles.container}>
        <div className={styles.articles__container}>
          <h2 className={styles.articles__header}>Recent Articles</h2>
          <div className={styles.articles__line}></div>
          <p className={styles.articles__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
          <button className={styles.articles__button} type="button">
            View All articles
          </button>

          <div className={styles.articles__main}>
            <ul className={styles.articles__list}>
              <li className={styles.articles__itemf}>
                <div className={styles.articles__cardbg} style={
                  {
                    backgroundImage: `url(${Article1})`
                  }
                }>
                </div>
                <div className={styles.articles__cardbody}>
                  <div className={styles.articles__date}>February 8, 2021</div>

                  <div className={styles.articles__theme}>
                   The TikTok Algorithm: How to Get the Best Engagement
                  </div>
                  <div className={styles.articles__author}>Katie Murphy</div>
                </div>

              </li>
              <li className={styles.articles__nextitems}>
                <div className={styles.articles__cardbg} style={
                  {
                    backgroundImage: `url(${Article2})`
                  }
                }>
                </div>
                <div className={styles.articles__cardbody}>
                  <div className={styles.articles__date}>February 8, 2021</div>

                  <div className={styles.articles__theme}>
                   How to Win Friends and Influence People
                  </div>
                  <div className={styles.articles__author}>Bessie Cooper</div>
                </div>

              </li>
              <li className={styles.articles__nextitems3}>
                <div className={styles.articles__cardbg} style={
                  {
                    backgroundImage: `url(${Article3})`
                  }
                }>
                </div>
                <div className={styles.articles__cardbody}>
                  <div className={styles.articles__date}>January 31, 2021</div>

                  <div className={styles.articles__theme}>
                   iPhone Photography: Tips, Tricks, and Best Practices
                  </div>
                  <div className={styles.articles__author}>Dianne Russell</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Artic