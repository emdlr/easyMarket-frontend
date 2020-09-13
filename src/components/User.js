import React, {Component} from "react";
import "./User.css";
import Axios from "axios";

export default class User extends Component {
    constructor(){
        super();
        this.state ={
            userName:"",
            listNames:[],
            lists:[],
            isIndividual:false,
            individualList:[],
            indListName:""
        }
    }
    async componentDidMount() {
        const listsObj = await Axios.get(`${this.props.backendUrl}/users/profile/${this.props.match.params.id}`);
        let lNames =[]; 
        if(listsObj.data.user.Lists.length>0){
            for(let i=0;i<listsObj.data.user.Lists.length;i++)
            lNames.push(listsObj.data.user.Lists[i].listName)
        }
        this.setState({
            userName:listsObj.data.user.username,
            listNames:Array.from(new Set(lNames)),
            lists:listsObj.data.user.Lists
        });
        lNames=[];
    }
    getList = (e) =>{
        e.preventDefault();
        let userId=e.target.value;
        let listName= e.target.innerText;
        let indList = [];
        for(let i=0;i<this.state.lists.length;i++){
            if(this.state.lists[i].listName===listName)
               indList.push({id:this.state.lists[i].id,prodName:this.state.lists[i].Product.description,
                                                    prodPicture:this.state.lists[i].Product.picture,
                                                    cost:this.state.lists[i].cost,
                                                    isPicked:this.state.lists[i].pickedStatus,
                                                    quantity:this.state.lists[i].quantity,
                                                    unit:this.state.lists[i].Product.Unit.description});
        }
        this.setState({
            isIndividual:true,
            individualList:indList,
            indListName:listName
        })
        indList=[]
        
    }
    myLists = (e) => {
        e.preventDefault();
        this.setState({
            isIndividual:false
        })
    }
    updatePick = async (e) =>{
        e.preventDefault();
        let nextStatus= e.target.checked?true:false;
        let listId = e.target.name;
        const list = await Axios.put(`${this.props.backendUrl}/lists/${e.target.name}`,{newStatus:nextStatus});
        let indL = this.state.individualList;
        for(const prop in indL){
            if(indL[prop].id==listId){
             indL[prop].isPicked=nextStatus;
             break;
            }
        }
        let allLists =this.state.lists;
        for(const prop in allLists){
            if(allLists[prop].id==listId){
                 allLists[prop].pickedStatus=nextStatus;
                 break;
            }
        }
        this.setState({
            individualList:indL,
            lists:allLists
        })
        indL=[];
        allLists=[];
    }
    render(){
        if(!this.state.isIndividual){
            return(<div>
                <p>HELLO {`${this.state.userName.toUpperCase()}`}</p>
                <p>Your Lists:</p>
                <ul>
                    {this.state.listNames.map((list,key)=>{
                        return(<li key={key} value={this.props.match.params.id} onClick={this.getList}>{list}</li>);
                    })}
                </ul>
            </div>)
        }else{
            return(<div>
                <p>HELLO {`${this.state.userName.toUpperCase()}`}</p>
                <div onClick={this.myLists}>Back to my Lists</div>
            <p>List: {this.state.indListName}</p>
                <table>
                    <th>Picture</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Unit</th>
                    <th>Cost</th>
                    <th>Picked?</th>
                    {this.state.individualList.map((product,key)=>{
                        return(<tr key={key}>
                            <td><img src={product.prodPicture} className="pickImg"/></td>
                            <td>{product.prodName}</td>
                            <td>{product.quantity}</td>
                            <td>{product.unit}</td>
                            <td>${product.cost}</td>
                            <td><input type='checkbox' name={product.id} onClick={this.updatePick} checked={product.isPicked?true:false} /></td>
                        </tr>);
                    })}
                </table>
            </div>)
        }
    }
}