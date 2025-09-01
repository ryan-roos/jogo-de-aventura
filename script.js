const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener( 'click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribue('data-proximo');

        atual.classList.remove('ativo');
        document.getElementaryByid(proximoPasso).ClassList.add('ativo');
    })
})