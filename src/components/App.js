import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js"
import About from "./About.js";
import ArticleList from "./ArticleList.js";

console.log(blogData);

function App() {
  let posts=[
    {date: "December 15, 2020",
    id: 1,
    minutes: 5,
    preview: "Setting up the building blocks of your site",
    title: "Components 101"},
    {date: "December 11, 2020",
    id: 2,
    minutes: 15,
    preview: "Passing props is never passé",
    title: "React Data Flow"},
    {id: 3,
    minutes: 47,
    preview: "React, meet OOJS.",
    title: "Function vs Class Components"}
    ]

  return (
    <div className="App">
      <Header name="Underreacted" />
      <About image="/static/media/logo.6ce24c58.svg" about="A blog about learning React" />
      <ArticleList posts={posts}/>
    </div>
  );
}

export default App;
