/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let twoSum = function (nums, target) {

    const map = new Map();

    for (let i=0; i < nums.length; i++) {
        const complemant = target - nums[i]

        if (map.has(complemant)) {

            return [map.get(complemant), i]

        } else {
            map.set(nums[i],i)
        }

    }

return []
}