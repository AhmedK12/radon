#include <bits/stdc++.h>
using namespace std;
int aray[100000];


vector<int> solution(vector<int> inputs){
    vector<int> output;
    for (int i = 0; i < inputs.size(); i++)
    {
       output.push_back(aray[aray[i]]);
    }

}


int main(){
    vector<int> inputs;
    
    
    int n;
    cin>>n;
    for(int i=0;i<n;i++){
        int a;
        cin>>a;
        inputs.push_back(a);
        aray[i] = a;
    }
    
    
}
