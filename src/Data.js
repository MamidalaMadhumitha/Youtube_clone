//Api key
export const API_KEY ='AIzaSyBKvVbEtyAtAjEKtSmC0a5IYimD6lntK3g'

// By using value _convertor can decrease the value by value in millions and thousands
 export const value_convertor = (value)=>{
    if(value>100000){
        return Math.floor(value/100000)+"M";
    }
    else if(value>1000){
        return Math.floor(value/1000)+"k";
    }
    else {
       return value;
    }
}