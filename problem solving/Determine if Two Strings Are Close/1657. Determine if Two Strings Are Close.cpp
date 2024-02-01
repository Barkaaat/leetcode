class Solution {
public:
    bool closeStrings(string word1, string word2) {
        vector<int> frq1(26), frq2(26);
        for (auto it:word1) frq1[it-'a']++;
        for (auto it:word2) frq2[it-'a']++;
        
        for (char i=0; i<26; i++) {
            if (!!frq1[i] != !!frq2[i]) {
                return false;
            }
        }

        sort(frq1.begin(), frq1.end());
        sort(frq2.begin(), frq2.end());
        
        return frq1 == frq2;
    }
};