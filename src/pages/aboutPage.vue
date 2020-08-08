<template>
  <div>
    <br/>
    <img src="../assets/best-about-us.jpg" height="466" width="1164"/>
    
      <br/>
      <br/>
       <div id="Hello"> Hello everyone ! </div>
      <br/>
      <br/>
      
      <p>
      We are third-year students of Software and Information System Engineering, at the Ben-Gurion University.
      <br/>
      In the last 3 years we got experience in many different systems, languages and frameworks such as: Java, Pyhton, C#, C, C++, SQL and more.
        <br/>
         <br>
        This semester we took a web development course, which taught us some very usefull skills for industry such as:
        Html, Javascript, Node.Js and Vue.js.
        <br/>
        This recipes website is our final project for this course and it's based on all the things we've learned in web development.
      <br/>
       <br/>
        
        <u><strong>On our website the user can: </strong></u>
        <br/>
        <br/>
        - create an account,<br/>
        - explore random recipes on the main page,<br/>
        - look for a specific recipe,<br/>
        - add a recipe to his favorites ones,<br/>
        - watch the three last recipes he visited.<br/>
         
        <br/>
         <br/>   
               
         For the server side - we created an API and worked with <a style="color: rgba(238, 107, 107, 0.911)" href="https://spoonacular.com/food-api"><strong> spoonacular</strong></a> website to get recipes,
     <br/>
      along with using Azure DB to save some personal and family recipes of our own.

     <br/>  
      <br/>  
      This project was very challenging but also a lot of fun.
      <br/>
      The website is very simple, so anyone can use it and learn how to cook some new
        recipes, and even send us pictures of the results ;)
    <br/>
    <br/>
    <br>
    <br>

    
      <u><strong>Here you can find some previous projects we did: </strong></u>
      <br>
      <br>
      <a style="color: rgba(224, 140, 140, 0.911)" 
      href="https://sise-web-development-environments.github.io/assignment2-tali-tair/#welcome">Pacman Game</a>
      <br>

      <a style="color: rgba(224, 140, 140, 0.911)" 
      href="https://sise-web-development-environments.github.io/205788581/">Tali's Personal Site</a>
      <br>

      <a style="color: rgba(224, 140, 140, 0.911)"
      href="https://sise-web-development-environments.github.io/312464977/">Tair's Personal Site</a>
      <br>

      <a style="color: rgba(224, 140, 140, 0.911)"
      href="https://github.com/SISE-Web-Development-Environments/assignment-3-2-tair_tali">Assignment 3.2 - Recipes Website: Server Side</a>
      <br>

      <a style="color: rgba(224, 140, 140, 0.911)"
      href="https://github.com/SISE-Web-Development-Environments/assignment3-1-tair_tali">Assignment 3.1 - Recipes Website: Rest API</a>

<br>
<br>
    <br>


    <b-row>
      <b-col>
        <div class="card">
          <br/>
            <h1>Tali Schvartz</h1>
            <div id="mail">talisch@post.bgu.ac.il</div>
            <br/>
        </div>
      </b-col>

      <b-col>
        <div class="card">
          <br/>
            <h1>Tair Cohen</h1>
            <div id="mail">tairc@post.bgu.ac.il</div>
            <br/>
        </div>
      </b-col>
    </b-row>
    </p>
  </div>
</template>

<script>
    export default {
        name: "AboutPage"
    }
</script>

<style>

  p {
    text-align:center;
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: large;
  }

#Hello {
  font-size: 35px;
  text-align: center;
  font-family: "Comic Sans MS", cursive, sans-serif;
}
  .card {
    display: flex;
    align-items: center;
    align-content: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    /* color: black; */
    opacity: 0.5;
  }

/* .card .row {
  opacity: 0.5;
} */

  .container {
    padding: 0 16px;
    display: flex;
    justify-content: center;
  }

  h1{
    text-align: center;
    color:black;
    font-size: 40px;
    opacity: 100%;
  }


  #mail  {
    font-size: 20px;
    color: black; 
  }

    img {
    display: block;
    margin-right: auto;
    margin-left: auto;
  }


</style>