const Suggest = () => {
  const styles = {
    suggest:"suggest bg-mainbggreen", 
    container: "container max-w-[1404px] px-4 mx-auto",
    suggest__container: "sugget__container flex justify-center",
    suggest__text: "suggest__tex text-lg leading-[27px] text-center text-maintext py-2 font-normal md:text-[16px]",

  }
  return (
    <div className={styles.suggest}>
      <div className={styles.container}>
        <div className={styles.suggest__container}>
          <p className={styles.suggest__text}>
            One week only—50% off all courses with code 50OFF at checkout
          </p>
        </div>
      </div>
    </div>
  )
}

export default Suggest