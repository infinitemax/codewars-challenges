function spinWords(string){
  //TODO Have fun :)

    return string.split(' ').map(
      (e, i) => e.length > 4 ? e = e.split('').reverse().join('') : e = e
    ).join(' ')
          
}

/*
This is a new version using map, reverse, and the conditional (ternary) operator, inspired by others people had
done on CW. It's complex but I'm glad it works!
Bascially, it splits the string into an array of words, then applies the map function, which says where the element (e)
is > 5
*/