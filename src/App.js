// // import logo from './logo.svg'
// // import './App.css';
// // import HelloWorld from './HelloWorld';

// // function App() {
// //   return (
// //     <div>
// //       <HelloWorld />
// //     </div>
// //   );
// // }

// // export default App;
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // import LoginForm from './components/LoginForm';
// // import Register from './components/Register';
// // import Dashboard  from './components/Dashboard';
// // import UserForm from './components/UserForm';
// // import AdminLoginPage from './components/AdminLoginPage';
// import TodoForm from './components/TodoForm';
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//       {/* <Route path="/" element={ <HelloWorld/>}/> */}
//         {/* <Route path="/" element={<Register/>} />
//         <Route path="/loginForm" element={<LoginForm />} />
//         <Route path="/Dashboard" element={<Dashboard/>} /> */}
//         {/* <Route path="/" element={ <AdminLoginPage/>} />
//         <Route path="/data" element={<UserForm/>}/> */}
//         <Route path="/" element={<TodoForm/>}/>
        
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import TodoList from './components/TodoList';
// import TodoForm from './components/TodoForm';

// const App = () => {
//     const [editingTodo, setEditingTodo] = useState(null);

//     const handleSave = () => {
//         setEditingTodo(null);
//     };

//     return (
//         <div>
//             <h1>Todo List</h1>
//             <TodoForm todoToEdit={editingTodo} onSave={handleSave} />
//             <TodoList onEdit={setEditingTodo} />
//         </div>
//     );
// };

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Register from './components/Register';
// import Login from './components/LoginForm';

// import Dashboard  from './components/Dashboard';
// import UserForm from './components/UserForm';
// import AdminLoginPage from './components/AdminLoginPage';


import AdminRegistrationForm from './productTask/AdminRegistration'
import UserRegistrationForm from './productTask/UserRegistration'
import UserLoginPage from './productTask/Loginpage.js';
import VerifyOTP from './productTask/VerifyOTP.js';
import Admin_dashboard from './productTask/Admindashboard.js';
import User from './productTask/Userdashboard.js';


// import RegisterUser from './Student/registerUser';
// import User_Login  from './Student/UserLogin';
// import Admin_Login from './Student/AdminLogin';
// import Admindashboard from './Student/Dashboard_Admin';
// import Userdashboard from './Student/Dashboard_User.jsx';
// import Usersapp from './Student/UsersApproval.jsx';





function App() {
  return (
    <BrowserRouter>
      
      <Routes>
      {/*<Route path="/" element={<Register/>} />
       <Route path="/login" element={<LoginForm />} /> */}
     

        {/* <Route path="/" element={<Register/>} /> */}
        {/* <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/Dashboard" element={<Dashboard/>} />  */}
       {/* <Route path="/" element={ <AdminLoginPage/>} />
        <Route path="/data" element={<UserForm/>}/> */}
        
       <Route path='/' element={<AdminRegistrationForm/>}/>
       <Route path='/user' element={<UserRegistrationForm/>}/>
       <Route path='/login' element={<UserLoginPage/>}/>
       <Route path='/verify' element={<VerifyOTP/>}/>
       <Route path='/admin_dashboard' element={<Admin_dashboard/>}/>
       <Route path='/user_dashboard' element={<User/>}/> 
       <Route path='/' element={<UserRegistrationForm/>}/>
      

{/* 
       <Route path='/' element={<RegisterUser/>}/>
          <Route path="/user-login" element={<User_Login />} />
          <Route path="/admin-login" element={<Admin_Login />} />
          <Route path='/user-dashboard' element={<Userdashboard/>}/>
          <Route path='/admin-dashboard' element={<Admindashboard/>}/>
          <Route path='/user-approval' element={<Usersapp/>}/> */}


      </Routes>

       
    </BrowserRouter>
  );
}

export default App;