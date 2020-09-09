import React,{useState,useEffect} from 'react';
import {useHistory ,useParams} from 'react-router-dom'
import axios from 'axios'

const EditUsers = () => {
    let history = useHistory();
    const {id} = useParams();
 
    const [user ,setUser] = useState({
        name:'',
        username:'',
        email:'',
        phone:'',
        website:''
    });
    const {name,username,email,phone,website} = user;
    const onInputChangr = e =>{
        setUser({...user,[e.target.name]: e.target.value});
    }
    const onSubmit = async e=>{
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`,user);
        history.push('/');

    } 
    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    }
    useEffect(() => {
        loadUser();
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8 offset-2">
                    <h1>Edit User</h1>
                    <form onSubmit={e =>onSubmit(e)}>
                        <div className="form-group">
                            <label >Name</label>
                            <input type="text" name="name" value={name} onChange={e =>onInputChangr(e)} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" name="username" value={username} onChange={e =>onInputChangr(e)} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" value={email} onChange={e =>onInputChangr(e)} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="text" name="phone" value={phone} onChange={e =>onInputChangr(e)} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Website</label>
                            <input type="text" name="website" value={website} onChange={e =>onInputChangr(e)} className="form-control" />
                        </div>

                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditUsers;