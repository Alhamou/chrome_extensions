
chrome.storage.onChanged.addListener(function(changes){
    try{
        var num = changes.list.newValue.length;
    }catch {
        var num = 0;
    }
    chrome.browserAction.setBadgeText({'text': num.toString() });
});