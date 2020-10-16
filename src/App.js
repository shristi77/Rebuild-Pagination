import React, { useState } from "react";
import Pagination from './Pagination/Pagination'
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { rollno: "1", name: "M.S. Dhoni", emailId: "dhoni@gmail.com" },
    { rollno: "2", name: "Virat kolhi", emailId: "dhoni@gmail.com" },
    { rollno: "3", name: "Sachin tendulkar", emailId: "dhoni@gmail.com" },
    { rollno: "4", name: "Ram verma", emailId: "dhoni@gmail.com" },
    { rollno: "5", name: "Shyam sharma", emailId: "dhoni@gmail.com" },
    { rollno: "6", name: "Sita chaudhary", emailId: "dhoni@gmail.com" },
    { rollno: "7", name: "Geeta Dhoni", emailId: "dhoni@gmail.com" },
    { rollno: "8", name: "Meeta Dhoni", emailId: "dhoni@gmail.com" },
    { rollno: "9", name: "Max Verma", emailId: "dhoni@gmail.com" },
    { rollno: "10", name: "Manu Sharma", emailId: "dhoni@gmail.com" },
    { rollno: "11", name: "M.S. Dhoni", emailId: "dhoni@gmail.com" },
    { rollno: "12", name: "Virat kolhi", emailId: "dhoni@gmail.com" },
    { rollno: "13", name: "Sachin tendulkar", emailId: "dhoni@gmail.com" },
    { rollno: "14", name: "Ram verma", emailId: "dhoni@gmail.com" },
    { rollno: "15", name: "Shyam sharma", emailId: "dhoni@gmail.com" },
    { rollno: "16", name: "Sita chaudhary", emailId: "dhoni@gmail.com" },
    { rollno: "17", name: "Geeta Dhoni", emailId: "dhoni@gmail.com" },
    { rollno: "18", name: "Meeta Dhoni", emailId: "dhoni@gmail.com" },
    { rollno: "19", name: "Max Verma", emailId: "dhoni@gmail.com" },
    { rollno: "20", name: "Manu Sharma", emailId: "dhoni@gmail.com" },
    { rollno: "21", name: "M.S. Dhoni", emailId: "dhoni@gmail.com" },
    { rollno: "22", name: "Virat kolhi", emailId: "dhoni@gmail.com" },
    { rollno: "23", name: "Sachin tendulkar", emailId: "dhoni@gmail.com" },
    { rollno: "24", name: "Ram verma", emailId: "dhoni@gmail.com" },
    { rollno: "25", name: "Shyam sharma", emailId: "dhoni@gmail.com" },
    { rollno: "26", name: "Sita chaudhary", emailId: "dhoni@gmail.com" },
    { rollno: "27", name: "Geeta Dhoni", emailId: "dhoni@gmail.com" },
    { rollno: "28", name: "Meeta Dhoni", emailId: "dhoni@gmail.com" },
    { rollno: "29", name: "Max Verma", emailId: "dhoni@gmail.com" },
    { rollno: "30", name: "Manu Sharma", emailId: "dhoni@gmail.com" },
  ]);
  const [pageSize, setPageSize] = useState(5);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  
  const onPaginationChange = (start ,end, pageSize) => {
    setStart(start);
    setEnd(end);
    setPageSize(pageSize);
  }

  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <th>Roll No.</th>
            <th>Name</th>
            <th>Email Id</th>
          </tr>
          {
            students.slice(start, end).map((student) => (
              <tr key={student.rollno}>
                <td><div>start: {start}, end: {end}, pageSize: {pageSize} </div></td>
                <td>{student.rollno}</td>
                <td>{student.name}</td>
                <td>{student.emailId}</td>
              </tr>
          ))}
        </tbody>
      </table>
      <Pagination 
        pageSize={pageSize} 
        students={students} 
        onPaginationChange={onPaginationChange}
        />
    </div>
  );
}

export default App;
