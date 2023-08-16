import { ITab } from "../interface";

export const activeFunc = (id: string, dataSource: ITab[], callback: (type: boolean) => void) => {
    dataSource.forEach((currentItem, index) => {
        if (currentItem.id == id) {
            currentItem.isActive = !currentItem.isActive;
            callback(currentItem.isActive);
            return
        }
        currentItem.isActive = false;
    })
}