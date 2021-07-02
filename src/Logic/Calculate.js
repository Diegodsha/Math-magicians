const calculate = (calcDataObject, btnName) =>{
    const {total, next, operation} = calcDataObject

  switch (btnName) {
      case 'AC':
          return {
              total:null,
              next:null,
              operation:null
          }
          case'+/-':
          if (total){
              return{
                  total: `${total * - 1}`,
                  next,
                  operation:null
              }
          }
          if(next){
              return{
                total: `${total * - 1}`,
                next:next,
                operation:operation
              }
          }
   default:
      if (0) return 0

      return {
          total,
          next,
          operation
      }
    }
}