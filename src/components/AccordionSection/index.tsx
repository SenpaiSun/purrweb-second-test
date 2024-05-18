import React from 'react'
import { Accordion } from '../../ui/accordion'
import { faqData } from '../../utils/constants'
import './style.css'

export const AccordionSection: React.FC = () => {
  const openAccordeon = (e: React.MouseEvent<HTMLLIElement>) => {
    const currentItem = e.currentTarget
    // Проверка активности аккордеона
    const isActive = currentItem.classList.contains('profile__container-faq-item-active')
    // Закрытие активных аккордеонов
    document.querySelectorAll('.profile__container-faq-item-active').forEach((item) => item.classList.remove('profile__container-faq-item-active'))
    document.querySelectorAll('.profile__faq-text-active').forEach((item) => item.classList.remove('profile__faq-text-active'))
    // Условие активности для аккордеона
    if (!isActive) {
      currentItem.classList.add('profile__container-faq-item-active')
      const items: NodeListOf<HTMLElement> = currentItem.querySelectorAll('.profile__faq-text')
      items.forEach((item) => {
        item.classList.add('profile__faq-text-active')
      })
    }
  }

  return (
    <div className='profile__container-faq-section'>
      <h3 className='profile__faq-title-main'>Часто задаваемые вопросы</h3>
      <div className='profile__container-faq-list'>
        {faqData.map((data, index) => (
          <Accordion stateAccordion={openAccordeon} key={index} title={data.title} text={data.text} />
        ))}
      </div>
    </div>
  )
}
