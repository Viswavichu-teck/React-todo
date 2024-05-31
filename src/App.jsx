// App.jsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Creater from './content/Creater';
import Cards from './content/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './content/Filter';

function App() {
  const [data, setData] = useState([
    {
      id :1,
      Name: "Office Task 1",
      Description: "This is the description for my first task",
      Status: "Not Completed"
    },
    {
      id :2,
      Name: "Office Task 2",
      Description: "This is the description for my second task",
      Status: "Not Completed"
    },
    {
      id :3,
      Name: "Office Task 3",
      Description: "This is the description for my third task",
      Status: "Not Completed"
    },
  ]);

  const [filter, setFilter] = useState("All");
  const [editedTodo, setEditedTodo] = useState(null);

  const filteredData = data.filter(task => {
    if (filter === "All") return true;
    return task.Status === filter;
  });

  const handleEdit = (index) => {
    const editedTodo = data[index];
    setEditedTodo(editedTodo);
  };

  return (
    <>
      <Creater setData={setData} editedTodo={editedTodo} />
      <Filter setFilter={setFilter} />
      <Cards data={filteredData} setData={setData} handleEdit={handleEdit} />
    </>
  );
}

export default App;
