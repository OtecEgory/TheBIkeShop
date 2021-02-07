var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.arrow-next',
    prevEl: '.arrow-previous',
  },
})

window.onload = function() {

  let visible_menu = ('show')
  let openMenuBtn = document.querySelector('.menu-burger img')
  let menu = document.querySelector('.mob-menu')
  let exit = document.querySelector('.exit')

    function addElem (btn, elem, addlcls) {
      btn.addEventListener('click', () => {
          elem.classList.add(addlcls)
      })
    }
    
    addElem (openMenuBtn, menu, visible_menu)

    function removeElem(btn_ex, elem, delcls) {
      btn_ex.addEventListener('click', () => {
          elem.classList.remove(delcls)
      })
  }
  removeElem(exit, menu, visible_menu)

  let castomSelectHeads = document.querySelectorAll('.select-option .select-head')
  let bodyItems = document.querySelectorAll('.select-option li')
  
  castomSelectHeads.forEach(item => {
      item.addEventListener('click', event => {
          let head = event.currentTarget
          
          head.nextElementSibling.classList.add('show')
      })
  })

  bodyItems.forEach(item => {
      item.addEventListener('click', event => {
          let element = event.currentTarget
          let value = element.innerHTML
          let currentSelect = element.closest('.select-option')
          let resultInput = currentSelect.querySelector('.result-inp')

          resultInput.value = value
          element.closest('.body').classList.remove('show')
      })
  })

  let scrollBtn = document.querySelector('.scroll-icon')
  let section2 = document.querySelector('#categories').getBoundingClientRect()

  function scrollDown(){
    scrollBtn.addEventListener('click', ()=>{
      window.scroll({top: section2.top, behavior: 'smooth'});
    })
  }
  scrollDown()

}