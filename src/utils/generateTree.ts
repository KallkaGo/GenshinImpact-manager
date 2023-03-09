export default function generateTree(data: any[], parentId = 0) {
  const result:Array<any> = []
  for (const item of data) {
    if (item.parentId === parentId) {
      const children = generateTree(data, item.id)
      if (children) {
        item.child = children
      }
      result.push(item)
    }
  }

  return result
}