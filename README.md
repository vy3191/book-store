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





