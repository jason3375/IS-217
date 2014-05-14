/**
 * The first part is a constructor that is used so that we can create
 * new objects from Computer. I pick this design pattern because it fits
 * very well with the decorator pattern
 */
function Computer ()
{
    this.cost = function () { return 1000; };
    this.screensize = function () { return 11; };
    this.hardsize = function() { return 128; };
    this.memsize = function () { return 8; };
}

//First Decoration

function screen ( computer )
{
    var a = computer.cost();
    computer.cost = function ()
    {
        return a + 200;
    };
}

//Second Decoration

function drive ( computer )
{
    var a = computer.cost();
    computer.cost = function ()
    {
        return a + 200;
    };
}

//Third decoration

function memory ( computer )
{
    var a = computer.cost();
    computer.cost = function ()
    {
        return a + 200;
    };
}

var cpu = new Computer();
screen(cpu);
drive(cpu);
memory(cpu);

