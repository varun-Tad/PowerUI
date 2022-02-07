const showModal = document.querySelector(".show-modal-btn");

const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".modal-overlay")




showModal.addEventListener('click',()=>{
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
})



closeModal.addEventListener('click',()=>{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})


document.addEventListener('keydown',(e)=>{
    if(e.key === 'Escape' && !modal.classList.contains('hidden'))
    {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
})