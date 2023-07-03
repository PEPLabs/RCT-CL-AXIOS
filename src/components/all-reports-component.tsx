import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Report } from '../models/report';

interface IProps {
}

const AllReportsComponent: React.FC<IProps> = (props: IProps) => {

    //Creating some state for the component
    /*HERE we have chosen the state's datatype to be "Report[]", using the diamond brackets. In src/model you can see two different interfaces that are being using to structure
        structure the data of this lab. */
    const [reports, setReports] = useState<Report[]>([]);


    const newReportEvent = () => {
        /* TODO: write a valid axios get request that receives an array of Report objects. Set the "reports" variables equal to the response JSON.
        
        The url will be "https://api.spaceflightnewsapi.net/v3/reports". */
        //CODE HERE
    }


    /* HERE we are creating a sideeffect to call the axios request when the component mounts, but not when the component updates (this is why we put the empty array as a second parameter) */
    useEffect(newReportEvent, []);

    return (
        <div className='section-container'>
            <h2>Space Reports</h2>

            <div className="todo-container">

                {/* HERE we are using the concept of lists and keys to display the array of reports. */}
                {reports.map((myReport) => {
                    return <div key={myReport.id} className='bottom-gap' style={{ textAlign: "left" }}>
                        <span>Id: {myReport.id}  </span><a href={myReport.url}>{myReport.title}</a><span> - {myReport.publishedAt}</span>
                        <br />
                        <img src={myReport.imageUrl} style={{ width: "15%" }}></img>
                        <span>{myReport.summary}</span>
                    </div>
                })}
            </div>
        </div>
    );
}

export default AllReportsComponent;