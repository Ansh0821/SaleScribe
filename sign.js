function toggleContent(){
    const current = document.getElementsById('current');
    const next = document.getElementsById('next');
    const signButton = document.getElementById('btn1');

    if (current.style.display != 'flex') {
        current.style.display = 'flex';
        next.style.display = 'none';
        // next.classList.remove('hidden');
        // next.classList.add('visible');

        // signButton.textContent = 'Show Current Content';
    }
    else{

        current.style.display ='none';
        next.style.display = 'flex';
        // current.classList.remove('hidden');
        // current.classList.add('visible');

        // next.classList.remove('visible');
        // next.classList.add('hidden');

        // signButton.textContent = 'Show New Content';
    }
}