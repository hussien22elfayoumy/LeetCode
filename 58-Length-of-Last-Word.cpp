class Solution {
public:
    int lengthOfLastWord(string s) {
        bool found_last = false;
        int count = 0;
        for (int i = s.length() - 1; i >= 0; i--) {
            if (s[i] != ' ') {
                count++;
                found_last = true;
            } else if (s[i] == ' ' && found_last) {
                break;
            }
        }
        return count;
    }
};