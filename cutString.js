a = "abcd"

//결과물은 대동소이.
a.slice(1)
a.slice(1,2)
a.substr(1)
a.substr(1,2)
a.substring(1)
a.substring(1,2)

//뒤에 있는것만 자르고 싶으면??
a.slice(0, -1)
//또는
a.substr(1, a.length-1)

//https://tecadmin.net/remove-last-character-from-string-in-javascript/