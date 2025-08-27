const URL = "https://www.freepublicapis.com/api/apis?limit=10&sort=best";
let factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("Getting Data...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
}