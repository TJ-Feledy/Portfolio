import React from 'react'

import { Document, Page, pdfjs } from "react-pdf";

import myResume from '../resources/resume.pdf'
import NetworkLinks from './NetworkLinks.js'
import Counter from './Counter.js'

class Resume extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numPages: null,
            pageNumber: 1
        }
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }

    onLoad = ({numPages}) => {
        this.setState({numPages})
    }

    render() {
        const { pageNumber, numPages } = this.state

        return (
            <div className='Resume'>
                <Document file={myResume} onLoadSuccess={this.onLoad}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <p className='pdfPageNums'>Page {pageNumber} of {numPages}</p>
                <form className='resumeDownloadForm' method='get' action={myResume}>
                    <button className='downloadButton'>Download PDF Version Here</button>
                </form>
                <Counter />
                <NetworkLinks />
            </div>
        )
    }
}

export default Resume