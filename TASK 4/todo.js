let input=document.getElementById("input");
let btn=document.getElementById("btn");
let ul=document.getElementById("ul");

btn.addEventListener("click",function(){

	let item=document.createElement("li");
	let btn1=document.createElement("button");
	let btn2=document.createElement("button");

	btn1.innerText="Accept";
	btn2.innerText="Delete";

	ul.appendChild(item);
	item.innerText=input.value;
	input.value="";
	 item.appendChild(btn1);
	 item.appendChild(btn2);

	btn1.addEventListener("click",function(){
		item.style.color="green";

	})

	btn2.addEventListener("click",function(){
	    item.style.display="none"
	})
})