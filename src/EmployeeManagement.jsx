import React, { useState } from "react";
import "./EmployeeManagement.css";


const initialEmployees = [
  {
    id: "Emp005",
    name: "sudhakar",
    email: "sudhasri321@gmail.com",
    phone: "+919491919112",
    designation: "Software Engineer",
    joiningDate: "16/06/2025",
    status: "Active",
  },
  {
    id: "EMP001",
    name: "Aarav Sharma",
    email: "aarav.sharma@company.com",
    phone: "+91-9876543210",
    designation: "Software Engineer",
    joiningDate: "15/01/2023",
    status: "Active",
  },
];

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});

  // ✅ Handle Delete
  function handleDelete(id) {  //employ id pass 
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      const updatedEmployees = employees.filter((ele) => {
        console.log("object data==>", ele)
        if (ele.id != id) {
          return ele
        }
      });
      setEmployees(updatedEmployees);
    }
  }



  // ✅ Handle Edit Click
  function handleEdit(employee) {
    setEditingId(employee.id);
    setFormData(employee);
  }

  // ✅ Handle Input Change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // ✅ Handle Save
  function handleSave(id) {
    const updatedEmployees = employees.map((emp) =>
      emp.id === id ? formData : emp
    );
    setEmployees(updatedEmployees);
    setEditingId(null);
  }

  return (
    <div>
      <h1>EMPLOYEE MANAGEMENT</h1>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>EMPLOYEE ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE NUMBER</th>
            <th>DESIGNATION</th>
            <th>JOINING DATE</th>
            <th>STATUS</th>
            <th>ACTIONs</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>
                {editingId === employee.id ? (
                  <input name="name" value={formData.name} onChange={handleChange} />
                ) : (
                  employee.name
                )}
              </td>
              <td>
                {editingId === employee.id ? (
                  <input name="email" value={formData.email} onChange={handleChange} />
                ) : (
                  employee.email
                )}
              </td>
              <td>
                {editingId === employee.id ? (
                  <input name="phone" value={formData.phone} onChange={handleChange} />
                ) : (
                  employee.phone
                )}
              </td>
              <td>
                {editingId === employee.id ? (
                  <input name="designation" value={formData.designation} onChange={handleChange} />
                ) : (
                  employee.designation
                )}
              </td>
              <td>{employee.joiningDate}</td>
              <td>{employee.status}</td>
              <td>
                {editingId === employee.id ? (
                  <>
                    <button onClick={() => handleSave(employee.id)}>Save</button>
                    <button onClick={() => setEditingId(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(employee)}>Edit</button>
                    <button onClick={() => handleDelete(employee.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeManagement;
