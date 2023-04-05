const pageIndicator = document.querySelector("#page_indicator");
const issueContainer = document.querySelector("#issue_container");
const loadNextBtn = document.querySelector("#load_next");
const loadPrevBtn = document.querySelector("#load_prev");
let currentPage = 1;
makeAPICall(currentPage);
function makeAPIString(pageNumber){
    let apiString = `https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`;
    return apiString;
}
async function makeAPICall(pageNumber){
    let apiString = makeAPIString(pageNumber);
    let response = await fetch(apiString);
    let data = await response.json();
    showissueNames(data);
}

function deleteTheList(){
    while(issueContainer.firstChild){
        issueContainer.removeChild(issueContainer.firstChild);
    }
}
function showissueNames(issueData){
    deleteTheList();
    issueData.forEach(data =>{
        let {title} = data;
        const list = document.createElement("li");
        issueContainer.appendChild(list);
        list.innerHTML = title;
    })
}
showPageNumber(currentPage);
function showPageNumber(currentPage){
    pageIndicator.innerHTML = `Page Number ${currentPage}`;
}

addEventListenersToButtons();
function addEventListenersToButtons(){
    loadNextBtn.addEventListener("click",()=>{
        currentPage +=1;
        showPageNumber(currentPage);
        makeAPICall(currentPage);
        // console.log("next page loaded");
    })
    loadPrevBtn.addEventListener("click",()=>{
        if(currentPage>1){
            currentPage -=1;
            showPageNumber(currentPage);
            makeAPICall(currentPage);
            // console.log("previous page loaded");
        }
        // else{
        //     console.log("on page 1");
        // }
    })

}
