import react, {Component} from 'react';
import style from './App.module.css';
import Customer from './components/Customer';
import Navbar from './components/Navbar'
import TableHead from './components/TableHead'
import Modal from './components/Modal'


class App extends Component{
  constructor(prop) {
    super(prop);
    this.state = {
      customers:"",
      open: false,
    }
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({customers: res}))
  }
  
  callApi = async () => {
    console.log('리로드');
    const response = await fetch("/api/customers");
    const body = await response.json();
    return body;
  }

  clickOpenModal = () => {
    console.log('클릭');
    this.setState({open: true});
  }
  closeModal = () => {
    this.setState({open: false});
  }

  render() {
    return (
      <div className={style.app}>
        <div className={style.Navbox}>
          <Navbar openModal={this.clickOpenModal}/>
        </div>
        {this.state.open ? <Modal closeModal={this.closeModal} clickAdd = {this.callApi}/> : ""}
        <div className={style.blank}></div>
        <div className={style.Customerbox}>
          <table className={style.table}>
            <TableHead/>
            {this.state.customers ? <Customer customers={this.state.customers}/> : ""}
          </table>
        </div>
        <div className={style.blank2}></div>
        <div className={style.footer}></div>
      </div>
    );
  }
}

export default App;
