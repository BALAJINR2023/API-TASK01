const api="https://emojihub.yurace.pro/api/all";
const maindiv=document.querySelector(".maindiv");

let currentpage = 1;
let itemsPage = 6;
let totalPages=0;
async function fetchData() {
    try {
        const response = await fetch(api,{
            method: "GET",
        });
        const data = await response.json();
        console.log(data);
        maindiv.innerHTML="";
        let startIndex = (currentpage - 1) * itemsPage;
        let endIndex = startIndex + itemsPage;
        data.slice(startIndex, endIndex).forEach((values) => {
            appenddata(values);
        });
        totalPages = Math.ceil(data.length / itemsPage);
        console.log(totalPages);
    } catch (error) {
    console.error('Error:', error);
    }
}
fetchData();

function appenddata(values) {
    const subDiv = document.createElement("div");
    subDiv.className = "card";
    subDiv.innerHTML += `
    <div class="apict">
    <div class="heading">${values.group}</div>
    <div class="name">"${values.name}"</div>
    <div><<span class="values">${values.category}</span>></div>
    <div><span class="htmlcode">${values.htmlCode}</span> </div>
    </div>`;
    maindiv.append(subDiv);
  }
//BUTTONS
  function prevButton() {
    if (currentpage > 1) {
      currentpage--; //1
      fetchData();
    }
  }
    function nextButton() {
     if (currentpage < totalPages) {
    currentpage++;
    fetchData();
    }
  }
  function firstButton(){
    if (currentpage > 1) {
    currentpage = 1;
    fetchData();
    }
  }
  function lastButton(){
    if (currentpage<totalPages) {
    currentpage = totalPages;
    fetchData();
    }
  }

  

  