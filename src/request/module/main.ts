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
    params:{
      id:param
    }
  })
}

const addMenu =(param:any)=>{
  return Request.post({
    url:'/menu/add',
    data:param
  })
}

const deleteMenu =(param:number)=>{
  return Request.post({
    url:'/menu/delete',
    params:{
      id:param
    }
  })
}

const updateMenu =(params:any)=>{
return Request.post({
  url:'/menu/update',
  data:params
})
}


export {
  queryMenuList,
  addMenuList,
  queryMenuListById,
  addMenu,
  deleteMenu,
  updateMenu
}