import{j as y,r as d,R as k,a as F}from"./vendor.6e104581.js";const j=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}};j();const e=y.exports.jsx,a=y.exports.jsxs,f=y.exports.Fragment;function C({titulo:t,spanTitulo:n}){return e(f,{children:a("h1",{className:"font-black text-5xl text-center md:w-2/3 mx-auto",children:[t," ",e("span",{className:"text-indigo-600",children:n})]})})}function L({mensaje:t}){return e("div",{className:"bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md",children:e("p",{children:t})})}function M({pacientes:t,setPacientes:n,paciente:s,setPaciente:c}){const[r,o]=d.exports.useState(""),[l,m]=d.exports.useState(""),[u,h]=d.exports.useState(""),[b,g]=d.exports.useState(""),[x,N]=d.exports.useState(""),[w,v]=d.exports.useState(!1);d.exports.useEffect(()=>{Object.keys(s).length>0&&(o(s.nombreMascota),m(s.nombrePropietario),h(s.email),g(s.ingreso),N(s.sintomas))},[s]);const P=()=>{const i=Math.random().toString(36).substr(2),p=Date.now().toString(36);return i+p};return a("div",{className:"md:w-1/2 lg:w-2/5 mx-5",children:[e("h2",{className:"font-black text-3xl text-center",children:"Seguimiento de Pacientes"}),a("p",{className:"text-lg mt-5 text-center mb-10",children:["A\xF1adir Pacientes y ",e("span",{className:"text-indigo-600 font-bold",children:"Administrarlos"})]}),a("form",{onSubmit:i=>{if(i.preventDefault(),[r,l,u,b,x].includes("")){console.log("Hay por lo menos un campo vacio."),v(!0);return}v(!1);const p={nombreMascota:r,nombrePropietario:l,email:u,ingreso:b,sintomas:x};if(s.id){p.id=s.id;const E=t.map(S=>S.id===s.id?p:S);n(E),c({})}else p.id=P(),n([...t,p]);o(""),m(""),h(""),g(""),N("")},className:"bg-white shadow-md rounded-lg py-10 px-5 mb-10",children:[w&&e(L,{mensaje:"Todos los campos son obligatorios"}),a("div",{className:"mb-5",children:[e("label",{className:"block text-gray-700 uppercase font-bold",htmlFor:"mascota",children:"Nombre Mascota"}),e("input",{type:"text",className:"border-2 w-full p-2 mt-2 placeholder-gary-400 rounded-md",id:"mascota",placeholder:"Nombre de la mascota",value:r,onChange:i=>o(i.target.value)})]}),a("div",{className:"mb-5",children:[e("label",{className:"block text-gray-700 uppercase font-bold",htmlFor:"propietario",children:"Nombre Propietario"}),e("input",{type:"text",className:"border-2 w-full p-2 mt-2 placeholder-gary-400 rounded-md",id:"propietario",placeholder:"Nombre del propietario",value:l,onChange:i=>m(i.target.value)})]}),a("div",{className:"mb-5",children:[e("label",{className:"block text-gray-700 uppercase font-bold",htmlFor:"email",children:"Email"}),e("input",{type:"email",className:"border-2 w-full p-2 mt-2 placeholder-gary-400 rounded-md",id:"email",placeholder:"Email Contacto Propietario",value:u,onChange:i=>h(i.target.value)})]}),a("div",{className:"mb-5",children:[e("label",{className:"block text-gray-700 uppercase font-bold",htmlFor:"ingreso",children:"Ingreso"}),e("input",{type:"date",className:"border-2 w-full p-2 mt-2 placeholder-gary-400 rounded-md",id:"ingreso",value:b,onChange:i=>g(i.target.value)})]}),a("div",{className:"mb-5",children:[e("label",{className:"block text-gray-700 uppercase font-bold",htmlFor:"sintomas",children:"Sintomas"}),e("textarea",{id:"sintomas",className:"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md",placeholder:"Describir los sintomas",value:x,onChange:i=>N(i.target.value)})]}),e("input",{type:"submit",className:"bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors",value:s.id?"Editar paciente":"Agregar paciente"})]})]})}function A({paciente:t,setPaciente:n,eliminarPaciente:s}){const{nombreMascota:c,nombrePropietario:r,email:o,ingreso:l,sintomas:m,id:u}=t;return e(f,{children:a("div",{className:"mx-5 bg-white shadow-md rounded-lg py-10 px-5 mb-5 mt-0",children:[a("p",{className:"font-bold mb-3 text-gray-700 uppercase",children:["Nombre Mascota: ",e("span",{className:"font-normal normal-case",children:c})]}),a("p",{className:"font-bold mb-3 text-gray-700 uppercase",children:["Nombre Propietario: ",e("span",{className:"font-normal normal-case",children:r})]}),a("p",{className:"font-bold mb-3 text-gray-700 uppercase",children:["Correo: ",e("span",{className:"font-normal normal-case",children:o})]}),a("p",{className:"font-bold mb-3 text-gray-700 uppercase",children:["Fecha Ingreso: ",e("span",{className:"font-normal normal-case",children:l})]}),a("p",{className:"font-bold mb-3 text-gray-700 uppercase",children:["Sintomas: ",e("span",{className:"font-normal normal-case",children:m})]}),a("div",{className:"flex justify-end mt-5",children:[e("button",{type:"button",className:"py-2 px-5 m-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg",onClick:()=>n(t),children:"Editar"}),e("button",{type:"button",className:"py-2 px-5 m-1 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg",onClick:()=>{confirm("\xBFDesea eliminar al paciente?")&&s(u)},children:"Eliminar"})]})]})})}function I({pacientes:t,setPaciente:n,eliminarPaciente:s}){return d.exports.useEffect(()=>{t.length>0&&console.log("Nuevo paciente")},[t]),e("div",{className:"md:w-1/2 lg:w-3/5 mb-10",children:t&&t.length?a(f,{children:[e("h2",{className:"font-black text-3xl text-center",children:"Listado de Pacientes"}),a("p",{className:"text-lg mt-5 text-center mb-10",children:["Administrar sus ",e("span",{className:"text-indigo-600 font-bold",children:"Pacientes y Citas"})]}),e("div",{className:"h-screen overflow-y-scroll",children:t.map(c=>e(A,{paciente:c,setPaciente:n,eliminarPaciente:s},c.id))})]}):a(f,{children:[e("h2",{className:"font-black text-3xl text-center",children:"No hay pacientes"}),a("p",{className:"text-lg mt-5 text-center mb-10",children:["Agregar pacientes usando ",e("span",{className:"text-indigo-600 font-bold",children:"el formulario"})]})]})})}function O(){const[t,n]=d.exports.useState([]),[s,c]=d.exports.useState({});return d.exports.useEffect(()=>{(()=>{var m;const l=(m=JSON.parse(localStorage.getItem("pacientes")))!=null?m:[];n(l)})()},[]),d.exports.useEffect(()=>{localStorage.setItem("pacientes",JSON.stringify(t))},[t]),a("div",{className:"container mx-auto mt-20",children:[e(C,{titulo:"Seguimiento Pacientes",spanTitulo:"Veterinaria"}),a("div",{className:"mt-12 md:flex",children:[e(M,{pacientes:t,setPacientes:n,paciente:s,setPaciente:c}),e(I,{pacientes:t,setPaciente:c,eliminarPaciente:o=>{const l=t.filter(m=>m.id!==o);n(l)}})]})]})}k.render(e(F.StrictMode,{children:e(O,{})}),document.getElementById("root"));
