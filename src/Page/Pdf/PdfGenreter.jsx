import React, { useEffect } from 'react'
// import download from 'downloadjs'
import { PDFDocument } from 'pdf-lib'
import pdfFile from '../../Picture/Blue3.pdf'

const PdfGenerater = () => {

    const name = "Rohit"
    const add = "Kamatghar, Bhiwandi, District - Thane, Maharashtra"
    const pin = "421302"
    const patient = "Rohit"
    const consultant = "Subham"
    const hospital = "Jain Hospital"
    const hospitalNo = "222555"
    const refeName = "Sujit";
    const refePhone = "9513512345"
    const refeRelation = "Brother"
    const date= "12/02/2021"
    const newDate = "10-02-2021";
    const id= "625789"
    const component="Package Red Blood Cell (PRBC)"
    const price = "300"
    const unit = "1"
    const address = `${add} - ${pin}`
    const patientDetail =`${patient}
${consultant}
${hospital}
${hospitalNo} 
`
    const refe =
        `${refeName}
${refeRelation}
${refePhone}`


    const generater = async (name, address, refe, patient, date, date2, id, price, component, unit) => {
        // const {PDFDocument, rgba} = PDFLib;


        const exPdf = await fetch(pdfFile).then((res) => {
            return res.arrayBuffer()
        })

        const pdfDoc = await PDFDocument.load(exPdf);

        const page = pdfDoc.getPages()

        const firstName = page[0];
        firstName.drawText(name, {
            x: 60,
            y: 600,
            size: 10
        })
        const secondAddress = page[0];
        secondAddress.drawText(address, {
            x: 60,
            y: 585,
            size: 10,
            maxWidth: 200,
            lineHeight: 15
        })
        const thirdRefe = page[0];
        thirdRefe.drawText(refe, {
            x: 60,
            y: 500,
            size: 10,
            maxWidth: 200,
            lineHeight: 15
        })
        const fourtPatient = page[0];
        fourtPatient.drawText(patient, {
            x: 428,
            y: 600,
            size: 10,
            maxWidth: 200,
            lineHeight: 13
        })
        const fifthDate = page[0];
        fifthDate.drawText(date2, {
            x: 485,
            y: 673,
            size: 10,
            maxWidth: 200,
            lineHeight: 15
        })
        const fifthOrderDate = page[0];
        fifthOrderDate.drawText(date, {
            x: 485,
            y: 662,
            size: 10,
            maxWidth: 200,
            lineHeight: 15
        })
        const sixthId = page[0];
        sixthId.drawText(id, {
            x: 485,
            y: 685,
            size: 10,
            maxWidth: 200,
            lineHeight: 15
        })
        const sevethTotalPrice = page[0];
        sevethTotalPrice.drawText(price, {
            x: 515,
            y: 370,
            size: 10,
            maxWidth: 200,
            lineHeight: 15
        })
        const sevethPrice = page[0];
        sevethPrice.drawText(price, {
            x: 445,
            y: 370,
            size: 10,
            maxWidth: 200,
            lineHeight: 15
        })
        const sevethTotal = page[0];
        sevethTotal.drawText(price, {
            x: 515,
            y: 318,
            size: 10,
            maxWidth: 200,
            lineHeight: 15
        })
        const eigthComponent = page[0];
        eigthComponent.drawText(component, {
            x: 125,
            y: 370,
            size: 10,
            maxWidth: 200,
            lineHeight: 15
        })
        const ninthUnit = page[0];
        ninthUnit.drawText(unit, {
            x: 375,
            y: 370,
            size: 10,
            maxWidth: 200,
            lineHeight: 15
        })
        const tenthOrderDate = page[0];
        tenthOrderDate.drawText(date, {
            x: 167,
            y: 227,
            size: 9,
            maxWidth: 200,
            lineHeight: 14
        })




        const uri = await pdfDoc.saveAsBase64({ dataUri: true })




        // const pdfBytes = await pdfDoc.save()

        // download(pdfBytes, "pdf-lib.pdf", "application/pdf");



        document.querySelector("#mypdf").src = uri;
    }

    useEffect(() => {
        generater(name, address, refe, patientDetail, date, newDate, id, price, component, unit);
    }, [name, address, refe, patientDetail, date, newDate, id, price, component, unit])


    return (
        <div>
            {/* <button onClick={generater}>for pdf</button> */}
            {/* <h1>ye mere pdf</h1> */}
            <iframe src="" id="mypdf" title="my PDF" style={{ width: '500px', height: "500px" }}></iframe>
        </div>
    )
}

export default PdfGenerater
