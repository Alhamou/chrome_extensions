(function(){


    $('#send').on('click', function (e){

        var text = $('#type_name').val();
        console.log(text);
        chrome.storage.sync.get('list', function (items){
            
            let data = [...items.list || [] ,...[{ "title": text }]];
            
            chrome.storage.sync.set({ list:data});

        });
    
    });
    chrome.storage.sync.get('list', function (items){
        console.table(items);
    });

})()
