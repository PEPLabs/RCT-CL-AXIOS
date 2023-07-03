import React, { useEffect, useState } from 'react';
import { Article } from '../models/article';
import axios from 'axios';

interface IProps {
}

const AllArticlesComponent: React.FC<IProps> = (props: IProps) => {

    //Creating some state for the component
    /*HERE we have chosen the state's datatype to be "Article[]", using the diamond brackets. In src/model you can see two different interfaces that are being using to structure
        structure the data of this lab. */
    const [articles, setArticles] = useState<Article[]>([]);


    const newArticleEvent = () => {
        /*
            Like the Fetch API, Axios is a promised-based HTTP Client that allows us to send and receive HTTP requests and responses. Axios, however,
            add some features that make it easier to use for larger applications. For example, Axios adds build-in XSRF protection, request cancelling, and request timeouts.
            
            Below you can see the syntax for an axios request. ".get" is the type of HTTP method, so you can image other methods the axios object has access to. "<Article[]>" is
            the datatype for the response's JSON payload. In parenthesis we put the URL we are requesting resources from. ".then" is how we provide a callback function to add
            functionality after the response comes back; in this callback function we add ".data" to the argument in order to get the JSON payload.
        */
        //HERE is an example of an axios request.
        axios.get<Article[]>(`https://api.spaceflightnewsapi.net/v3/articles`)
            .then(response => { setArticles(response.data) });
    }

    /* HERE we are creating a sideeffect to call the axios request when the component mounts, but not when the component updates (this is why we put the empty array as a second parameter) */
    useEffect(newArticleEvent, []);



    return (
        <div className='section-container'>
            <h2>All Articles Component</h2>
            
            <p>Number of articles: {articles.length}</p>

            {/* HERE we are using the concept of lists and keys to display the array of articles. */}
            {articles.map((myArticle) => {
                return <div key={myArticle.id} className='bottom-gap' style={{textAlign: "left"}}>
                    <span>Id: {myArticle.id}  </span><a href={myArticle.url}>{myArticle.title}</a><span> - {myArticle.publishedAt}</span>
                    <br />
                    <img src={myArticle.imageUrl} style={{width: "15%"}}></img>
                    <span>{myArticle.summary}</span>
                </div>
            })}

        </div>
    );
}

export default AllArticlesComponent;