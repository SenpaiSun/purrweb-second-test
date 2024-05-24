import './style.css'

export const InfoItem = ({ title, infoUser }: { title: string; infoUser: string}) => {
  return (
    <div className='info-item'>
      <p className='info-item__title'>{title}</p>
      <p className='info-item__info'>{infoUser}</p>
    </div>
  );
};
