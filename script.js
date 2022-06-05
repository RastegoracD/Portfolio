const boxes = document.querySelectorAll('.project')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes () {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(project => {
        const boxTop = project.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            project.classList.add('show')
        } else {
            project.classList.remove('show')
        }
    })
}