/**
 * 操作dom相关的api封装
 */

 export function addClass(ele,className){
    if(hasClass(ele,className)){
        return
    }else{
        let newClass = ele.className.split(' ');
        newClass.push(className);
        ele.className = newClass.join('');
    }
 }

 export function hasClass(ele,className){
     let reg = new RegExp('(^|\\s)'+className+'(\\s|$)');//以className开头或者以空白+className开头  以空白（或者没有空白 ）结尾
     return reg.test(ele.className);
 }

 export function getData(el,name,val){
     let prefix = 'data-';
     name = prefix + name;
    if(val){
        return el.setAttribute(name);
    }
    return el.getAttribute(name);
 }