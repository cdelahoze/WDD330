
fetch('note.txt')
.then(data=> data.text())
.then(data=>{
    document.querySelector('#note').innerHTML = `${data}`
    let user = {
        name: "Cristian",
        lastname: "De La Hoz",
      
        myName() {
          // "this" is the "current object"
          document.querySelector('#this').innerHTML = `Example of the use of "this" in a method that modifies the h3 
          tag of the HTML, writing my first and last name. ${this.name} ${this.lastname}`;
        }
      };
    user.myName(); // C
})
    
