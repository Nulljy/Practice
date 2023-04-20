import React, {Component} from 'react';
import style from './Customer.module.css'


class Customer extends Component {
    render() {
        const {customers} = this.props;
        return (
            <tbody>
                {customers.map((item, i) => {
                    return <tr key={item.toString()} scope='row' className={style.container}>
                                <th scope='row' className='id'>{item.id}</th>
                                <td className={style.imgTd}>
                                    <div className={style.imagebox1}>
                                        <img className={style.image} src={item.image} alt="profile">
                                        </img>
                                    </div>
                                </td>
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