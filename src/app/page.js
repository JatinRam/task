import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <nav className={styles.nav}>
          <span className={styles.p_figure}>p</span>
          <img className={styles.menu} src="/assets/menu_1.png"></img>
        </nav>
        <div className={styles.hero_content_section}>
          <h1 className={styles.heading}>meet</h1>
          <p className={styles.section_1_content}>A stupidly simple, flat PSD. Oh yeah, it's&nbsp;<b>free</b>&nbsp;too!</p>
          <button className={styles.download_button}>
            Download &nbsp;
            <img src="/assets/Downloadicon.png"></img>
          </button>
          <div className={styles.hero_section_image_container}>
            <img className={styles.section_1_image} src="/assets/iphone5.png" />
          </div>
        </div>
        <div className={styles.hero_download_section}></div>
      </section>
      <section className={styles.say_hello_section}>
        <h3 className={styles.say_hello_heading}>A Longwinded Header</h3>
        <p className={styles.say_hello_content_first}>She'll be right paddock how lets throw a ciggies. She'll be right ute to built like a doovalacky. We're going rack off bloody she'll be right pash. You little ripper tucker also get a dog up ya greenie.</p>
        <p className={styles.say_hello_content_second}>You little ripper boozer no worries she'll be right holy dooley!. Come a freo also as cross as a your shout. Lets throw a khe sanh flamin dead dingo's donger. Lets get some fisho with grab us a trackie dacks.</p>
        <button className={ styles.say_hello_button}>say hello &nbsp;
          <img className={styles.say_hello_button_image } src="/assets/email.png"></img>
          </button>
        <div className={styles.say_hello_section_image_container}>
          <img className={styles.say_hello_section_image} src="/assets/ipad_flat .png"></img>
        </div>
      </section>
      <section className={styles.get_dog_section}>
        <section className={styles.get_dog_section_1}>
          <div className={styles.get_dog_image_container_1}><img className={styles.get_dog_image_1} src="/assets/macbook_retina.png" /></div>
          <div className={styles.get_dog_image_container_2}><img className={styles.get_dog_image_2} src="/assets/imac.png" /></div>
          <div className={styles.get_dog_image_container_3}><img className={styles.get_dog_image_3} src="/assets/ipad.png" /></div>
          <div className={styles.get_dog_image_container_4}><img className={styles.get_dog_image_4} src="/assets/iphone5.png" /></div>
          <div className={styles.get_dog_image_container_5}><img className={styles.get_dog_image_5} src="/assets/ipadmini.png" /></div>
        </section>
        <section lassName={styles.get_dog_section_2}>
          <h3 className={styles.say_hello_heading}>Get a Dog Up Ya'</h3>
          <p className={styles.get_dog_content_1}>She'll be right paddock how lets throw a ciggies.
            <br />
            She'll be right ute to build like a doovalacky.
          </p>
          <p className={ styles.get_dog_content_2}> We're going track off bloody she'll be right pash. You little ripper tucker also get a dog up ya greenie.</p>
          <button className={styles.get_dog_button} >view on dribble &nbsp;
            <img className={styles.get_dog_button_image} src="/assets/basketball.png"></img>
          </button>
        </section>
      </section>
      <section className={styles.like_section }>
        <h3 className={styles.like_section_heading}>like what you see?</h3>
        <button className={styles.buy_button}>buy me a <span>&nbsp;beer?&nbsp;</span>
          <img src="/assets/beer.png" />
        </button>
      </section>
      <section className={styles.newsletter_section}>
        <div className={styles.socials_bar}>
          <button className={styles.round_button}><img src="/assets/dribbble.png" /></button>
          <button className={styles.round_button}><img src="/assets/facebook.png" /></button>
          <button className={styles.round_button}><img src="/assets/twitter.png" /></button>
          <button className={styles.round_button}><img src="/assets/mail.png" /></button>
        </div>
        <div className={styles.socials_bar}>
          <span className={styles.newsletter_subscription}>Newsletter Subscription</span>
          <span className={styles.email_input_span}>
            <input className={styles.email_input} type="email" placeholder="Enter Email" />
            <button className={styles.newsletter_button}>
              <img className={styles.email_image} src="/assets/email.png" />
            </button>
          </span>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>&copy;&nbsp;2013&nbsp;<a className={styles.footer_link} href="https://www.w3schools.com">perth</a>&nbsp;Breeding pixels since the naughties.</p>
      </footer>
      <button className={styles.top_button}><img className={styles.top_image} src="/assets/power.png" /></button>
    </div>
  );
}
