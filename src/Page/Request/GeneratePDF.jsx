
import download from 'downloadjs'
import { PDFDocument } from 'pdf-lib'
import pdfFile from '../../Picture/Blue3.pdf'

export const generate = async (name, address, patient, date, dateTime, id, price, component, unit) => {

    const billPDF = await fetch(pdfFile)
        .then((res) => res.arrayBuffer())

    const pdfDocs = await PDFDocument.load(billPDF);

    const page = pdfDocs.getPages()

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
    // const thirdRefe = page[0];
    // thirdRefe.drawText(refe, {
    //     x: 60,
    //     y: 500,
    //     size: 10,
    //     maxWidth: 200,
    //     lineHeight: 15
    // })
    const fourtPatient = page[0];
    fourtPatient.drawText(patient, {
        x: 428,
        y: 600,
        size: 10,
        maxWidth: 200,
        lineHeight: 13
    })
    const fifthDate = page[0];
    fifthDate.drawText(dateTime, {
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
    const pdfSave = await pdfDocs.save()
    download(pdfSave, "Bill.pdf", "application/pdf");
}
