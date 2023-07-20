
let elements = document.getElementsByClassName('t-dot');

let theme = localStorage.getItem('theme');

if(theme == null){
   setTheme('white');
}
else{
   setTheme(theme);
}

for(let i =0;i < elements.length ; i++){
    console.log('we got the element');
    
    elements[i].addEventListener('click',function() {
         let mode =   this.dataset.mode;
         console.log('we have a click',mode)

         setTheme(mode);
    })
}


function setTheme(mode) {
    if(mode == 'white')
       document.getElementById('theme-style').href='st.css';
    else if(mode == 'black')
       document.getElementById('theme-style').href='blackTheme.css';
    else if(mode == 'olive')
       document.getElementById('theme-style').href='greenTheme.css';
    else if(mode == 'purble')
       document.getElementById('theme-style').href='purbleTheme.css';

       localStorage.setItem('theme',mode);
}
