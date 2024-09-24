import React , {useState,useEffect} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/esm/Button'

const TodoForm = () => {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [submitData,setSubmitData] = useState([])
    const [isEditing,setIsEditing] = useState(false)
    const [editId,setEditId] = useState(null)

    useEffect(()=> {
        axios.get('http://127.0.0.1:8000/api/todo_form/')
        .then(response => {
            setSubmitData(response.data)
            console.log("You got data successful")
        })
        .catch(error => {
            console.log("Data cannot getting : ",error)
        })
    },[])
    const update = (item) => {
        setTitle(item.title);
        setDescription(item.description);
        setIsEditing(true);
        setEditId(item.id);
    };
    const destroy = (id) => {
        
        axios.delete('http://127.0.0.1:8000/api/todo_form/delete/${id}/')
        .then(response => {
            setSubmitData(submitData.filter(item => item.id !== id));
        })
        .catch(error => {
            console.log("An error occurred while deleting:", error);
        });
    };
    const submitHandler = e => {
        e.preventDefault();
        
        if (isEditing) {
            console.log("The id is ",editId)
            axios.put('http://127.0.0.1:8000/api/todo_form/update/${editId}/', { title, description })
            .then(response => {
                const updatedTodos = submitData.map(todo => 
                    todo.id === editId ? response.data : todo
                );
                setSubmitData(updatedTodos);
                setIsEditing(false);
                setEditId(null);
                setTitle('');
                setDescription('');
            })
            .catch(error => {
                console.log("An error occurred while editing:", error);
            });
        } else {
            axios.post('http://localhost:8000/api/todo_form/', { title, description })
            .then(response => {
                setSubmitData([...submitData, response.data]);
                setTitle('');
                setDescription('');
            })
            .catch(error => {
                console.log("An error occurred while submitting work:", error);
            });
        }
    };
  return (
    <>
    <form onSubmit={submitHandler}>
        <table cellPadding={10}>
            <thead>
                <tr>
                    <td><label>Enter Title :</label></td>
                    <td><input type='text' name='title' value={title} placeholder='enter title' onChange={(e) => (setTitle(e.target.value))} required/></td>
                </tr>
                <tr>
                    <td><label>Enter Description :</label></td>
                    <td><textarea name='description' value={description} placeholder='enter description' onChange={(e) => (setDescription(e.target.value))} required/></td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <Button type='submit' variant='primary'>{editId ? 'Update' : 'Add'}</Button>
                    </td>
                </tr>
            </thead>
        </table>
    </form>
    {
        submitData.length > 0 &&
            <div>
                <h3>Todo List</h3>
                <table cellPadding={15}>
                    <thead>
                        <tr>
                            <th>Sno</th><th>Title</th><th>Edit</th><th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submitData.map((item,index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td><Button variant='success' onClick={()=> update(item)}>Edit</Button></td>
                                <td><Button variant='danger'onClick={() => destroy(item.id)}>Delete</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    }
    </>
  )
}
export default TodoForm