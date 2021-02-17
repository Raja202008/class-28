//box is a child class for the Base Class
class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
  }

};
