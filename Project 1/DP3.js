function Jason() {
    var schooler = {
        requestInfo: function() {
            
            
            var sName = this.sName();
            sName.on("complete", function(location) {
                
                var lSelect = this.selectL(location);
                lSelect.on("save", function(location) {
                    lSelect.save();
                });
                
            });
        }
    };
    
    schooler.execute("save", "Jason", "princeton");
    schooler.execute = function(haha)
    {
        return schooler[haha];
    };
    
    schooler.execute("complete", "jaifb", "newark");
}
console.log(Jason);
