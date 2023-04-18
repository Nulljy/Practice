import React, {Component} from 'react';
import style from './Customer.module.css'
import haerin from '../public/haerin.jpg';


class Customer extends Component {

    render() {
        const data = [
            {
                id: 1,
                name: '하니',
                image: haerin,
                birthday: 20081122,
                gender: '여자',
                job: '학생'
            },
        ];

        return (
            <tbody>
                {data.map((item, i) => {
                    return <tr key={item.toString()} scope='row' className={style.container}>
                                <th scope='row' className='id'>{item.id}</th>
                                <td className={style.imagebox1}><img className={style.image} src={item.image} alt="profile"></img></td>
                                <td className='name'>{item.name}</td>
                                <td className='birthday'>{item.birthday}</td>
                                <td className='gender'>{item.gender}</td>
                                <td className='job'>{item.job}</td>
                                <td><button>편집</button></td>
                                <td><button>삭제</button></td>
                            </tr>
                    })
                }
            </tbody>
        )
    }
}

export default Customer;