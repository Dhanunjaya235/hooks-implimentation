import React, { FC, useRef, useState } from 'react';
import './useStateHook.css';

interface UseStateHookProps { }

class Employee {
  public name: string;
  public id: number
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id
  }
}

const UseStateHook: FC<UseStateHookProps> = () => {
    const[employee,setEmployee]=useState(new Employee("Dhanunjay",205));
    const nameRef=useRef<HTMLInputElement>(null);
    const idRef=useRef<HTMLInputElement>(null);
    const changeEmployee=(e)=>{
      e.preventDefault();
      setEmployee(prevEmployee=>{
        console.log(prevEmployee);
        let name:string=nameRef.current?.value!
        let id:number=+idRef.current?.value! 
        let newEmployee=new Employee(name,id)
        return newEmployee
      }
        
      )
    }
  return (
    <div>
          <form onSubmit={changeEmployee}>
          <input type="text" name='name' placeholder='Enter Employee Name' ref={nameRef}></input>
          <input type="number" name='id' placeholder='Enter Employee Id' ref={idRef}></input>
          <button type='submit'>ChangeEmployee</button>
          </form>

          <p>The EmployeeLogged in is {employee.name} with id {employee.id}</p>
    </div>
  )
}

export default UseStateHook;
