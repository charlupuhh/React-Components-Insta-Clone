/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import Search from './components/SearchBar/SearchBarContainer';
import PostPage from './components/PostsContainer/PostsPage'
import CommentSection from './components/CommentSection/CommentSectionContainer'
import dummyData from "./dummy-data";


const App = () => {

  return (
    <div className="App">
      <Search />
      <PostPage />
    </div>
  );
};

export default App;
