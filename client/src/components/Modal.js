import React, {Component} from 'react';
import style from './Modal.module.css';
import axios from 'axios';


class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            fileName:'',
            userName: '',
            birthday: '',
            gender: '',
            job: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.addCustomer()
            .then(res => {
                console.log(res.data);
            })
        this.props.clickAdd();
        window.location.reload();
    }
    addCustomer = () => {
        let formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('userName', this.state.userName);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        const url = "/api/customers";
        const config = {
            headers: {"Content-Type": "multipart/form-data"},
        }
        return axios.post(url, formData, config);

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    render() {
        return (
            <div className={style.container}>
                <form className={style.modalContent} onSubmit={this.handleSubmit}>
                    <label>
                        회원 추가하기
                    </label>
                    <input type='file'
                        file={this.state.file}
                        accept='image/jpg, image/png, image/jpeg, image/gif'
                        name="file"
                        value={this.state.fileName}
                        onChange={this.handleFileChange}
                    ></input>
                    <input type='text' placeholder='이름' value={this.state.userName} name='userName' onChange={this.handleChange}>
                    </input>
                    <input type='text' placeholder='생일' value={this.state.birthday} name='birthday' onChange={this.handleChange}>
                    </input>
                    <input type='text' placeholder='성별' value={this.state.gender} name='gender' onChange={this.handleChange}>
                    </input>
                    <input type='text' placeholder='직업' value={this.state.job} name='job' onChange={this.handleChange}>
                    </input>
                    <button className={style.add} type='submit'>
                        추가하기
                    </button>
                    <button className={style.close} onClick={this.props.closeModal}>
                        닫기
                    </button>
                </form>
            </div>
        )
    }
}

export default Modal;