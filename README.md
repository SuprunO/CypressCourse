# CypressCourse
https://rahulshettyacademy.com/AutomationPractice/

Navigating to url - visit

Through command line, Cypress runs in headless in electron

Update configurations in cypress.json which over rides existing behaviour.

Cypress supports Css selectors only

We can see what happened on every step with screenshot and error messages in cypress
how to handle click, type, text()

Iterating over the aray of web elements using each

Cypress is asynchronus in nature and there is no guarantee in sequence of execution, but cypress takes care of it 

Promise comes with rejection, resolved,pending
.then()

Non cypress commands cannot resolve promise by themselves. We need to manually resolve it by then ()

Aliasing to reuse locators- 

Cypress auto accepts alerts and pop ups

Cypress have capability of browser events. window:alert is the event which get fired on alert open

So you are firing the event through cypress to get access to that alert

Cypress have ability to manipulate the DOM-

Yes you can traverse to sibling with next() and it works only on get

Mouse hover events are not supported in cypres. Alternatively use jquery or force click
