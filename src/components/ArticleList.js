import React from "react";
import Article from "./Article.js";

function cb(minutes){
    let cupsBoxes=""
    if (minutes < 30) { for(let i = 0; i< Math.ceil(minutes / 5); i++ ) {cupsBoxes += "☕️"} }
    else { for(let i = 0; i< Math.ceil(minutes / 10); i++ ) {cupsBoxes += "🍱"} }
    return cupsBoxes
}

function ArticleList(props) {
       let cupsBoxes
        let posted = props.posts.map(function(post) {
            cupsBoxes = cb(post.minutes)
        return <Article id={post.id} key={post.id} title={post.title} date={post.date} preview={post.preview} cupsBoxes={cupsBoxes}/>
        })
    return(
        <main>
            {posted}
        </main>
    )
}

export default ArticleList 

// a <main> element with the following components inside:
// an array of Article components (one component for each post passed down as a prop to ArticleList)
// make sure to assign a unique key prop to each Article