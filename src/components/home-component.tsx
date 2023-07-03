import React from 'react';

interface IProps {
}

const HomeComponent: React.FC<IProps> = (props: IProps) => {

    return (
        <>
            <h2>Home Component</h2>

            <p>Inevitably, fully featured web applications will want to send HTTP requests to a server to get data and resources. In this lab we'll be using a technology called "axios". Like the Fetch API, Axios is a promised-based HTTP Client that allows us to send and receive HTTP requests and responses. Axios, however,
            add some features that make it easier to use for larger applications. For example, Axios adds build-in XSRF protection, request cancelling, and request timeouts.</p>

            <p>Instead of creating our own custom server, we'll be using the Space blog AP to retrieve real-time space facts from an external API.</p>

            <div className="todo-container">

                <p>The "all articles" component is already already working & complete. You have two tasks ahead of you:</p>
                <p>First, you must write a valid get request using Axios in the "all-reports" component, which will create a working all-reports page</p>
                <p>Second, you must write a valid get request using Axios in the "report-by-id" component, which will create a working search-report-by-id page</p>
            </div>
        </>
    );
}

export default HomeComponent;