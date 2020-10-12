import Modal from '../../components/modal/Modal.js'

import styles from '../../styles/Home.module.css'
import stylesSubpage from './Subpage.module.css'

export default function ModalSkills(open, handleClose){
    if(open){
      return (
        <Modal open={open} onClose={handleClose}>
          <div className={styles.main}>
            <div className={styles.grid}>
              <a className={styles.card}>
                <h3>FrontEnd &#9734;</h3>
                <p>HTML, CSS, JS, ECMASCRIPT 6 and REACT</p>
                <p>
                  <span className={stylesSubpage.paint}>&#9733;</span>
                  <span className={stylesSubpage.paint}>&#9733;</span>
                  <span className={stylesSubpage.paint}>&#9733;</span>
                  <span className={stylesSubpage.paint}>&#9733;</span>
                  <span>&#9734;</span>
                </p>
              </a>
              <a className={styles.card}>
                <h3>BackEnd &#9734;</h3>
                <p>PHP, JAVA, NODEJS e POSTGRESQL and MYSQL</p>
                <p>
                  <span className={stylesSubpage.paint}>&#9733;</span>
                  <span className={stylesSubpage.paint}>&#9733;</span>
                  <span className={stylesSubpage.paint}>&#9733;</span>
                  <span>&#9734;</span>
                  <span>&#9734;</span>
                </p>
              </a>
              <a className={styles.card}>
                <h3>Mobile &#9734;</h3>
                <p>REACT NATIVE e FLUTTER</p>
                <p>
                  <span className={stylesSubpage.paint}>&#9733;</span>
                  <span className={stylesSubpage.paint}>&#9733;</span>
                  <span className={stylesSubpage.paint}>&#9733;</span>
                  <span>&#9734;</span>
                  <span>&#9734;</span>
                </p>
              </a>
              <a className={styles.card}>
                <h3>Infra &#9734;</h3>
                <p>Github, Gitlab, Docker, Heroku e Linux Servers</p>
                <p>
                  <span className={stylesSubpage.paint}>&#9733;</span>
                  <span className={stylesSubpage.paint}>&#9733;</span>
                  <span className={stylesSubpage.paint}>&#9733;</span>
                  <span>&#9734;</span>
                  <span>&#9734;</span>
                </p>
              </a>
            </div>
          </div>
        </Modal>
      )
    }
    return;
  }
  