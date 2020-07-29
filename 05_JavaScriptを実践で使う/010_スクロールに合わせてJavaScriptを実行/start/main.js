//④コールバック関数を作成する
const cb = function(entries, observer){
   entries.forEach(entry => {
       if(entry.isIntersecting){
           entry.target.classlist.add('inview');
       }else{
           entry.target.classlist.remove('inview');
       }
});

//③ DOMで監視対象のインスタンスを生成する

const child = window.document.querySelector('.child');

//①IntersectionObserverクラスのオブジェクトをインスタンス化する
const io = new IntersectionObserver(cb);

//② インスタンスオブジェクトにobserveメソッドで監視対象のクラスを指定する。
io.observe(child);