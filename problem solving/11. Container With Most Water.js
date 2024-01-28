/**
 * using two pointer
 */
var maxArea = function(a) {
    let ans=0, l=0, r=a.length-1;
    while (l < r) {
        ans=Math.max(ans, Math.min(a[l], a[r])*Math.abs(l-r));
        if (a[l] < a[r]) l++;
        else r--;
    }

    return ans;
};