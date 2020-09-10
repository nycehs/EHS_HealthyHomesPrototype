document.querySelectorAll('.problem').forEach(item => {
  item.addEventListener('click', event => {
    //handle click
    alert(event.target.id);
    
  })
})