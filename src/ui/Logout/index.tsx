import './style.css'

export const Logout = ({ fullName }: { fullName: string}) => {
  const handleLogout = () => {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div className='logout'>
      <p className='logout__text'>{fullName}</p>
      <button onClick={handleLogout} className='logout__button'>Выйти</button>
    </div>
  );
};
