import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [rs, setRes] = useState('');
  let promise = new Promise((resolve, reject) => {
    if (rs == '') {
      reject('Result is empty');
    } else {
      resolve('Result is resolved');
    }
  });
  let promise1 = new Promise((resolve, reject) => {
    let nam = 'rs';
    if (nam == 'rs') {
      reject('Result is empty');
    } else {
      resolve('Result is resolved');
    }
  });
  let promise2 = new Promise((resolve, reject) => {
    let name = 'get';
    if (name == '') {
      reject('Result is empty');
    } else {
      resolve('Result is resolved');
    }
  });
  let temp = [promise, promise1, promise2];
  const tem = temp.map((pro) => {
    return pro.catch((e) => e);
  });

  useEffect(() => {
    console.log(temp);
    Promise.all(tem)
      .then((res) => console.log(res))
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
