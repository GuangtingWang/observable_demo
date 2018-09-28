import { Observable } from 'rxjs/Observable';
// Basics
const observable = Observable.create( (observer:any) => {
    try{
        observer.next('hey guys!');
        observer.next('how are you?');
        setInterval(() => observer.next('i am good'),1000)
        // observer.complete();
        observer.next('not send');
    }
    catch(err) {
        observer.error(err);
    }
});
var observer = observable.subscribe(
    (x:any) => addItem(x),
    (error: any) => addItem(error),
    () => addItem('completed')
)
// Create multiple observers
setTimeout(() => observer.unsubscribe(),4001);
    












function addItem(val:any) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById('output').appendChild(node);
}