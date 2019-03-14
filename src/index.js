document.addEventListener('DOMContentLoaded', function(){
  console.log('%c HI', 'color: firebrick')

  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  let dogs = []
  let dogContainer = document.querySelector('#dog-image-container')
  let breedList = document.querySelector('#dog-breeds')
  let dropDown = document.querySelector('#breed-dropdown')

  fetch(imgUrl)
  .then(res => res.json())
  .then(function(json) {
    json.message.forEach(dog => {
      dogContainer.innerHTML += (`<img src=${dog}>`)
    })
  })

  fetch(breedUrl)
  .then(res => res.json())
  .then(function(json) {
    for(keys in json.message) {
      dogs.push(keys)
      breedList.innerHTML += (`<li>${keys}</li>`)
    }
  })

  document.addEventListener('click', (e) => {
    if (dogs.includes(e.target.textContent)) {
      e.target.style.color = 'yellow'
      e.target.style.background = 'black'
    }
  })

  dropDown.addEventListener('change', (e) => {
    breedList.innerHTML = ('');
    let input = e.target.value


  dogs.filter(breed => {
    if (breed[0] === input) {
      breedList.innerHTML += (`<li>${breed}</li>`)
      }
    })
  })
})
