class ranking{
    constructor(){
        //this.input = createInput("tabla");
        this.title = createElement("h1")
        this.ranking1 = createElement("h3");
        this.ranking2 = createElement("h3");
        this.ranking3 = createElement("h3");
        this.ranking4 = createElement("h3");
    }

    display(){
        //this.input.position(displayWidth/2, displayHeight-500);
        this.ranking1.position(displayWidth/4, displayHeight-400);
        this.ranking2.position(displayWidth/4, displayHeight-550);
        this.ranking3.position(displayWidth/4, displayHeight-600);
        this.ranking4.position(displayWidth/4, displayHeight-650);
        this.title.position(displayWidth/4, 0);
        this.title.html("RANKING")
        this.ranking1.html(player1.name + player1.rank);
        this.ranking2.html(player1.name + player2.rank);
        this.ranking3.html(player1.name + player3.rank);
        this.ranking4.html(player1.name + player4.rank);

    }




}