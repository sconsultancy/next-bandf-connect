"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.1.33:8000")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(jokes);
  return (
    <div>
      <div>
        <h1>Hello</h1>
        <h2>Jokes are {jokes.length}</h2>
        {jokes.map((e: any, i) => {
          if (e) {
            return <div key={i}>{e.content}</div>;
          }
        })}
      </div>
    </div>
  );
}
