let file;
let array = [];
const inputElem = document.querySelector(".input");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const table = document.querySelector(".table");
inputElem.addEventListener("change", (event) => {
  file = event.target.files[0];
});

btn.addEventListener("click", () => {
  if (file) {
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = (event) => {
      let data = event.target.result;
      let workbook = XLSX.read(data, { type: "binary" });
      workbook.SheetNames.forEach((sheet) => {
        let rowObject = XLSX.utils.sheet_to_row_object_array(
          workbook.Sheets[sheet]
        );
        array = [...rowObject];

        table.innerHTML = "";
        let headings = Object.keys(array[0]);

        let thead = document.createElement("thead");
        let tbody = document.createElement("tbody");
        let headingRow = document.createElement("tr");

        let data = headings.map((heading) => `<td>${heading}</td>`);
        headingRow.innerHTML = data.join("\n");
        thead.appendChild(headingRow);
        table.appendChild(thead);

        array.forEach((elem) => {
          let rowData = headings.map((heading) => {
            let markUp =
              typeof elem[heading] === "string" &&
              elem[heading].split(":")[0] === "https"
                ? `<a href=${elem[heading]} target="_blank">${elem[heading]}</a>`
                : `${elem[heading]}`;
            return `<td>${markUp}</td>`;
          });
          let rowDataElem = document.createElement("tr");
          rowDataElem.innerHTML = rowData.join("\n");
          tbody.appendChild(rowDataElem);
        });
        table.appendChild(tbody);
        // result.innerHTML = JSON.stringify(array, undefined, 8);
        // console.log(array);
      });
    };
  }
});
