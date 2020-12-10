Dependencies and dev-dependencies list:-

react react-dom react-router-dom react-redux redux-saga history redux redux-saga connected-react-router
__________________________________________________________________________________________________________
webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react 
__________________________________________________________________________________________________________
css-loader style-loader sass-loader node-sass

If we are planning to implement spa with routing, we need history library to keep browser routing history of our application.
We use three types of history in spa.
1. Browser history
2. Memory history
3. Hash history

Browser History:- 
1.If you want to ensure our application have improved SEO, we need to use Browser history
2.Some clients prefer not change their legacy urls, and still want to implement SPA

Hash history:-
1. If you do not want to add additional configurations to the server, we use hash history

<!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
Any SPA:
VIEW:
=====
1. history management in browser (Browser history, Hash history, Memory history or Native history)
[].push('stackoverflow.com/mmmmm').push('google.com')
2. routing
3. view part - React (view library), Vue (view library)
Behind the Browser Scene:
=========================
To show dynamic data in UI, we have two option:
    a. Post resolving the promise, we will set the data in the component level itself.
    b. Using third party state management libraries like flux, redux, mobx. eg for redux Private variable called '_store = {}'
4. Choose a correct state management library for Enterprise Application
To handle asynchronous network calls/any asynchronous action
    a. third party libraries like redux-promise-middleware, redux-saga, redux-thunk. if you implement any service in UI, then it will dependent with any XHR wrapper like axios/fetch
5. Choose framework or third library to handle asynchronous.
    1. axios/fetch
    2. async/await to retrieve the promise response like synchronous
  






