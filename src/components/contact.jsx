import React from 'react'
const styles = {
  contact: 'contact bg-transparent -mt-20',
  container: 'container max-w-[1316px] px-5 mx-auto',
  contact__container: 'contact__container bg-mainbggreen flex flex-col items-center  pt-[78px] pb-[95px] md:px-2 sm:py-15',
  contact__header: 'contact__header text-[44px] leading-[53px] font-bold text-maintext text-center not-italic md:text-[38px]',
  contact__mail: 'sm:w-[285px] pl-[19px] bg-transparent border-[1px] rounded border-maintext w-[400px] h-16 text-maintext leading-[53px] text-[20px] font-bold mt-[57px] placeholder:text-maintext placeholder:leading-[53px] placeholder:text-[20px] placeholder:font-bold placeholder:mt-[57px]',
  contact__button: 'ml-4 w-[116px] h-16 rounded bg-maintext text-mainbggreen text-center leading-[53px] text-[20px] font-bold mt-[57px]',

}
const Contacts = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.contact__container}>
          <h2 className={styles.contact__header}>You have the power to define your future.</h2>
          <form action="/">
            <input className={styles.contact__mail} type="email" name="email" id="email" placeholder='EMAIL ADDRESS' required="required" />
            <button className={styles.contact__button} type='submit'> SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacts