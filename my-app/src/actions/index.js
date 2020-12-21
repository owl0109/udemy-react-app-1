//Action = Javascriptのオブジェクトのこと
//typeキーとそれに対応する値を持つ
//typeキーの値はユニークである必要がある
//actionを返す関数=>ActionCreater

//component側で使用するのでexport

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () =>({
     type: 'INCREMENT'
})


//component側で使用するのでexport
export const decrement = () =>({
    type: 'DECREMENT'
})

