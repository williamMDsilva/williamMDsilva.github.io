import Modal from '../../components/modal/Modal.js'

import Styles from './Subpage.module.css'

export default function ModalPersonalProject(open, handleClose){
    if(open){
      return (
        <Modal open={open} onClose={handleClose}>
          <div className={Styles.modal_content}>
            <ul>
              <li>
                <div><strong>Sonata - schedule for violinists</strong></div>
                <div>
                  <a 
                    href='https://play.google.com/store/apps/details?id=com.toque.violino.facil.sonata' 
                    target="_blank"
                    className={Styles.link}
                  >Ver no Google play</a>
                  </div>
                <div>The Sonata project it is an schedule to measure and guild the progress for violinists in grow up.</div>
                <div>Developed in Flutter and SQLite, with modular architecture.</div>
              </li>
            </ul>            
          </div>
        </Modal>
      )
    }
    return;
  }
  