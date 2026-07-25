/* ==========================================================
   بوابة المحقق الرقمي
   Firestore Database Manager
========================================================== */

import { db } from "./firebase-config.js";

import {

collection,
addDoc,
getDocs,
getDoc,
doc,
updateDoc,
deleteDoc,
query,
orderBy,
serverTimestamp

} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

/* ==========================================================
   Collections
========================================================== */

const articlesCollection = collection(db, "articles");
const coursesCollection = collection(db, "courses");
const toolsCollection = collection(db, "tools");
const usersCollection = collection(db, "users");

/* ==========================================================
   Articles
========================================================== */

export async function addArticle(data){

return await addDoc(articlesCollection,{

title:data.title,

category:data.category,

content:data.content,

author:data.author,

image:data.image || "",

createdAt:serverTimestamp()

});

}

export async function getArticles(){

const q=query(

articlesCollection,

orderBy("createdAt","desc")

);

const snapshot=await getDocs(q);

const result=[];

snapshot.forEach((docItem)=>{

result.push({

id:docItem.id,

...docItem.data()

});

});

return result;

}

export async function updateArticle(id,data){

const ref=doc(db,"articles",id);

await updateDoc(ref,data);

}

export async function deleteArticle(id){

await deleteDoc(doc(db,"articles",id));

}

/* ==========================================================
   Courses
========================================================== */

export async function addCourse(data){

return await addDoc(coursesCollection,{

title:data.title,

level:data.level,

hours:data.hours,

description:data.description,

createdAt:serverTimestamp()

});

}

export async function getCourses(){

const snapshot=await getDocs(coursesCollection);

const result=[];

snapshot.forEach(item=>{

result.push({

id:item.id,

...item.data()

});

});

return result;

}

/* ==========================================================
   Tools
========================================================== */

export async function addTool(data){

return await addDoc(toolsCollection,{

name:data.name,

category:data.category,

url:data.url,

description:data.description,

createdAt:serverTimestamp()

});

}

export async function getTools(){

const snapshot=await getDocs(toolsCollection);

const result=[];

snapshot.forEach(item=>{

result.push({

id:item.id,

...item.data()

});

});

return result;

}

/* ==========================================================
   Users
========================================================== */

export async function getUsers(){

const snapshot=await getDocs(usersCollection);

const users=[];

snapshot.forEach(item=>{

users.push({

id:item.id,

...item.data()

});

});

return users;

}

console.log("Firestore Database Ready");
