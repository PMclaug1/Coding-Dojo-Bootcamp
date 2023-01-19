

    height = [1,8,6,2,5,4,8,3,7]

    var maxArea = function(height) {

        let i = 0
        let j = height.length - 1
        let max = 0
        let area = 0

        while(i < j) {
            area = (j-i) * Math.min(height[i], height[j])

            max = Math.max(area,max)

            height[i] < height[j] ? i++ : j--
        }
        console.log(max)
        return max
    };

    maxArea(height)