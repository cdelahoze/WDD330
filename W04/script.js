addEventListener('load', function(e) {
    documenta.querySelector('#test').innerHTML = 'forms';
  });
  
  //Accessing Form Elements

  /* The square bracket notation can also be used instead (again, this is useful if there are any naming 
   clashes with existing property and method names, or if the name is an invalid variable name)*/

  const form = document.forms['search'];
  form.addEventListener ('submit', search, false);


  /*We can also access the form controls using their 'name' attributes as if it was a property 
  of the form object. So, for example, the input field has a name attribute of and can 
  be accessed using this code:searchInput*/

  const input = form['searchInput']

  //Form Properties and Methods


  //Form Events
  
  //The event occurs when an element is focused on. In the case of an element, this is when the cursor is placed inside the element
  
    //input.addEventListener('focus', () => alert('focused'), false);
  
  //The event occurs when the user moves the focus away from the form element. 
                  
    //input.addEventListener('blur', () => alert('blurred'), false);
  
  //You’ll notice the alert message 'changed' only appears if you actually change the value inside the search box, then move the cursor away from it
  
  input.addEventListener('change', () => alert('changed'), false);
  
  //Submitting a Form
  
  //Usually this will send the content of the form to the server to be processed, but we can use JavaScript to intercept the form before it’s sent by adding a event listener. 
  
  function search() {
  alert(' Form Submitted');

  }
  // We can actually stop the form from being submitted to that URL altogether by using the method that we saw in the last chapter. Add the following line to the search function:preventDefault()

  function search(event) {
  alert('Form Submitted');
  event.preventDefault();
  }
                  
  // Retrieving and Changing Values From a Form

  /*We can use this to report back what the user has searched for. Edit the function to the following:search()*/

  function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
    }

  // Now the default text will disappear when the user clicks inside the input field (the focus event) and reappear if the user leaves the field blank and clicks away from it (the blur event).
  
  input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
        }
    }, false);
    
    input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
        } 
    }, false);

    

