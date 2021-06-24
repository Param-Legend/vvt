class Food{
    constructor(){
        var foodStock;
        var lastFed;
        this.image = loadImage("milk.png");
    }

    display(){
        var x=80,y=80;

        imageMode(CENTER);
        image(this.image,720,220,70,70);

      if(this.foodStock!=0)
          for(var i=0; i<this.foodStock;i++){
              if(i%10==0){
                x=80;
                y=y+70;
              }
              image(this.image,x,y,50,50);
                x=x+50;
             }
    }
    getFoodStock(){ 
        return this.foodStock;
    }
    updateFoodStock(foodStock){
        this.foodStock = foodStock;
    }
    deductFood(){
        if(this.foodStock > 0){
          this.foodStock=this.foodStock-1;
        }
    }
    bedroom(){
        background(bedroom,550,500);
    }
    washroom(){
        background(washroom,550,500);
    }
    garden(){
        background(garden,550,500);
    }
}
