---
title:
- Technologies for Web and Social Media - Hamsterchan
author:
- Daniel Kartin
---

# Introduction

This website was built using EmberJS, and the accompanying server was built using node.js the database is a noSQL mongoDB cluster hosted on atlas.

## Emberjs

Emberjs is a javascript framework much akin to angular and react, but with a much better looking mascot.

![The Emberjs mascot, Tomster](tomster.png){height=150px}

Mostly I went with Emberjs instead of Angular due to the documentation, syntax, and ease of use.\newpage

# Purpose

The purpose of this webpage is for connecting people who share a passion for hamsters, who with a title, image, and description can take part in the hamster culture. I initially begun work on implementing comments, but after much fiddling couldn't get it to work with the database schema.

# The Technologies

Starting off with the frontend, Emberjs makes it quick to create something tangible, as it creates routing automatically, and has many addons that enables functionality like sass or scss. Emberjs pages are consisting of templates that are writing in the hbs (handlebars) format.

For creating the main page, where the newest 50 posts are being displayed, a sort of for loop was created, where we iterate over each post in the data, from ember.data. And creates the post taking in the `post.id`, `post.image`, `post.title`, and `post.text` to fill in each post with content.

```javascript
{{#each this.model as |post|}}
     <div class="post_container">
         <p class="post_id">Id: {{post.id}}</p>
         <img src="{{post.image}}" class="post_image" 
         style='max-width: 200px; max-height: 200px;'>
         h1 class="post_title">{{post.title}}</h1>
         <h3 class="post_text">{{post.text}}</h3>
     </div>
```

And ember even allows for else statements, where if no posts were found, it shows an empty post, urging the user to create the first post.

```javascript
{{else}}
	<div class="post_container">
		<img src="image url" class="post_image" 
		style='max-width: 200px;max-height: 200px;'>
	    <h1 class="post_title">No posts have been made yet</h1>
		<h3 class="post_text">Hurry up and create the first post</h3>
	</div>
{{/each}}
```

So far it has only been about showing the content of the database on the frontend, but how does one make a new post, you might ask. Why, with the new post button of course. A simple form, saving the values in their desired variables, to be used in the ajax request.

```javascript
Title: {{input value=title}} <br>
Image url: {{input value=image}} <br>
Text: {{textarea value=text}} <br>
<input type="submit" {{action "sendRequest" title image text}}>
```


```javascript
if(title.length > 5 && text.length > 20) {
    this.get('ajax').request('https://web-miniproject-
	server.herokuapp.com/api/posts', {
        method: 'POST',
        data: {
        post: {
            title: title,
            image: image,
            text: text
    	}
	}
});
```