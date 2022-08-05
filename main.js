let addBtn = document.querySelector('.add')
let tabsContainer = document.querySelector('.tab-nav__tabs');
let tabs = document.querySelectorAll('.tab-btn');
let tabcontent = document.querySelectorAll('.tabcontent')

function hideContent(){
    tabcontent.forEach(tabs =>{
        tabs.style.display = 'none';
    });
}

addBtn.addEventListener('click', ()=>{
    tabsContainer.innerHTML += `
        <div class="tab">
            <button>Nuevo</button>
            <button>x</button>
        </div>
    `
});

tabs.forEach(button => {
    button.addEventListener('click', event => {
        hideContent()
        let idTab = event.target.innerText;
        let activeTab = document.querySelector(`#${idTab}`);
        activeTab.style.display = 'block';
    })
});