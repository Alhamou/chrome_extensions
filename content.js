(function(){


    $('#send').on('click', function (){

        var text = $('#type_name').val();
        if (text){

            chrome.storage.sync.get('list', function (items){
                
                let data = [...items.list || [] ,...[{ "title":  text}]];
                
                chrome.storage.sync.set({ list:data});
    
                $('ul').append(`<li>${text}</li>`);
    
                $('#type_name').val('');
            });
        }
    
    });
    chrome.storage.sync.get('list', function (items){
        try{
            items.list.forEach(element => {
                $('ul').append(`
                <li>${element.title}</li>
                `);
            });
        } catch {}
        
    });

    $('#delete').on('click', function (){
        $('ul').empty();
        chrome.storage.sync.remove('list');

        var opt = {
            type: "basic",
            title: "Actension Title",
            message: "Primary message to display",
            iconUrl: "icon.png"
          }
          chrome.notifications.create("delete",opt);

    });

})()
