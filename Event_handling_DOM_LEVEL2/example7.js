const myform = document.myform;
const btnadd = myform.btnadd;
const btnclear = myform.btnclear;
const txtfno = myform.txtfno;
const txtsno = myform.txtsno;
const txtresult = myform.txtresult;

btnadd.addEventListener("click", () => {
  let fnun = txtfno.value;
  let sum = Number(fnun) + Number(txtsno.value);
  txtresult.value = sum;
});

btnclear.addEventListener("click", () => {
  txtfno.value = txtsno.value = txtresult.value = "";
});
