import Request from '../index'

const queryMenuList = (cur=1,size=10) => {
  return Request.post({
    url: "/menu/page",
    params:{
      current:cur,
      size:size
    },
    data:{}
  })
}


const addMenuList =(payload:any)=>{
  return Request.post({
    url:'/menu/add',
    data:payload
  })
}

const queryMenuListById=(param:number)=>{
  return Request.post({
    url:'/menu/find',
    data:{
      id:param
    }
  })
}


export {
  queryMenuList,
  addMenuList,
  queryMenuListById
}