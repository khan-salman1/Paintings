
// Carousel Logic
let slideIndex = 0;
function showSlides() {
    const slides = document.querySelectorAll('.carousel-slide img');
    if (!slides.length) return;
    slides.forEach((img, i) => {
        img.style.display = i === slideIndex ? 'block' : 'none';
    });
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 3000); // Change every 3 seconds
}
document.addEventListener("DOMContentLoaded", showSlides);

// Export to Word
function exportToWord(contentId, filename = 'painting.doc') {
    const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
                   "xmlns:w='urn:schemas-microsoft-com:office:word' " +
                   "xmlns='http://www.w3.org/TR/REC-html40'>" +
                   "<head><meta charset='utf-8'></head><body>";
    const footer = "</body></html>";
    const content = document.getElementById(contentId).innerHTML;
    const sourceHTML = header + content + footer;
    
    const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    const fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = filename;
    fileDownload.click();
    document.body.removeChild(fileDownload);
}
