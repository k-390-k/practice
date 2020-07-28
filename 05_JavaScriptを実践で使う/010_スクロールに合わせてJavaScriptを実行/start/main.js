//1.メソッドの関数式を作成する
//2.監視したいオブジェクトを変数として用いる
//3.作成した変数に監視対象のオブジェクトを指定する

const cb = function(entries, observer){
    entries.forEach(entry){
        if(entry.isInterSecting){
        //true
        console.log('in view');
        }
        else{
        // false
        console.log('out view');
        }

    }
}

//1.メソッドの関数式を作成する
const io = new IntersectionObserver(cb);

//2.監視したいオブジェクトを変数として用いる
const child = window.document.querySelector('.child');


//3.作成した変数に監視対象のオブジェクトを指定する
io.observe(child);

// インターセクションオブザーバーメソッドには２つの関数を指定することができる。
//→entries observer