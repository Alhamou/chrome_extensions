   

var opj ={
    "id": "id_Save",
    "title" : "Save",
    "contexts": ["all"] 
}


chrome.contextMenus.create(opj);


chrome.contextMenus.onClicked.addListener(function (clickData){
    // clickData.linkUrl
    console.log('Click Data', clickData)

});