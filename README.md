# SavloAndQuiz

##Description
Two simple games including a different version of battleship and a trivia game on Hamlet.

I am going to make a game of battleship which can be played by one or two people. Battleship is a game based on two players having two separate seven by seven grids. Each player has a lone duck. Each duck occupies three spaces. The goal of the game is to properly eliminate the opponent's duck before they do the same to your duck.


(Over the weekend) I am also going to make a trivia game using Hamlet as the primary source material for questions. There will be twenty individual questions. Each player tries to answer the question. If player A is incorrect, then player B may try to answer that question. For each correct answer, the player receives a point. The winner is the person who receives the most points.


##Technology Used
 - Javascript
 - HTML
 - CSS
 - Voice command module (will be used)

##How it works

#### Battleship Explanation:
For the battleship game, I am going to create a seven by seven grid using javascript. I created table variables and used 'for loops' in order to create both my 'tr', or columns, and my 'td', or table dividers. I was able to apply a unique ID to each 'td' element via the code "td.id = 's' + i + j."

ex. <tr>
      <td id="s11"></td>
      <td id="s12"></td>
      <td id="s13"></td>
      <td id="s14"></td>
      <td id="s15"></td>
      <td id="s16"></td>
      <td id="s17"></td>
  </tr>


In order to make the 'td' elements change color, I created the function switchColor(). I created two separate empty arrays 'targets1' and 'targets2.' Within these two arrays I used for loops to call all of the pre-created and uniquely id'd 'td's. I added an event listener for a click which linked to another function called changeColor. It was within this last function that I placed the variables which served as my ships. For each variable, I added the class 'hiddenA' or 'hiddenB'. Using an if...else clause, I checked if the click was on a tile with a hidden clause. If so, the tile would turn red and an alert would appear telling if the alpha or beta duck had been hit. If not, the tile would turn grey, indicating a miss and an end to his turn.

####trivia
  I was unable to compete the trivia game. In the HTML, I organized the page so that there would be three other pages attached the CSS and two JS pages. One JS page would contain the questions, the other would list the commands in order to execute the questions. I hope to complete this trivia over the weekend.


##Unresolved Problems
  While I had hopped to make both the Battleship and trivia games, I had an extremely difficult time making a grid which was clickable without becoming DRY or time consuming. I spent too much time, reviewing other source materials rather than making several tests then rebuilding. Ironically, the multitude of source material was more confusing than helpful at time.
  However, this version is only 1.0. :-) I need to find a way to make an alert when one player's ship has been destroyed. I also need to find a way to log that victory in an array and display the number of wins or loses for each player, Alpha and Beta. I will also find a less DRY way to make several game ships rather than listing each piece individually. I also wanted to make a game axis which listed the number and letter of the coordinate. There is much room for improvement; however, I know that I will make the necessary changes.

##Link:
https://20duffys.github.io/Salvo/
