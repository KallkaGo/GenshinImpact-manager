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

export {
  queryMenuList
}