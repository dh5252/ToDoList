import logo from './logo.svg';
import './App.css';
import {useState} from 'react'


function Header(props){
  return <header className="title">
    <h1>{props.title}</h1>
  </header>
}

function Home(props){

  return <a href="/" id="createBtn" onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}>Add work!</a>
}

function Add(props){

  return <form onSubmit={event=>{
    event.preventDefault();
    const _work = event.target.workName.value;
    const _date = event.target.dDay.value;
    props.onAdd(_work,_date);
  }}>
    <p><textarea type="text" name="workName" placeholder='할 일을 입력해주세요'></textarea></p>
    <p><input type="date" name="dDay"></input></p>
    <p><input type="submit" value="완료"></input></p>
  </form>
}

function CalcDday(props){
  const today = new Date();
  const dDay = new Date(props.date);

  let gap = dDay.getTime() - today.getTime();

  let result = Math.ceil(gap/(1000*60*60*24));
  
  return <strong> D-{result}</strong>
}

function CheckList(props){

  return <>
    <label>
      <input type="checkbox" onClick={(event)=>{
        event.preventDefault();
        props.onCheck(props.listItem.id);
      }}></input>
      {props.listItem.work}<CalcDday date={props.listItem.date}></CalcDday></label></>
}

function ListSection(props){
  let lis = [];

  
  for(let i = 0;i<props.toDoList.length;i++){
    lis.push(<li key={props.toDoList[i].id} className=
      'cl'>
      <CheckList listItem={props.toDoList[i]} onCheck={(id)=>{
        props.onCheck(id);
      }}></CheckList>
      </li>)
  }

  

  return <ul>
    {lis}
  </ul>
}

function App() {  

  const [mode,setMode] = useState("HOME");
  const [toDoList,setToDoList] = useState([]);
  const [nextId,setNextId] = useState(1);

  let controlItem = null;
  

  if (mode === "HOME"){
    controlItem = <Home onChangeMode={()=>{
      setMode("Add");
    }}></Home>;
  }
  else if (mode==="Add"){
    controlItem = <Add onAdd={(work,date)=>{
      let newListItem = {"id" : nextId, "work" : work, "date" : date};
      let newList = [...toDoList];

      
      newList.push(newListItem);
      setToDoList(newList);
      
      setNextId(nextId+1);
      setMode("HOME");
      
    }}></Add>
  }

  return (
    <div id="gridContainer">
      <div id="listContainer">
        <ListSection toDoList={toDoList} onCheck={(id)=>{

          let newList = [];
          for(let i=0;i<toDoList.length;i++){
            if(id !== toDoList[i].id){
              newList.push(toDoList[i]);
            }
          }

          setToDoList(newList);
          setMode("HOME");

        }}></ListSection>
      </div>
      <div>
        <div id="titleContainer">
          <Header title="To Do List"></Header>
        </div>
        <div id="controlContainer">
          {controlItem}
        </div>
      </div>
    </div>
  );
}

export default App;
