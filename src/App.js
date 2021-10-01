import "tailwindcss/tailwind.css";
import React, { useState, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import axios from "axios";
import qs from "qs";

function App() {
  useEffect(() => {
    let data = qs.stringify({
      email: "kiomgps@gmail.com",
      password: "123456",
    });
    let config = {
      method: "post",
      url: "http://dadhwal.in:8082/api/session",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <p>Hello</p>
    </div>
  );
}

export default App;
