import './style.css'

export const Accordion= ({title, text, stateAccordion}: {title: string; text: string, stateAccordion: (e: React.MouseEvent<HTMLLIElement>) => void}) => {
  return (
    <li className='profile__container-faq-item' onClick={stateAccordion}>
      <h4 className='profile__faq-title'>{title}</h4>
      <p className='profile__faq-text'>{text}</p>
    </li>
  )
}
