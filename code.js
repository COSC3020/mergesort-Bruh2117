function mergesort(array) {
    
    var length = array.length; 
    
    for (var size = 1; size < length; size *= 2)
    {
        for (var left = 0; left < length; left += 2*size)
        {
            var mid = Math.min(left + (size - 1), length - 1); 
            var right = Math.min(left + 2(size - 1), length - 1); 
            merge(array, left, mid, right);
        }
    }
    return array;
}

function merge(arr, left, mid, right)
{
    var i = left; 
    var j = mid + 1; 

    while (i <= mid && j <= right)
    {
        if (arr[i] > arr[j])
        {
            var tmp = arr[j]; 
            var k = j; 

            while (k > i)
            {
                arr[k] = arr[k - 1]; 
                k--;
            }

            arr[i] = tmp; 
            i++; 
            j++; 
        }
        else 
        {
            i++; 
        }
    }

    return arr; 
}