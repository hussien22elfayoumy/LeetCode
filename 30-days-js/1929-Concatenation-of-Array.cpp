class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        int n = nums.size();
        nums.resize(n * 2);
        for(int i = 0; i < n; i++) {
            nums[i + n] = nums[i];
        }
        return nums;
    }
};