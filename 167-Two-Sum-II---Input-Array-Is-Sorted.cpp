;
class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int start = 0;
        int end = numbers.size() - 1;
        vector<int> ans;

        while (start < end) {
            int sum = numbers[start] + numbers[end];
            if (sum == target) {
                ans = {++start, ++end};
                break;
            }
            if (sum < target)
                start++;
            else
                end--;
        }
        return ans;
    }
};