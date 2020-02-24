import React, {Component} from 'react'
import Navbar from '../../Components/Navbar'
import {Document, Page} from 'react-pdf'

class Resume extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
  
  onDocumentLoadSucccess = ({numPages}) =>{
    this.setState({numPages});
  }

  render() {
    const {pageNumber, numPages} = this.state

    return(
      <>
        <Navbar/>
        <div id="pageTitle" className = "row center">
          <h1>Resume</h1>
        </div>
        <Document
          file="../../../public/Resume2020.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          {/* <Page pageNumber={pageNumber} /> */}
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </>
    )

  }
}

export default Resume