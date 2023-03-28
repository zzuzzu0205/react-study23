import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import io from "socket.io-client";
import { Routes, Route, Link } from "react-router-dom";
import { getCookie } from "./cookie";

function App() {
  const [mode, setMode] = useState("welcome");
  const [id, setId] = useState(null);
  let content = null;
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "js", body: "js is ..." },
  ];
  if (mode === "welcome") {
    content = <Article title="welcome" body="hello world" />;
  } else if (mode === "read") {
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        content = <Article title={topics[i].title} body={topics[i].body} />;
      }
    }
  }

  return (
    <div>
      <Head
        title="WEB"
        onChangeMode={() => {
          setMode("welcome");
        }}
      />
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          setMode("read");
          setId(id);
        }}
      />
      {content}
    </div>
  );
}
function Head(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={"/read/" + t.id}
          onClick={(e) => {
            e.preventDefault();
            props.onChangeMode(Number(e.target.id));
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

export default App;
