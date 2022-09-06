mfbox = document.querySelector('.anti');
alert('Internal ChampRiSE');
mfbox.addEventListener('click', mfboxwrk);
mfinput = document.querySelector('#userinput')
mfinput.addEventListener('keydown', mfboxwrk)
mfinput.addEventListener('keydown',  )

function mfboxwrk() {
mfbox.classList.toggle('linkTcss');
this.innerHTML = mfinput.value; 

}
