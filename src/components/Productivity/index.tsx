import { Button } from '../../ui/button'
import productivity from '../../assets/icons/productivity.png'
import './style.css'

export const Productivity = ({ count }: { count: number }) => {
  return (
    <div className='productivity'>
      <div className='productivity__info'>
        <h3 className='productivity__title'>Ваша продуктивность выросла!</h3>
        <p className='productivity__text'>За прошлую неделю вы выполнили {count} задач</p>
        <Button type='button' textButton='Подробнее' disabled={false} />
      </div>
      <div className='productivity__image-container'>
        <img className='productivity__image' src={productivity} alt='Продуктивность' />
      </div>
    </div>
  )
}
