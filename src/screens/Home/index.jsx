import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import TodoList from '../../component/todoList';

const Home = () => {
    useEffect(() => {
        const jwt = Cookies.get('token');
        console.log(jwt)
        if (jwt === undefined) {
            window.location.href = '/login'
        }
    }, []);
    const [dataTodoList, setDataTodoList] = useState([])
    const changeStatus = (id) => {
        let tmp = dataTodoList;
        tmp[id].status = 'done';
            console.log(tmp);
        setTimeout(() => {
            setDataTodoList([]);
            setDataTodoList(tmp);      
        }, 10);
    }

    const addToDoList = (data) => {
        setDataTodoList([...dataTodoList,{id: dataTodoList.length, value: data.value, status: 'todo'}]);
    }

    const clearTodo = () => {
        setDataTodoList([]);
    }

    const deleteTd = (index) => {
        let tmp = dataTodoList;
        tmp.splice(index);
            console.log(tmp);
        setTimeout(() => {
            setDataTodoList([]);
            setDataTodoList(tmp);      
        }, 10);
    } 

    console.log('??')
    return(
        <div class='bg-dark mt--6 pt-0' style={{widh: '100vw', height: '94vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <TodoList
                dataFromProps = {dataTodoList}
                onChangeStatus = {(id)=>changeStatus(id)}
                onAdd = {(data)=>addToDoList(data)}
                onClear = {()=>clearTodo()}
                onDelete = {(index)=>deleteTd(index)}
            />
        </div>
    );
    
}

export default Home;