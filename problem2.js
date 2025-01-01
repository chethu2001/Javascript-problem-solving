//question No.2

//You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
let array = [1,8,4,5,8,6,7,8,9,10];//[1,4,5,3,6],[1,9,5,8],[1,8]

var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        maxArea = Math.max(maxArea, (right - left) * Math.min(height[left], height[right]));
    
        if (height[left] < height[right]) {
                left++;
        } else {
                right--;
            }
        }
    
    //return maxArea;    
    console.log(maxArea);
};

            
            


        
   


  




maxArea(array);