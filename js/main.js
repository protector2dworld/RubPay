const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__menu');

const logo = new Image();
logo.src = './../images/logo.svg'
logo.classList.toggle('logoImg')

if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
        menuBody.appendChild(logo);
    })
}

$(function(){

    $(function(){

        $('.security__slider').slick({
            prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/slider-arrow-left.svg">',
            nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/slider-arrow-right.svg">',
            slidesToShow: 3,
            slidesToScroll: 1,
            
            responsive: [

                {
                    breakpoint: 1525,
                    settings: {
                        arrows: false,
                        slidesToShow: 3,
                    }
                },

                {
                    breakpoint: 922,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                    }
                },

                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                        variableWidth: true,
                    }
                },
                {
                    breakpoint: 376,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: false,
                        arrows: false
                    }
                },
            ]

            
            
         });
    });

});

const accordions = document.querySelectorAll('.accordion__item');

for(item of accordions) {
    item.addEventListener('click', function() {
        if(this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            for(el of accordions) {
                el.classList.remove('active');
            }
            this.classList.add('active');
        }
    })
}


let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');

    let selectItem =document.querySelectorAll('.select__item');

    selectHeader.forEach(item=>{
        item.addEventListener('click', selectToggle)
           
        
    });

    selectItem.forEach(item=> {
        item.addEventListener('click', selectChose)
            
        
    }); 

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChose() {
        let text = this.innerText,
        select = this.closest('.select'),
        currentText = this.closest('.select').querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }
};

select();