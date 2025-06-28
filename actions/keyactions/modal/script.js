// modal lesson

// const body = document.querySelector("body")
const openModalBtn = document.querySelector('button[data-action="open-modal"]')
const closeModalBtn = document.querySelector('button[data-action="close-modal"]')
const backdrop = document.querySelector(".js-backdrop")




const onOpenModal = (event) => {
  document.body.classList.add('show-modal')
  document.addEventListener('keydown', onEscPress)
}

const onCloseModal = (event) => {
  document.body.classList.remove('show-modal')
  document.removeEventListener('keydown', onEscPress)
}

const onBackdropClick = (event) => {
  if (event.target === event.currentTarget) {
    onCloseModal()
  } 
}

const onEscPress = event => {
	console.log(event)
	if (event.code === 'Escape') {
		onCloseModal()
	}
}



openModalBtn.addEventListener('click', onOpenModal)

closeModalBtn.addEventListener('click', onCloseModal)

backdrop.addEventListener("click", onBackdropClick)