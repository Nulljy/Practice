import style from './App.module.css';
import Customer from './components/Customer';
import Navbar from './components/Navbar'
import TableHead from './components/TableHead'
import haerin from './public/haerin.jpg';

function App() {
  const user = [
    {
    id: '1',
    image: haerin,
    name: '강해린',
    birthday: 20081122,
    job: '아이돌',
    gender: '여자'
    },
    {
      id: '2',
      image: haerin,
      name: '하니',
      birthday: 20081122,
      job: '아이돌',
      gender: '여자'
    }
];

  return (
    <div className={style.app}>
      <div className={style.Navbox}>
        <Navbar/>
      </div>
      <div className={style.blank}></div>
      <div className={style.Customerbox}>
        <table className={style.table}>
          <TableHead/>
          <Customer />
        </table>
      </div>
      <div className={style.blank2}></div>
      <div className={style.footer}></div>
    </div>
  );
}
// {user.map(v => {
//   return <Customer 
//     id={v.id}
//     image={v.image}
//     name={v.name}
//     birthday={v.birthday}
//     gender={v.gender}
//     job={v.job}
//   />
// })}

export default App;
