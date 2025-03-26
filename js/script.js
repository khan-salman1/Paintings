function savePaintingDetails(paintingTitle, paintingDetails) {
    var doc = new jsPDF();
    doc.text(`Painting Title: ${paintingTitle}`, 10, 10);
    doc.text(`Details: ${paintingDetails}`, 10, 20);
    doc.save(`${paintingTitle}.pdf`);
}
