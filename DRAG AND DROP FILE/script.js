
     
  var container=document.querySelector("#container");
  var input=document.querySelector("#input");
  var img=document.querySelector("#img")
      var imglink;


  input.onchange=()=>{
    imglink=URL.createObjectURL(input.files[0])
    img.src=imglink;
  }
  function whendraged(dragedfile){
    input.files=dragedfile;
   imglink=URL.createObjectURL(input.files[0])
    img.src=imglink;
  }

  container.addEventListener("dragover",(event)=>{
     event.preventDefault();
  })
 container.addEventListener("drop",(event)=>{
  event.preventDefault();

  whendraged(event.dataTransfer.files);
  
 })


   