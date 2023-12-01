class Block{

  constructor(data){
    // ...
    this.width = data[0],
    this.length = data[1],
    this.height = data[2]
  }
  
  getWidth(){
    return this.width;
  }
  
  getLength(){
    return this.length;
  }
  
  getHeight(){
    return this.height;
  }
  
  getVolume(){
    return this.width * this.length * this.height;
  }
  
  getSurfaceArea(){
    let ends = (this.width * this.height) * 2;
    let bottoms = (this.width * this.length) * 2;
    let sides = (this.length * this.height) * 2;
    
    return ends + bottoms + sides;
  }
  
};