import Modal from '../../components/modal/Modal.js'

import Styles from './Subpage.module.css'

export default function ModalAcademicBackground(open, handleClose){
    if(open){
      return (
        <Modal open={open} onClose={handleClose}>
        <div className={Styles.modal_content}>
          <p><b>Degree</b></p>
          <ul>
            <li>
              <div><strong>Technician degree in network computer</strong></div>
              <div> SENAI - PR</div>
              <div> 2014 - 2015</div>
            </li>
          </ul>
          <p><b>Outhers</b></p>
          <ul>
            <li>
              <div><strong>Semana OmniStack 11</strong></div>
              <div> 2020 </div>
              <div> Rocketseat (10h) <a href='/so11.pdf' 
                      target="_blank"
                      className={Styles.link}> Ver</a>
              </div>
            </li>
            <li>
              <div><strong>Flutter</strong></div>
              <div> 2020 </div>
              <div> Alura cursos online (60h) <a href='https://cursos.alura.com.br/degree/certificate/436d41d7-115e-4c65-9a0e-219de5d89f31' 
                      target="_blank"
                      className={Styles.link}>Ver</a></div>
            </li>
            <li>
              <div><strong>React</strong></div>
              <div> 2019 </div>
              <div> Alura cursos online (80h) <a href='https://cursos.alura.com.br/degree/certificate/d50f22bf-fb4d-4449-be2b-4f281736e2b6' 
                      target="_blank"
                      className={Styles.link}>Ver</a></div>
            </li>
            <li>
              <div><strong>Docker</strong></div>
              <div> 2019 </div>
              <div> Alura cursos online (10h) <a href='https://cursos.alura.com.br/certificate/c8dc9cf1-8cda-4cab-895a-59fcaf109cc2' 
                      target="_blank"
                      className={Styles.link}>Ver</a></div>
            </li>
            <li>
              <div><strong>Kubernetes</strong></div>
              <div> 2019 </div>
              <div> Alura cursos online (8h) <a href='https://cursos.alura.com.br/certificate/949247a7-1353-4d9a-8cd7-518fe5769f71' 
                      target="_blank"
                      className={Styles.link}>Ver</a></div>
            </li>
          </ul>          
        </div>
      </Modal>
      )
    }
    return;
  }
  