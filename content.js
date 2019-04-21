(function(){


    $('#send').on('click', function (e){

        var text = $('#type_name').val();
        console.log(text);
        chrome.storage.sync.get('list', function (items){
            
            let data = [...items.list || [] ,...[{ "title": text }]];
            
            chrome.storage.sync.set({ list:data});

            $('ul').append(`
            <li>${text}</li>
            `);

            $('#type_name').val('');
        });
    
    });
    chrome.storage.sync.get('list', function (items){
        items.list.forEach(element => {
            $('ul').append(`
            <li>${element.title}</li>
            `);
        });
        
    });

    $('#delete').on('click', function (){
        $('ul').empty();
        chrome.storage.sync.remove('list');
    });

})()
