var modal = document.getElementById('myModal')
    var ModalCloseBtn = document.getElementById('modal-open')
    var closemodal = document.querySelector('modal-close')

    // openmodal.AddEventListener('click', function(){
    //    // modal.style.display = 'block';
    // })


    function onPageOpen(){
        modal.style.display = 'none';
    }

    function OpenModal(){
        modal.style.display = 'block';
        ModalCloseBtn.style.display = 'none';
    }

    function CloseModal(){
        modal.style.display = 'none';
        ModalCloseBtn.style.display = 'block';
    }

    window.addEventListener('click', function(e){
        if(e.target == modal) {
            modal.style.display ='none';
        }
    })

    
