import './style.css'

document.getElementById('app')!.innerHTML = `
  <button id="contact-btn">Show Contact Info</button>
  <div id="contact-info" style="display:none;">
    <p>GitHub: <a href="https://github.com/notyourimaginarycoder">imaginary friend</a></p>
  </div>

  test
`

const contactButton = document.getElementById('contact-btn')!
const contactInfo = document.getElementById('contact-info')!

contactButton.addEventListener('click', () => {
  if (contactInfo.style.display === 'none') {
    contactInfo.style.display = 'block'
    contactButton.textContent = 'Hide Contact Info'
  } else {
    contactInfo.style.display = 'none'
    contactButton.textContent = 'Show Contact Info'
  }
})
