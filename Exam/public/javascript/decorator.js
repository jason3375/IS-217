function Computer ()
{
    this.cost = function () { return 1000; };
    this.screensize = function () { return 11; };
    this.harddrivesize = function() { return 128; };
    this.memsize = function () { return 8; };
}

function screen ( computer )
{
    var a = computer.cost();
    computer.cost = function ()
    {
        return a + 200;
    };
}

function drive ( computer )
{
    var a = computer.cost();
    computer.cost = function ()
    {
        return a + 200;
    };
}

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

