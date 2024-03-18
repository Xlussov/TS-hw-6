const getBiggestElInArray = (arr: (string | number)[]): string | number | undefined=> {
   if(arr.length === 0) return undefined
      let biggestString = arr[0]
      for(let i = 0; i < arr.length; i++){
         if(typeof arr[i] === 'number' && arr[i] > biggestString){
            biggestString = arr[i]
         }else if(typeof arr[i] === 'string' && arr[i].toString().length > biggestString.toString().length){
            biggestString = arr[i]
         }
      }
      return biggestString
}

const arr1: number[] = [1,2,310,4,5,2,3,3,3,5,2,4,44,2,4,488]
const arr2: string[] = ['sadfsf', 'afssfsf', 'd', 'asfsdafasdf', 'asfasddgvbmasfdfasfdf','df','asf']


console.log(getBiggestElInArray(arr1));
console.log(getBiggestElInArray(arr2));
