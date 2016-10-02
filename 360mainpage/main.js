requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        shops:'shops',
        jquery:'jquery',
        handler:'handler',
        getnum:'getnum',
        quanju:'quanju',
    },
    shim :{
        'tool':{
            exports:"lw"
        }
    }
});

require(['shops'],function(s){
    s.listshop();
    s.imgturn();
    s.secondmenu();
    s.gohead();
    s.newsearch();
});