// Given an array of N integers arr[] where each element represents the max number of steps that can be made forward from that element.
//  Find the minimum number of jumps to reach the end of the array (starting from the first element).
//  If an element is 0, then you cannot move through that element.
// Note: Return -1 if you can't reach the end of the array.


#include<bits/stdc++.h>
using namespace std;


 int minJumps(int arr[], int n){
      
      int i=0,end=0,maxrange=0;
      int ans = 0;
      for(i;i<n-1;i++){

         maxrange = max(maxrange,arr[i]+i);

         if(end==i){
            end = maxrange;
            ans++;
         }

      }
      if(end<n-1)
       ans = -1;
      return ans;
   }



int main(){
    int a[]= {0, 4, 5, 8, 9, 2, 6, 7, 6, 8, 9};
   cout<<minJumps(a, 11);
}