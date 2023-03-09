export default function menuPath(currentMenu: any, MenuList: Array<any>, breadcrumb?: Array<any>): any {

  for (const menu of MenuList) {
    if (menu.menuName === currentMenu.menuName) {
      breadcrumb?.push({ menuName: menu.menuName })
      return menu
    } else if (menu.child) {
      const findMenu = menuPath(currentMenu, menu.child)

      if (findMenu) {
        breadcrumb?.push({ menuName: menu.menuName })
        breadcrumb?.push({ menuName: findMenu.menuName })
        return findMenu
      }
    }
  }
}

export function pathMapBreadcrumb(userMenus: any[], currentPath: object) {
  const breadcrumb: Array<any> = []
  menuPath(currentPath, userMenus, breadcrumb)
  return breadcrumb

}