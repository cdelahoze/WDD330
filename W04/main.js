import * as all from './depurador.js' 

const fechaAct = document.getElementById('fechaAct')

fechaAct.innerHTML += `
<p>Debugging is the process of finding and fixing errors within a script.</p>
<h3>The following items are important for debugging</h3>
<lu>
<li>Debug from your local server or hosting</li>
<li>Mark a breakpoint before starting debugging</li>
<li>To go through line by line of code we press F11</li>
<li>To go from breakpoint to breakpoint we press F8</li>
</lu>
<p>The following JavaScript code is helpful for practicing debugging.
After opening the browser, you launch the inspector and click on "source" and it reloads the website. 
The debugger starts immediately. The JavaScript file is debugger.js. <b>Current Date ${all.fechaActual()}</b></p>
`
console.log(all.fechaActual())


const note = document.getElementById('note')

note.innerHTML += `<p>The following table summarizes the most relevant rules to have a very good syntax in JavaScript.</p>
<img src="./syntax_suggested_rules.png" alt="SyntaxImage">

<h2>Error handling, "try...catch"</h2>

<p>try...catch allows us to "catch" errors in the script. It works by executing the code in try {...}, 
if there are no errors it ignores the catch. Conversely, if it encounters an error, execution stops and 
ignores the rest of the try code and runs the catch block, without stopping the entire script.</p>

<p>Try...Catch only works for runtime errors or exceptions. For it to work, the code must be valid JavaScript. 
Also, it works synchronously so it doesn't catch the error if it runs later.</p>

<p>It is very useful for debugging different codes, including those using JSON.parse,</p>
`