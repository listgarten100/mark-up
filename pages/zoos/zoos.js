class ValidateInput {

    _initConfig() {
        this.donateInput = document.querySelector('.donat__input');
        this.donateBtn = document.querySelector('.donat__btn');
    }

    _initListeners() {
        this.donateInput.addEventListener('input', () => this.donateInput.value = this.donateInput.value.slice(0,4));
        this.donateBtn.addEventListener('click', (e) => e.preventDefault());
    }

    init() {
        this._initConfig();
        this._initListeners();
    }
    
}





class AsideMenu {
    constructor(animalList) {
        this.animalList = animalList;
    }

    _initConfig() {
        this.btnArrow = document.querySelector('.aside-menu__btn-arrow');
        this.asideList = document.querySelector('.aside-menu__list');
        this.asideItems = document.querySelectorAll('.aside-menu__item');
        this.borderCircle = document.querySelector('.aside-menu__border-circle-external');
        this.asideLinks = document.querySelectorAll('.aside-menu__link');
        this.asideImgs = document.querySelectorAll('.aside-menu__img');
        this.isOpenAside = false;
    }

    toggleAsideMenu() {
       
        if(!this.isOpenAside) {
            this.asideList.style = 'width: 300px';
            this.borderCircle.style = 'background: none; width: 100%';
            
            const newSrc = this.btnArrow.firstElementChild.src.replace('.svg', 'Reverse.svg');
            this.btnArrow.firstElementChild.src = newSrc;
    
            for (let i = 0; i < this.asideItems.length; i++){
    
                if(this.asideLinks[i]) {
                    this.asideLinks[i].style = 'background: none; width: 100%;  height: 100%;';
                    this.asideLinks[i].classList.add('aside-menu__link--hover');
                    this.asideImgs[i].style = 'width: 66px; height: 50px; margin-right: 20px';
    
                    if(i === 0) this.asideImgs[i].firstElementChild.style = 'fill: #fff;';
                    else this.asideImgs[i].classList.add('aside-menu__img--hover');
                }
    
                if(i !== 0 && i !== 5) {
                    const desc = document.createElement('p');
                    desc.classList.add('aside-menu__desc');
                
                    if( i - 1 === this.animalList.indexOf('eagle')) {
                        desc.innerHTML = "Watch The Bald Eagles Nest from West End cam";
                    } else if(i - 1 ===  this.animalList.indexOf('panda')) {
                        desc.innerHTML = "Watch live from China's  Panda Center";
                    } else if( i - 1 === this.animalList.indexOf('gorilla')) {
                        desc.innerHTML = "Livestream from Gorilla Forest Corridor habitat cam";
                    } else{
                        desc.innerHTML = "The ring-tailed lemurs play in Madagascar, Lemuria Land";
                    }
                    this.asideLinks[i-1].appendChild(desc);
                }
            
            }
            this.isOpenAside = true;    
        }
        else {
            this.asideList.style = '';
            this.borderCircle.style = '';
            const newSrc = this.btnArrow.firstElementChild.src.replace('Reverse.svg', '.svg');
            this.btnArrow.firstElementChild.src = newSrc;
    
            for (let i = 0; i < this.asideItems.length; i++){
                if(this.asideLinks[i]) {
                    this.asideLinks[i].style = '';
                    this.asideLinks[i].classList.remove('aside-menu__link--hover');
                    this.asideImgs[i].style = '';
    
                    if(i === 0) this.asideImgs[i].firstElementChild.style = '';
                    else this.asideImgs[i].classList.remove('aside-menu__img--hover');
                }
    
                const descs = document.querySelectorAll('.aside-menu__desc');
    
                descs.forEach((elem) => {
                    elem.remove();
                });
            }
            this.isOpenAside = false;    
        }
    }

    _initListeners() {
        this.btnArrow.addEventListener('click', this.toggleAsideMenu.bind(this));
    }

    init() {
        this._initConfig();
        this._initListeners();
    }
}

