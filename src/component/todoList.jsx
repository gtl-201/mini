// import Cookies from 'js-cookie';
import {  useState } from 'react';


const TodoList = (props) => {
    // console.log('========================',props.dataFromProps)
    const [filterIs, setFilterIs] = useState('all');

    const filter = (value) => {
        setFilterIs(value);
    }

    const ListTodo = () => {
        const todo = props.dataFromProps.length !== 0 ? props.dataFromProps.filter((rs)=>rs.status === 'todo') : null;
        const done = props.dataFromProps.length !== 0 ? props.dataFromProps.filter((rs)=>rs.status !== 'todo') : null;
        console.log('========================',props.dataFromProps)
        return(
            <div>
            {(filterIs === 'all' || filterIs === 'todo') && todo !== null && todo.map((rs)=><div onClick={()=>props.onChangeStatus(rs.id)} style={{color: 'black', fontSize: 18}}>🌸 {rs.value}</div>)}
            {(filterIs === 'all' || filterIs === 'done') && done !== null && done.map((rs)=><div onClick={()=>props.onDelete(rs.id)} style={{textDecoration: 'line-through', color: 'red', fontSize: 18}}>🌹 {rs.value}</div>)}
            </div>
        )
    }
    return(
          <div class='' style={{ width: '500px', height: 'auto', backgroundColor: 'whitesmoke', borderRadius: 10, padding: 20}}>
            <h2 className='text-center' style={{fontSize: 20, fontWeight: 700, width: '100%', paddingBottom: 10}}>TODO LIST</h2>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <input type="text" name="toto" style={{height: '35px', width: 350}} id="todo" />
                <button
                    onClick={()=>{
                        props.onAdd(document.getElementById('todo'));
                        document.getElementById('todo').value='';
                    }}
                    class="btn btn-dark" style={{height: '35px', display: 'flex', justifyContent: 'center', marginLeft: 5}}>add</button>
            </div>

            <div style={{paddingRight: 10, paddingLeft: 10, marginTop: 10}}>
                <ListTodo />
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <button onClick={()=>filter('all')} class={filterIs === 'all' ? "btn btn-primary mt-4 text-center" : "btn btn-secondary mt-4 text-center" } style={{height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 4}}>All List</button>
                <button onClick={()=>filter('todo')} class={filterIs === 'todo' ? "btn btn-warning mt-4 text-center" : "btn btn-secondary mt-4 text-center" } style={{height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 4}}>Todo</button>
                <button onClick={()=>filter('done')} class={filterIs === 'done' ? "btn btn-success mt-4 text-center" : "btn btn-secondary mt-4 text-center" } style={{height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 4}}>Done</button>
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <button onClick={()=>props.onClear()} class="btn btn-danger mt-4 text-center" style={{height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 4}}>Clear</button>
            </div>
          </div>
    );
    
}

export default TodoList;