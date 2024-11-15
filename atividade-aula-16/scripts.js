const fotos = document.querySelectorAll(".foto")

fotos.forEach ((foto) => {
    foto.addEventListener("click", () => {
        if(foto.style.width === "600px"){
              foto.style.width = "300px"
        }else{
            foto.style.width = "600px"
        }
    })
})

