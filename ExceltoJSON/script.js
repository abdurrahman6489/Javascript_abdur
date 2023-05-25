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
        array.forEach((elem) => {
          const { SLNO, PROJECTNAME, HOSTEDSITE } = elem;
          let rowData = document.createElement("tr");
          rowData.innerHTML = `
              <td>${SLNO}</td>
              <td>${PROJECTNAME}</td>
              <td><a href=${HOSTEDSITE} target="_blank">${HOSTEDSITE}</a></td>
              `;
          table.appendChild(rowData);
        });
        // result.innerHTML = JSON.stringify(array, undefined, 8);
        // console.log(array);
      });
    };
  }
});
