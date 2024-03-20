
//Create PDf from HTML...
function CreatePDFfromHTML() {
    const content = document.getElementById("page");
    const options = {
        margin: [-0.08,0,0,0],
        filename: 'invoice.pdf',
        image: { type: 'string', quality: 0.98 },
        html2canvas: { scale: 2, letterRendering: true,scrollY: 0 },
        pagebreak: { mode: 'avoid-all' },
        jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(content).set(options).save();
}



const button = document.getElementById("genBtn");
button.addEventListener("click", function (event) {
    console.log("Hello World!");
    CreatePDFfromHTML();
});
