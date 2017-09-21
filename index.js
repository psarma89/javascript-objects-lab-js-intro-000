var recipes = {}

function updateObjectWithKeyAndValue(object,key,value){
  var newObject = Object.Assign({},object,{[key]:value})
  return newObject
}
