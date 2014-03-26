function Patient(fName, lName, DoB)
{
    this.fName = fName;
    this.lName = lName;
    this.DoB = DoB;
}

Patient.prototype.toString = function ()
{
    return "The patients name is " + this.fName + " " + this.lName + " and the DOB is " + this.DoB;
};

var p1 = new Patient("Jason", "Kornegay", 04111990);
var p2 = new Patient("Joe", "Smith" , 01011944);

p1.setAge = function( age )
{
    this.age = age;
};

p1.setWeight = function( weight )
{
    this.weight = weight;
};

p1.setAge(23);
p1.setWeight(155);

p2.setAge = function( age )
{
    this.age = age;
};

p2.setWeight = function( weight )
{
    this.weight = weight;
};

p2.setAge(30);
p2.setWeight(175);



console.log( p1 );
console.log( p2 );
console.log(p1.toString());
console.log(p2.toString());

