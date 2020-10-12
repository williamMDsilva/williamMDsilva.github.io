import Modal from '../../components/modal/Modal.js'

import Styles from './Subpage.module.css'

export default function ModalContact(open, handleClose){
    if(open){
      return (
        <Modal open={open} onClose={handleClose}>
          <div className={Styles.modal_content}>
            <ul>
              <li>
                <div>
                  <strong>william.moreirasilva@hotmail.com</strong>
                  </div>
              </li>
              <li>
                <div>
                  <strong>+55 45 9 9835 - 2261</strong>
                  </div>
              </li>
              <li>
                <div>
                  <strong>
                    <a
                      href='https://www.linkedin.com/in/william-m-da-silva-4215a1105/' 
                      target="_blank"
                      className={Styles.link}>Linkedin</a>                
                  </strong>
                </div>
              </li>
              <li>
                <div>
                  <strong>
                    <a
                      href='https://github.com/williammdsilva' 
                      target="_blank"
                      className={Styles.link}>Github</a>                
                  </strong>
                </div>
              </li>
              <li>
                <div>
                  <strong>
                    <a
                      href='https://www.gitshowcase.com/williammdsilva' 
                      target="_blank"
                      className={Styles.link}>Gitshowcase</a>                
                  </strong>
                </div>
              </li>              
            </ul>            
          </div>
        </Modal>
      )
    }
    return;
  }