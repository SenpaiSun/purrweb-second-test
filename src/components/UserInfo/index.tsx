import { UserInfoProps } from '../../types';
import { InfoItem } from '../../ui/infoItem';
import './style.css'


export const UserInfo: React.FC<UserInfoProps> = ({dataUserSort}) => {
  return (
    <div className='user-info'>
      {dataUserSort.map((data, index) => (
        <InfoItem title={Object.keys(data)[0]} infoUser={Object.values(data)[0]} key={index} />
      ))}
    </div>
  );
};
