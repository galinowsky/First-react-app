import React from 'react'
import Form from '../Form/Form'
import styles from './Modal.module.scss'
import Button from '../Button/Button'
const Modal = ({closeModalFn}) => (

<div className={styles.wrapper}>
<Button className={styles.exitButton} onClick={closeModalFn}>x</Button>
<Form></Form>


</div>

)

export default Modal