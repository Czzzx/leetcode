function print(n){
    setTimeout((() => {
        console.log(n);
    	return ()=>{};
  })(), Math.floor(Math.random() * 1000));
}
for(var i = 0; i < 100; i++){
    print(i);
}