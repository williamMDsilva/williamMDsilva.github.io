import styles from './Modal.module.css'

export default function Modal({children, open, onClose}) {
  return (
    <div className={styles.modal_container}>
      <div className={styles.modal_content}>
      {children}

        <a className={styles.close} onClick={() => onClose()}>X</a>
      </div>
    </div>
  )
}
