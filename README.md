A HelloWorld website using express

from [Udemy Course](https://www.udemy.com/course/learn-nodejs-by-building-10-projects/)
Uses Node, Jade template engine, bootstrap
# Web app with Node.js Express

Express is a simple non-opinionated web framework on the Node.js platform. Here are the steps to build a simple web app with Express


## Build a central router file
  Build a routing file called `app.js` that is the jump-off points for various views. For example the following is the router code to the `about page`

  ```
  app.get('/about', function(req, res){  
    res.render('about', {title: 'About BlueOrange'});  
  });
```

  ### Add view files
  The view files themselves are written under the `views/**` folder. Use the [Jade Templating Engine](https://jade-lang.com/) for each of the view files. An example for the about page looks like the following:

  ```
  extends layout  
  
  block content  
   h3 #{title}  
   p This is the contact us page
  ```
Jade is indentation specific. Choose and stick to your choice of `tabs` or `spaces`. 

## Styling comes from bootstrap
Styling comes from [Bootstrap](getbootstrap.com) and sits under `public/css/`. You just need `boostrap.css`. The layout will be defined in the [layout.jade](https://github.com/harpreetsingh/basic-express/blob/main/views/layout.jade). 

Do the following to get to the layout.jade. 
1. Pick a component source from bootstrap. Say [navbar](https://getbootstrap.com/docs/5.1/examples/navbar-static/)
2. Simplify (prune) to get the key pieces in the component
3. Translate this simplified component through a [html to jade converter](https://html2jade.org/)

## Adding email to a web app with Nodemailer

Nodemailer is one of the most popular libraries to deliver emails with. There are a few things to do to login and send emails with gmail as your provider.

This sample doesn't use the recommended path (using Oauth2). To enable, gmail to allow username/password, you need to turn gmail to accept [less secure apps](https://myaccount.google.com/u/1/lesssecureapps). Once you set that up, you are able to login and send emails. 

Remember to turn this back off so that your account is not susceptible to being hacked.

You can see the code for setting up the transport options in [app.js](https://github.com/harpreetsingh/basic-express/blob/main/app.js)
# The Web App
![Home page](https://github.com/harpreetsingh/basic-express/blob/main/pics/home-page.png?raw=true)
![Contact us](https://github.com/harpreetsingh/basic-express/blob/main/pics/contact-us.png?raw=true)
# References
* Lesson #2 in [Course - Learn Nodejs by building 10 apps](https://www.udemy.com/course/learn-nodejs-by-building-10-projects/)
* [Views](https://github.com/harpreetsingh/basic-express/tree/main/views)
* [App.js router file](https://github.com/harpreetsingh/basic-express/blob/main/app.js)
* [Html2Jade converter](https://html2jade.org/)
* [Nodemailer](https://nodemailer.com/about/)