// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value)
{
    Object.assign({}, driver, {[key]: value})
}
