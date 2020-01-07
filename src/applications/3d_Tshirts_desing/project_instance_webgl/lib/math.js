
function boolToNum( b ) {

  return b ? 1 : 0;

}

function decimalToHex( d ) {

  var hex = Number( d ).toString( 16 );
  hex = "000000".substr( 0, 6 - hex.length ) + hex;
  return hex.toUpperCase();

}

Array.prototype.unset = function(value) {
  if(this.indexOf(value) != -1) {
    this.splice(this.indexOf(value), 1);
  }   
};
			
function isOdd(num) { return num % 2;}
			
//###############################################//###############################################
//###############################################//###############################################
//GET PULSE VALUES IN REAL TIME
//###############################################//###############################################
//###############################################//###############################################
function OSCILLATOR (min , max , step) {

  if ((typeof min === "string" || typeof min === "number" ) &&  (typeof max === "string" || typeof max === "number" ) && (typeof step === "string" || typeof step === "number" )) {	
	
    this.min = parseFloat(min);
    this.max = parseFloat(max);
    this.step = parseFloat(step);
    this.value_ = parseFloat(min);
    this.status = 0;
    this.UPDATE = function(STATUS_){
      if (STATUS_ === undefined) {
        if (this.status == 0 && this.value_ < this.max) {
          this.value_ = this.value_  + this.step;
          if (this.value_ >= this.max){ this.value_ = this.max ; this.status = 1;}
          return this.value_;
        }
        else if (this.status == 1 && this.value_ > this.min) {
          this.value_ = this.value_  - this.step;
          if (this.value_ <= this.min){ this.value_ = this.min ; this.status = 0;}
          return this.value_;
        }
      }else {
        return this.value_;
      }
    };

  }else {
	
    console.log( "SYS : warning for procedure 'SYS.MATH.OSCILLATOR'  Desciption : Replace object with string or number,  min >> "+typeof min+" and max >>"+typeof max+"  and step >>"+typeof step+" << must be string or number.");

  }

}
