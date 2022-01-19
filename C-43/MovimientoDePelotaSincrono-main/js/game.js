class game{//llave game
    constructor(){//llave cons
        
    }//lave cons
    getState(){//llave state
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState= data.val();
            console.log("game state de la función getstate", gameState);
        });

        
    }//llave state
    update(state){ //lave update
        database.ref("/").update({gameState: state});
        console.log("game state de la funcion update", gameState);
    } //llave update
    async start(){ //llave start
        if (gameState === 0){ //llave start/if1
            player1 = new player();                  
            var playerCountRef = await database.ref('playerCount').once("value"); 
            if (playerCountRef.exists()){ //llave start/if2
                playerCount = playerCountRef.val();
                player1.getCount();
            } //llave start/if2

            
            form1 = new form();
            form1.display();
            } //llave start/if1
            car1 = createSprite(100,200,50,50);
            car2 = createSprite(200,200,50,50);
            car3 = createSprite(300,200,50,50);
            car4 = createSprite(400,200,50,50);
            car1.addImage("car1", car1IM);
            car2.addImage("car2", car2IM);
            car3.addImage("car3", car3IM);
            car4.addImage("car4", car4IM);
            cars = [car1,car2,car3,car4];

   } //llave start
   
   play(){ //llave play

       
       form1.hide();
       textSize(30);
       text("inicia el juego", displayWidth/2,displayHeight+150);
       player.getPlayerInfo();
       player1.getCarsAtEnd();
      
       if(allPlayers !== undefined){ //llave play/if1
           image(track1, 0 , - displayHeight * 4, displayWidth, displayHeight * 5 );
           var index= 0;
           var x= 175;
           var y;
           //var displayPosition = 130; 

           for(var plr in allPlayers){//llave play/for
               index = index +1;
               x = x + 200;
               y = displayHeight -allPlayers[plr].distance;
               cars[index-1].x = x;
               cars[index-1].y = y;
            
           if (index===player1.index){ //llave play/if2
            cars[index-1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y;
           }//llave play/if2
        } //llave play/for

    } //llave play/if1
           if(keyIsDown(UP_ARROW) && player1.index !== null){ //llave keyd
               player1.distance += 50;
               player1.update();
           } //llave keyd
       
          if(player1.distance > 2500 ){//llave if distancia
            console.log("distancia del jugador antes");
            gameState = 2;
            player1.rank +=1;
            player.updateCarsAtEnd(player1.rank);
            console.log("distancia del jugador después");
            console.log("estado actual del juego", gameState);

          }//llve if distancia
          
          
           drawSprites();
   } //llave play



   end(){//llave end
      
    console.log("el juego terminó");
    console.log("ranking = ", player1.rank);
    console.log("ranking empieza");
    objetoDeRanking.display();
    console.log("ranking termina");

   }//llave end

  
      
   
   } //llave game
