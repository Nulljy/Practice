import React, {Component} from 'react';
import style from './Customer.module.css'
import axios from 'axios';


class Customer extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         id:'',
    //         image:'',
    //         name:'',
    //         birthday:'',
    //         gender:'',
    //         job:'',
    //     }
    // }
    
    deleteCustomer(id){
        axios.patch('/api/deleteCustomer', {
            id: id,
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.error(err);
        });
        this.props.refresh();
    }


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
                                <td><button onClick={() => this.props.editCustomer(item)}>편집</button></td>
                                <td><button onClick={(e) => this.deleteCustomer(item.id)}>삭제</button></td>
                            </tr>
                    })
                }
            </tbody>
        )
    }
}

export default Customer;