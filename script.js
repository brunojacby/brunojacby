function removerdd() {
    document.getElementById('infos').classList.remove('disabled') 
    document.getElementById('homeText').classList.add('disabled')
    document.getElementById('project').classList.add('disabled')      
}

function projetos() {
    document.getElementById('project').classList.remove('disabled') 
    document.getElementById('homeText').classList.add('disabled')
    document.getElementById('infos').classList.add('disabled')     
}