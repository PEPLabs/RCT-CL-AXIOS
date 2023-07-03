import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import { Report } from '../models/report';

interface IProps {
}

const ReportByIdComponent: React.FC<IProps> = (props: IProps) => {


    //Creating some state for the component
    const initialReport: Report = { id: 0, imageUrl: '', publishedAt: '', summary: '', title: '', url: '' };
    const [report, setReport] = useState(initialReport);
    const [reportId, setReportId] = useState("");

    const searchFunction = (synthEvent: ChangeEvent<HTMLInputElement>) => {
        setReportId(synthEvent.target.value);
    }



    const newReportEvent = () => {
        if (isNaN(parseInt(reportId))) {
            setReport(initialReport);
            return;
        }

        /* TODO: write a valid axios get request that receives a Report object. Set the "report" variable equal to the response JSON.
        
        The url will be "https://api.spaceflightnewsapi.net/v3/reports"+reportId. */
        //CODE HERE
    }

    return (
        <div className='section-container'>
            <h2>Report Search</h2>

            <div className="todo-container">

                <p>Input the id of some report and press 'search' to obtain info about that report</p>

                <input type="text" value={reportId} onChange={searchFunction}></input>
                {/* HERE we can see this button will trigger the axios request */}
                <button onClick={newReportEvent}>Search</button>

                {/* Here we are using the concept of "conditional rendering" to render the report if the id is greater than or equal to 1 */}
                {(report.id>=1) ?
                    <div key={report.id} className='bottom-gap' style={{ textAlign: "left" }}>
                        <span>Id: {report.id}  </span><a href={report.url}>{report.title}</a><span> - {report.publishedAt}</span>
                         <br />
                        <img src={report.imageUrl} style={{ width: "15%" }}></img>
                        <span>{report.summary}</span>
                    </div> : <div></div>}
            </div>
        </div>
    );
}

export default ReportByIdComponent;