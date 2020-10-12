import Modal from '../../components/modal/Modal.js'

import Styles from './Subpage.module.css'

export default function ModalProfessionalExperience(open, handleClose){
    if(open){
      return (
        <Modal open={open} onClose={handleClose}>
          <div className={Styles.modal_content}>
            <ul>
              <li>
                <div><strong>Software Developer - Wealth Systems</strong></div>
                <div>Mar/2019 - at the moment</div>
                <div>Technologies: JAVA, SQL, JQUERY, JS, HTML, CSS, REACT, REACT NATIVE GIT, SVN and SQL</div>
              </li>
              <li>
                <div><strong>Full Stack Developer - Freelancer</strong></div>
                <div>Feb 2018 - Feb 2019 </div>
                <div>Technologies: PHP, NODE, GIT, AWS e Frontend</div>
              </li>
              <li>
                <div><strong>Full Stack Developer - NextGov</strong></div>
                <div>Sept 2016 - Feb 2018</div>
                <div>Technologies: Angular 2, GIT, Laravel e AWS</div>
              </li>
            </ul>            
          </div>
        </Modal>
      )
    }
    return;
  }
  