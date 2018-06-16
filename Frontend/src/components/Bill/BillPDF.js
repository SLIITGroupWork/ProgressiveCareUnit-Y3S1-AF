import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


import React, {Component, PropTypes} from 'react';
import billDownload from './billDownload';



export default class Export extends Component {
  constructor(props) {
    super(props);
  }

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }

  render() {
    return (
      <div>
      <div className="mb5">
        <button className="btn btn-primary" onClick={this.printDocument}>Get Report</button>
      </div>

       <div id="divToPrint" className="mt4" style={{   backgroundColor : '#f5f5f5',
        width : '220mm',
        minHeight : '297mm',
        marginLeft :'auto',
        marginRight :'auto'}}
     
      > 

             
                      
              
        <div id="divToPrint" ><billDownload/></div>
       </div> 
    </div>);
  }
}