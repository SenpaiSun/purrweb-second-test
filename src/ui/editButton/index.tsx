import './style.css'

export const EditButton = ({title}: {title: string}) => {
  const windowSize = window.innerWidth
  console.log(windowSize)
  return <button className='edit-button'>{windowSize <= 578 ? '' : title}</button>
};
