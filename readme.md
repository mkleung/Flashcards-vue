# VueJS Notes

Source:
https://youtu.be/8BgyPAeV7eU?si=FrTLsLB-FfEGc78t&t=10800

### Contents

- [x] 1. Introduction
- [x] 2. Basics
- [x] 3. Behind the scenes
- [x] 4. Conditional Rendering (V-if)
- [x] 5. List Rendering (v-for="item in items" :key="item.id")
- [x] 6. Event Handling (onClick="")
- [x] 7. Attribute Binding (v-bind:src="image")
- [x] 8. Form Input Binding (v-model)
- [x] 9. Computed Properties and Watchers (computed: {})
- [x] 10. Building FlashWord
- [x] 11. Vite Build System
- [x] 12. Single File Components
- [x] 13. Props and Events (this.$emit('eventname'))
- [ ] 13. Composition API
- [ ] 14. Dev Tools Wrap up

**Ajax**

- Webpage sends micro-requests to server (e.g get something from database) and instead of sending the whole page response (full html, css, etc), the server just send micro-response with necessary data that javascript can use to update the interface accordingly.

**Vue**

- Beginner friendly
- Easier to integrate with existing site
- Lightweight

**Virtual Dom**

- Document object model is a tree like structure for storing data and content.
- When a web page is parsed by a browser, a tree like data structure called the document object model is created.
- Using the DOM api, we can dynamically manipulate the DOM with javascript (example: `document.getElementsByClassName('list')[0].innerHTML = '<p>test</p>'`) but it costs a lot in processing and reduces the load time.
- Virtual DOM reduce performance cost by creating a javascript object with a mapping of your document structure.

**Reactivity**

- Allows the framework to automatically update the user interface when the underlying data changes
- Example: {{ variable }}

**Imperative programming (native javascript)**

- step by step orders to fix a problem
- Explicitly target elements on the DOM, sets up listener and specifies when output elemment is updated
- Bunch of click listeners which means just looking at html code, it is difficult to know that listeners are targetting
- e.g. `document.queryselector('button').addEventListener('click', checkAnswer);`

**Declarative programming (React, vue)**

- Does not use steps to solve a problem and does not manipulate the dom
- Ties data with text input and output
- Vue/React keeps them in sync
- Avoid the use of listeners, making it clearer to read code
- `<button onClick="checkAnswer()">Check Answer</button>`

**Computed properties**

- Dynamic properties that are automatically updated whenver their dependencies are updated
- Allows us to compose new data derived from other data similar to doing logic
- Example:

```
const Example = {
    data() {
        return {
            firstName: '',
            lastName: '',
        }
    },
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName;
        }
    }
}
<p>Hello {{ fullName }}</p>
```

**Watcher**

- Watchers allow you to dynamically update properties
- Use when you want to perform an action
- Example: once all the answers are good, display a message that shows "success"

```
 watch: {
        // When firstName changes, this function is invoked
        firstName(val) {
            this.fullName = val + ' ' + this.lastName;
        },
        // When lastName changes, this function is invoked
        lastName(val) {
            this.fullName = this.firstName + ' ' + val;
        }
    }
```

**Methods vs computed properties vs watchers**
* Methods: react to an event happening in the DOM (eg. mouse click)
* Computed properties: Reactively compose data based on changed to other data
* Watchers: React with some action to a property changing


**Hot Reloading**
* Makes changes to our javascript and instantly see the results reflected in the browser without having to refresh the page

**Tree Shaking**
* Reduces the size of javascript bundles by removing unused code from final build
* Improves performance

**Minification**
* Removes unnecessary characters from source code, like white spaces, variables and shortening variable names
* Reduces the file size and obfuscates the code

**Chunk Splitting**
* Breaks large chunks of code into smaller ones
* Enables asynchronous loading of multiple smaller chunks instead of one large chunk
* Enables caching

**Vite**

```npm create vite@latest```


**Props**
* pass data from parent to child component

**Events**
* Pass data from child to parent component
* `this.$emit('eventname')`
* `v-on:incrementCorrectCount="method"` on parent component