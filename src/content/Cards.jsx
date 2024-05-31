import React from 'react';
import { Button } from 'react-bootstrap';

function Cards({ data, setData, handleEdit }) {

  const handleStatusChange = (index, status) => {
    const newData = [...data];
    newData[index].Status = status;
    setData(newData);
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div className="d-flex flex-wrap justify-content" style={{ marginLeft :"10px", paddingLeft : "125px"}}>
      {data.map((task, index) => (
        <div className="card m-3" key={index} style={{backgroundColor: "lightgreen", width: "400px", borderRadius: "10px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
          <div className="card-body p-3">
            <h5 className="card-title">Name: {task.Name}</h5>
            <p className="card-text">Description: {task.Description}</p>
            <div className="mb-3">
              <label htmlFor={`status-${index}`} className="form-label">Status:</label>
              <select style={{ backgroundColor: task.Status === "Not Completed" ? "red" : "green", color: "white" }} id={`status-${index}`} className="form-select" value={task.Status} onChange={(event) => handleStatusChange(index, event.target.value)}>
                <option style={{ backgroundColor: "red"}} value="Not Completed">Not Completed</option>
                <option style={{ backgroundColor: "green"}}value="Completed">Completed</option>
              </select>
            </div>
            <div className="d-flex justify-content-end mt-3 gap-2">
              <Button className="btn btn-success" onClick={() => handleEdit(index)}>Edit</Button>
              <Button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
