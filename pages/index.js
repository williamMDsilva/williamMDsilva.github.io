import Head from 'next/head'
import styles from '../styles/Home.module.css'

import ModalAcademicBackground from './subpages/ModalAcademicBackground.js'
import ModalProfessionalExperience from './subpages/ModalProfessionalExperience.js'
import ModalPersonalProject from './subpages/ModalPersonalProject.js'
import ModalContact from './subpages/ModalContact.js'
import ModalSkills from './subpages/ModalSkills.js'

import { useState } from 'react';

const mapModal = {
  'AcademicBackground' : ModalAcademicBackground,
  'ProfessionalExperience' : ModalProfessionalExperience,
  'Skills' : ModalSkills,
  'PersonalProject' : ModalPersonalProject,
  'Contact' : ModalContact,
}

function ChoseModal(item, handleClose){
  return mapModal[item](true, handleClose)
}

export default function Home() {
  let [modalState, setModalState] = useState(false);
  let [whichModal, setWhichModal] = useState('');

  const openModal = (modal) => {
    setWhichModal(modal);
    setModalState(true);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>William Moreira da Sivla</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {modalState ? ChoseModal(whichModal, () => {setModalState(false)}) : null}

      <main className={styles.main}>
        <h1 className={styles.title}>
          William Moreira da Silva
        </h1>

        <p className={styles.description}>
          <strong className={styles.subtile}>
            <span className={styles.mark}> Full-Stack Developer </span>
          </strong>
          <code className={styles.code}>william.moreirasilva@hotmail.com</code>
        </p>

        <div className={styles.grid}>
          <a className={styles.card} onClick={() => {
            openModal('AcademicBackground');
          }}>
            <h3>Academic Background &rarr;</h3>
            {/* <p>Find in-depth information about Next.js features and API.</p> */}
          </a>

          <a className={styles.card} onClick={() => {
            openModal('ProfessionalExperience');
          }}>
            <h3>Professional Experience &rarr;</h3>
            {/* <p>Learn about Next.js in an interactive course with quizzes!</p> */}
          </a>

          <a
            className={styles.card}
            onClick={() => {
              openModal('Skills');
            }}
          >
            <h3>Skills &rarr;</h3>
            {/* <p>Discover and deploy boilerplate example Next.js projects.</p> */}
          </a>

          <a
            className={styles.card}
            onClick={() => {
              openModal('PersonalProject');
            }}
          >
            <h3>Personal Projects &rarr;</h3>
            {/* <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p> */}
          </a>

          <a
            className={styles.card}
            onClick={() => {
              openModal('Contact');
            }}
          >
            <h3>Contact &rarr;</h3>
            {/* <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p> */}
          </a>

          <a
            href='/resume.pdf'
            className={styles.card}
            target="_blank"
          >
            <h3>Resume &rarr;</h3>
            {/* <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p> */}
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          By William Moreira da silva - 2020 with NextJS
      </footer>
    </div>
  )
}
