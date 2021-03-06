/*
Given a string, find the length of the longest substring without repeating characters.

Examples:
Given "abcabcbb", the answer is "abc", which the length is 3.
Given "bbbbb", the answer is "b", with the length of 1.
Given "pwwkew", the answer is "wke", with the length of 3. 
    Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function(s) {
    var max = 0;
	var hash = {};
	for(var i = 0, j = 0; i < s.length; i++){
		if(hash[s.charAt(i)] !== undefined){
			j = Math.max(j, hash[s.charAt(i)]+1);
		}
		hash[s.charAt(i)] = i;
		max = Math.max(max, i - j + 1);
	}
	return max;
};