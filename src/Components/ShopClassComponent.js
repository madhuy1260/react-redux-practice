import React, { Component } from 'react'
// import {useState} from 'react'
import {connect } from 'react-redux'
import './Shop.css'
import { buyLaptop, buyMobile,fetching } from '../Redux/actions/actions'
// import { useSelector } from 'react-redux'



class ShopClassComponent extends Component {
    // const [count,setCount] = useState(100)

    // const buyLaptop=()=>{
    //     setCount(count-1)
    // }
   render(){
  return (
    <div >
        <h1>Welcome to React-Redux Practice Program : ClassComponent</h1>
        <div className='main'>
        <div className='container'>
            <p>Dell  Inspiron</p>
            <p>No of Laptops : {this.props.numOfLaptops}</p>
            <button onClick={this.props.buyLaptop}>Buy Now</button>
        </div>
        <div className='container'>
             <p>Redmi Note 7 Pro </p>
            <p>No of Mobiles : {this.props.numOfMobiles}</p>
            <button onClick={this.props.buyMobile}>Buy Now</button>
        </div>
        <div className='container'>
             <p>Fetching Data in Redux Environment</p>
            <p>Length of the Fetched Data : {this.props.users.length}</p>
            <button onClick={this.props.fetching}>Call API in Redux</button>
        </div>
        </div>
        
    </div>
  )}
}
const mapStateToProps = (state) =>{
    return {
        // numOfLaptops:state.numOfLaptops
        numOfLaptops:state.laptops.numOfLaptops,
        numOfMobiles:state.mobiles.numOfMobiles,
        users : state.users.data
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        buyLaptop: ()=>dispatch(buyLaptop()),
        buyMobile: () =>dispatch(buyMobile()),
        fetching : () => dispatch(fetching())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShopClassComponent)