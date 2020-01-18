
/**
 * Retorne o segundo maior número da matriz.
 * @param {Number []} nums = Uma matriz de números.
 * @return {Number} O segundo maior número da matriz.
 **/
function getSecondLargest(nums) {
    let first = 0;
    let second = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > first) {
            first = nums[i];
        } else if ((nums[i] > second) && (nums[i] != first)) {
            second = nums[i];
        }
    }

    console.log(second);
}
