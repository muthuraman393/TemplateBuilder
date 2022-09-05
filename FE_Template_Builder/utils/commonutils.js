export const israndomcolor = () =>
//"#" + ((1<<24)*Math.random() | 0).toString(16);
//'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
'rgb(' + (Math.floor((256-229)*Math.random()) + 230) + ',' + 
                                    (Math.floor((256-229)*Math.random()) + 230) + ',' + 
                                    (Math.floor((256-229)*Math.random()) + 230) + ')';


export const israndomlightcolor= () =>{
    /*var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;*/
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

