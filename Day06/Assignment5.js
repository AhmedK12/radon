function checkprime(n) {
    if(n==1)
       return false;
       if(n==2)
       return true;
       if(n==3)
       return true;
    for(let i=2;i*i<=n;i++){
        if(n%i==0)
         return false;
    }
    return true;
}
var count = 0;
for(let i=1;i<5000;i++){
   if(checkprime(i)&&count++<51)
      console.log(`Prime: ${i}`);
}