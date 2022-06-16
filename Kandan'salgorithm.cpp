// Given an array Arr[] of N integers.
// Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.

#include<bits/stdc++.h>
using namespace std;



// O(n) DP Cadan's Algorithm

long long kadaneAlgorithm(long long arr[],long long n){
    long long current_sum = 0;
    long long overall_sum = INT64_MIN;
    int l,r;
    for(int i=0;i<n;i++){
        // if(current_sum<(current_sum + arr[i]))
        //     current_sum = arr[i];
        // else{
        //     current_sum+=arr[i];
        // }
        current_sum+=arr[i];
        if(current_sum<arr[i])
          l = i;
        current_sum= max(current_sum,arr[i]);
        if(current_sum>overall_sum){
            r=i;
            overall_sum = current_sum;
        }
        
    }
    cout<<l<<"  "<<r<<"\n";
    return overall_sum;
}



// O(nlogn) divide and Conquer
long dac(int arr[], int l, int r){
    if(l==r){
        return arr[l];
    }

    int mid = (l+r)/2;
    long long sum_l = 0,sum_r = 0, sum = 0;
    sum_l = dac(arr,l,mid); // if ans in left part
    sum_r = dac(arr,mid+1,r); // if ans in right part

    // Case Third ans in left and right

    long long max1 = 0, temp = 0;
    for(int i=mid;i>=l;i--){
        temp += arr[i];
        if(temp>max1)
           max1 = temp;
    }
  sum = max1;
  max1 = 0 , temp=0;

    for(int i=mid+1;i<=r;i++){
        temp += arr[i];
        if(temp>max1)
           max1 = temp;
    }
    sum +=temp;

    return max(sum,max(sum_l,sum_r));

}




// O(n^2)
int kdn (int arr[],int n){

    long long sumfinal = INT64_MIN;
    int final_l=0,final_r=0;
    for(int i=0;i<n;i++){
        int l,r;
        long long  p_sum = -100000000, c_sum = 0;
        for(int j=i;j<n;j++){
            c_sum +=arr[j];
            if(c_sum>p_sum){
                p_sum = c_sum;
                cout<<p_sum<<"\n";
            }
           
        }

        // if(Sum>sumfinal){
        //     final_l = l;
        //     final_r = r;
        // }
        sumfinal = max(sumfinal,p_sum);
    }
    // cout<<final_l<<"   "<<final_r<<"\n";
    return sumfinal;

}



// O(n^3)
int kdnalgrtm (int arr[],int n){
    int sumfinal = 0;
    int final_l=0,final_r=0;
    for(int i=0;i<n;i++){
        int l,r;
        int Sum=0;
        for(int j=i;j<n;j++){
            int sum = 0;
            for(int k=i;k<=j;k++){
              sum+=arr[k];
            }

            
            if(sum>Sum){
                l = i;
                r = j;
            }
            Sum = max(Sum,sum);
        }

        if(Sum>sumfinal){
            final_l = l;
            final_r = r;
        }
        sumfinal = max(sumfinal,Sum);
    }
    cout<<final_l<<"   "<<final_r<<"\n";
    return sumfinal;
}


int main(){
  long long Arr[] = {1,-2,3,-2,5} , n=5;
  cout<<kadaneAlgorithm(Arr,n);
}