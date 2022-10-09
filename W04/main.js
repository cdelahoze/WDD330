//Form Controls

/*El atributo da foco a este elemento cuando se carga una página. 
Es el equivalente a poner la siguiente línea de JavaScript en:autofocusmain.js*/

    document.forms.hero.heroName.focus();
                
/*El atributo insertará el valor proporcionado en el campo de entrada hasta
 que el usuario introduzca algo de texto. Esto puede ser útil para colocar 
 sugerencias sobre cómo completar el formulario.placeholder*/

    const form = document.forms['hero'];
    form.addEventListener('submit', makeHero, false);

/*The event listener will invoke the function when the form is submitted. 
This function will return an object based on the information provided in the form. 
Let’s implement that function by adding this code to :makeHero()main.js */

function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted
    
    const hero = {}; // create an empty object
    
    hero.name = form.heroName.value; // create a name property based on the input field's value
    
    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
    }

// Input Fields

hero.age = form.age.value;


//The 'name' attribute of the element is used to access it in JavaScript as a property of the form object:<select>

hero.city = form.city.value;

//Each selection object has a property that’s equal to the 'value' attribute of the tag that was selected. 


//It is also possible to find out the index of the option that has been selected, using the property. 

form.city.options[form.city.selectedIndex].text

//From the example above, it should be clear that you can access the text of any option using index notation. 

form.city.options[0].text

/*Validation can occur on the client side using JavaScript, and on the server side. 
It is advisable to use both client-side and server-side validation. JavaScript should 
not be relied upon to validate any data before it’s saved to a database. 
This is because it’s possible for a user to modify the JavaScript code and bypass the validation rules.
 It's also very easy to bypass the front-end completely and send arbitrary data to the application's backend. 
 For these reasons, JavaScript validation should be used to enhance the user experience when 
 filling in a form by giving feedback about any errors before it’s submitted. This*/

/*It is also possible to implement custom form validation using JavaScript. 
For example, say we wanted to exclude any superhero names that begin with an 'X'. */

 form.addEventListener('submit',validate,false);

 function validate(event) {
 const firstLetter = form.heroName.value[0];
 if (firstLetter.toUpperCase() === 'X') {
     event.preventDefault();
     alert('Your name is not allowed to start with X!');
 
 }
 }

/*We can improve the usability of the form further by giving instant feedback,
 instead of waiting for the form to be submitted. This can be achieved by adding 
 the event listener directly to the input field that will fire when the user presses 
 a key (using the event). The feedback can then be inserted inside the label element 
 of the input field, along with a class of for more direct feedback. 
 Add the following code to :keyuperrormain.js */

 const label = form.querySelector('label');
 const error = document.createElement('div');
 error.classList.add('error');
 error.textContent = '! Your name is not allowed to start with X.';
 label.append(error);
 
 function validateInline() {
     const heroName = this.value.toUpperCase();
     if(heroName.startsWith('X')){
     error.style.display = 'block';
     } else {
     error.style.display = 'none';
     }
 }

//  Disabling the Submit Button

function disableSubmit(event) {
    if(event.target.value === ''){
    document.getElementById('submit').disabled = true;
    } else {
    document.getElementById('submit').disabled = false;
    }
}
            
form.heroName.addEventListener('keyup',disableSubmit,false);