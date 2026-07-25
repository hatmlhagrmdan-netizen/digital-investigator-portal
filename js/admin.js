/* ==========================================================
   بوابة المحقق الرقمي
   Admin Panel Manager
========================================================== */

import {
addArticle,
getArticles,
deleteArticle,
addCourse,
getCourses,
addTool,
getTools,
getUsers
} from "./database.js";

/* ==========================
   Dashboard Statistics
========================== */

async function loadStatistics() {

const articles = await getArticles();
const courses = await getCourses();
const tools = await getTools();
const users = await getUsers();

setValue("articlesCount", articles.length);
setValue("coursesCount", courses.length);
setValue("toolsCount", tools.length);
setValue("usersCount", users.length);

}

/* ==========================
   Helper
========================== */

function setValue(id, value) {

const element = document.getElementById(id);

if (element) {

element.innerText = value;

}

}

/* ==========================
   Articles
========================== */

async function loadArticles() {

const articles = await getArticles();

const table = document.getElementById("articlesTable");

if (!table) return;

table.innerHTML = "";

articles.forEach(article => {

table.innerHTML += `

<tr>

<td>${article.title}</td>

<td>${article.category}</td>

<td>${article.author || "-"}</td>

<td>

<button
class="btn btn-sm btn-danger"
onclick="removeArticle('${article.id}')">

حذف

</button>

</td>

</tr>

`;

});

}

/* ==========================
   Delete Article
========================== */

window.removeArticle = async function(id){

if(confirm("هل تريد حذف هذا المقال؟")){

await deleteArticle(id);

loadArticles();

loadStatistics();

}

}

/* ==========================
   Add Article
========================== */

const articleForm=document.getElementById("articleForm");

if(articleForm){

articleForm.addEventListener("submit",async(e)=>{

e.preventDefault();

await addArticle({

title:document.getElementById("title").value,

category:document.getElementById("category").value,

content:document.getElementById("content").value,

author:"Admin"

});

articleForm.reset();

loadArticles();

loadStatistics();

alert("تم حفظ المقال.");

});

}

/* ==========================
   Courses
========================== */

async function loadCourses(){

const data=await getCourses();

console.log(data);

}

/* ==========================
   Tools
========================== */

async function loadTools(){

const data=await getTools();

console.log(data);

}

/* ==========================
   Users
========================== */

async function loadUsers(){

const data=await getUsers();

console.log(data);

}

/* ==========================
   Initialize
========================== */

window.addEventListener("DOMContentLoaded",()=>{

loadStatistics();

loadArticles();

loadCourses();

loadTools();

loadUsers();

});
