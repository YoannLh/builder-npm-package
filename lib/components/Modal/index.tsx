import { useEffect, useState } from 'react'

import styles from './styles.module.css'
import cross from './cross.svg'

interface ModalProps {
  visibleBool: boolean
  injectedText: string
}

export function Modal({ visibleBool, injectedText }: ModalProps) {
  // const { className, ...restProps } = props
  const [visible, setVisible] = useState(visibleBool)
  const [text, setText] = useState(injectedText)
  useEffect(() => {
    if (injectedText != '') setText(injectedText)
    if (visibleBool != undefined) setVisible(visibleBool)
  }, [visibleBool, injectedText])
  function closeModal() {
    setVisible(!visible)
  }
  return (
    <div
      className={`${styles.overlay}`}
      style={{ display: visible ? 'flex' : 'none' }}
    >
      <div className={`${styles.modal}`}>
        <img
          className={`${styles.cross}`}
          src={cross}
          alt="cross icon"
          onClick={() => closeModal()}
        />
        <p className={`${styles.text}`}>{text}</p>
      </div>
    </div>
  )
}

// return <div className={`${className} ${styles.modal}`}>Coucou !</div>
