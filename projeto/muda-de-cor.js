var trs = document.getElementsByTagName('tr');

percorreArray(trs, function(tr){
    tr.addEventListener('mouseover', function(){

        this.setAttribute('bgcolor', 'gray');
    });

    tr.addEventListener('mouseout', function(){
        this.setAttribute('bgcolor', 'white');
    });
});
