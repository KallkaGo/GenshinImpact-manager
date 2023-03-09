
export default function menuPath(currentMenu: any, MenuList: Array<any>, breadcrumb?: Array<any>): any {
  for (const menu of MenuList) {
    if (menu.menuName === currentMenu.menuName) {
      breadcrumb?.push({ menuName: menu.menuName })
      return menu
    } else if (menu.child) {
      breadcrumb?.push({ menuName: menu.menuName })
      const findMenu = menuPath(currentMenu, menu.child, breadcrumb)
      if (findMenu !== undefined) {
        return findMenu
      } else {
        /* 
        不可以使用 breadcrumb=[]
        函数中的参数也会在内存中开辟空间。在JavaScript中，对象、数组、函数都是引用类型，在函数内部对它们进行修改时，修改的是它们在内存中的地址，而不是它们的值。
        因此，当你在函数中给参数重新赋值时，它只是在内存中创建了一个新的对象，而原始对象的引用并没有改变
        */
        breadcrumb!.length = 0
      }
    }
  }
}
export function pathMapBreadcrumb(userMenus: any[], currentPath: object) {
  const breadcrumb: Array<any> = []
  menuPath(currentPath, userMenus, breadcrumb)
  return breadcrumb

}

