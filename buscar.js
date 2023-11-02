document.addEventListener('keyup', e => {
    


    if(e.target.matches('#buscador')) {
        document.querySelectorAll('.peliculas').forEach(pelis => {
            pelis.textContent.toLowerCase().includes(e.target.value)
            ? pelis.classList.remove('filtro')
            : pelis.classList.add('filtro');
            
            most.style = 'display: block';
            
           
        })


        if(buscador.value === ''){
            most.style = 'display: none';
        }

    }

     

})



// DAR CLICK EL BOTON PARA MOSTRAR LA PELICULAS
function btn__play() {
    
    container__mostrar__video.innerHTML = ` <video controls autoplay id="video">
                                                <source src="videos/SPIDER-MAN LEJOS DE CASA Tráiler Español DOBLADO (2019).mp4">
                                            </video>
                                            
                                            <div class="x" id="cerrar" onclick="cerrar__video()"><i class="fa-solid fa-xmark"></i></div>`;


                                           
                                          

}


// CERRAR EL VIDEO



function cerrar__video() {
    container__mostrar__video.innerHTML = ` <video controls loop id="video">
                                                <source src="videos/SPIDER-MAN LEJOS DE CASA Tráiler Español DOBLADO (2019).mp4">
                                            </video>`;


    video.style = 'display: none';
    cerrar__video.style = 'display: none';
    
}