# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

  A) A functinal component is a basic JavaScript component that returns an element. A stateful component contains the state object and handles the changing of the state and user actions.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

  A) A componentWillMount function is called when the app first renders to the DOM (it is only called once). A componentWillUpdate function will be called when the state of whatever is in the dependency array changes.

3. Define stateful logic.

    A) Stateful logic is any code that can use state. It can be put into a hook and be used by many components and it can perform changes to the independent parts of state.

4. What are the three step of creating a successful test? What is done in each phase?

  A) The first step is 'Arrange' where you render the component you want to test. Second, 'Act' where you select your identifiers and do something with them (i.e. grab a text input and type something into it). Finally the third step is 'Assert' where you actually test things. For example, this is where you test that something you selected actually apears.
