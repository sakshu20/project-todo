import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Task from './pages/Task'

export default function App() {
  return<>
<ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/task">Task</Link></li>
</ul>

 <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/task' element={<Task/>} />
  <Route path='*' element={<h1>Page Not Found</h1>} />
 </Routes>
  </>
}
