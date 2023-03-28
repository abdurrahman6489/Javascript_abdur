export default class API{
    #secure = false;
    url;
    method = 'GET';
    constructor(url){
        this.url = url;
    }
    isSecure(){
        return (this.secure===true);
    }
    updateUrl(url){
        this.url = url;
        let urlArray = url.split(":");
        if(urlArray[0]==="https")
            this.secure = true;
        else if(urlArray[0]==="http")
            this.secure = false;
    }
}