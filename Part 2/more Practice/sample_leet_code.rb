
# Brute force solution 
def two_sum(nums, target)
nums.each_with_index do | num, i |
    ((i+1)...nums.length).each do |j|
        return [i, j] if (num + nums[j]) == target
    end 
    end 
end

def two_sum(nums, target)
    total = Hash.new
    nums.each_with_index do |num, i|
        return [total[num], i] if total.key?(num)
        number_needed = target - num
        total[number_needed] = i 
    end 
end 
